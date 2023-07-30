import React, { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, 
  IconButton, Grid, Card, CardActionArea, CardContent, CardMedia, 
  Typography, Checkbox, TextField } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from 'axios';
import debounce from 'lodash.debounce';
import api from "../../services/api";
import openSocket from "../../services/socket-io";
import toastError from "../../errors/toastError";


const ProductDialog = ({ inputMessage, setInputMessage }) => {  
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 
	const [settings, setSettings] = useState([]);

	useEffect(() => {
		const fetchSession = async () => {
			try {
				const { data } = await api.get("/settings");
				setSettings(data);
			} catch (err) {
				toastError(err);
			}
		};
		fetchSession();
	}, []);

  useEffect(() => {
		const socket = openSocket();

		socket.on("settings", data => {
			if (data.action === "update") {
				setSettings(prevState => {
					const aux = [...prevState];
					const settingIndex = aux.findIndex(s => s.key === data.setting.key);
					aux[settingIndex].value = data.setting.value;
					return aux;
				});
			}
		});
  

		return () => {
			socket.disconnect();
		};
	}, []);

	const getSettingValue = key => {
		const { value } = settings.find(s => s.key === key);
    
		return value;
	};



  //const otherApiToken = settings && settings.length > 0 && getSettingValue("otherApiToken");
  let ApiToken = `c910eae7e30da15a60e2cbebea6fabd0`;
  
  let url = `https://zieda.id/pro/geten/product/cari.php?key=${ApiToken}&search=`
  const fetchProducts = useCallback(debounce((searchTerm) => {
    const API_URL = `${url}${searchTerm}`;
    axios.get(API_URL)
      .then(response => {
        if (response.data.status === "true") {
          setProducts(response.data.data);
        }
      });
  }, 500), []);

  useEffect(() => {
    if (searchTerm) {
      fetchProducts(searchTerm);
    }
  }, [searchTerm, fetchProducts]);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleInsert = () => {
    const chosenProducts = products.filter(product => 
      selectedProducts.includes(product.id_product)
    );

    function capitalizeWords(str) {
      return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    const message = chosenProducts.map(product => 
      `- *${capitalizeWords(product.name_product)}* - Rp. ${product.selling_price} \n  🥧 ${product.img}\n`
    ).join('\n');
  
    setInputMessage(prevState => prevState ? prevState + '\n' + message : message);
    console.log('Produk yang dipilih:', chosenProducts);
    handleClose();

    setSelectedProducts([]); // Menambahkan ini untuk mereset pilihan Checkbox
    handleClose();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleClickOpen}>
        <ShoppingCartIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">{"Pilih Produk"}</DialogTitle>
        <DialogContent>
        {/* <TextField
						id="other-api-token-setting"
						label="Token Kasir.VIP"
						margin="dense"
						variant="outlined"
						fullWidth
						value={otherApiToken}
					/> */}
          <TextField
            autoFocus
            margin="dense"
            id="search"
            label="Cari Produk"
            type="text"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {products.map(product => (
            <Card key={product.id_product}>
              <Grid container>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <div style={{height: "100px", width: "100px", borderRadius: "50%", border: "1px solid #ddd", boxShadow: "2px 2px 4px #999", overflow: "hidden"}}>
                    <CardMedia
                      component="img"
                      alt={product.name_product}
                      height="100%"
                      width="100%"
                      image={decodeURI(product.img)}
                      title={product.name_product}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <CardContent>
                    <Typography variant="h6" component="h2">
                      {product.name_product}
                    </Typography>
                    <Typography color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body1">
                      {`Rp ${product.selling_price}`}
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Checkbox
                    checked={selectedProducts.includes(product.id_product)}
                    onChange={() => handleCheckboxChange(product.id_product)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                </Grid>
              </Grid>
            </Card>
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Tutup
          </Button>
          <Button onClick={handleInsert} color="secondary">
            Masukkan ke Pesan
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProductDialog;
