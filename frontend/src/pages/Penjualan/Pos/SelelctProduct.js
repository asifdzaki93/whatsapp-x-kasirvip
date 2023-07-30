import React, { useState, useContext } from "react";
import {
  Avatar,
  Grid,
  Typography,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  ListItemAvatar,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Snackbar,
  makeStyles
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { CartContext } from "../../CartContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  card: {
    maxWidth: 345,
    position: 'relative',
  },
  media: {
    height: 140,
  },
  floatingButton: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function SelectProduct() {
  const classes = useStyles();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10000, image: 'https://via.placeholder.com/150', description: 'Description 1', category: 'Cat 1' },
    { id: 2, name: 'Product 2', price: 20000, image: 'https://via.placeholder.com/150', description: 'Description 2', category: 'Cat 2' },
    { id: 3, name: 'Product 3', price: 30000, image: 'https://via.placeholder.com/150', description: 'Description 3', category: 'Cat 1' },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);

  const { cart, addToCart, removeFromCart, changeQuantity } = useContext(CartContext);

  const handleAddToCart = product => {
    addToCart(product);
    setOpen(true);
  };

  const handleRemoveFromCart = productId => {
    removeFromCart(productId);
  };

  const handleChangeQuantity = (productId, newQuantity) => {
    changeQuantity(productId, newQuantity);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5" gutterBottom>Select Product</Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
            >
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={'Cat 1'}>Cat 1</MenuItem>
              <MenuItem value={'Cat 2'}>Cat 2</MenuItem>
              {/* Add more categories as needed */}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: '1em' }}>
        {isMediumScreen ? (
          <Grid item xs={12}>
            <Typography variant="h6" style={{ marginTop: '2em' }}>Keranjang</Typography>
            <Paper>
              <List>
                {cart.map(item => (
                  <ListItem key={item.product.id}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar} src={item.product.image} />
                    </ListItemAvatar>
                    <ListItemText primary={item.product.name} secondary={`Quantity: ${item.quantity}`} />
                    <ListItemSecondaryAction>
                      <Typography>{`Rp. ${(item.product.price * item.quantity).toLocaleString('id-ID')}`}</Typography>
                      <IconButton edge="end" onClick={() => handleChangeQuantity(item.product.id, Math.max(0, item.quantity - 1))}>
                        <RemoveIcon />
                      </IconButton>
                      <TextField type="number" value={item.quantity} onChange={e => handleChangeQuantity(item.product.id, Math.max(0, parseInt(e.target.value)))} />
                      <IconButton edge="end" onClick={() => handleChangeQuantity(item.product.id, item.quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(item.product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ) : null}
        <Grid item xs={12} sm={6} md={8}>
          <Grid container spacing={2}>
            {products
              .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .filter(product => category ? product.category === category : true)
              .map(product => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={product.id}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography variant="h6" noWrap>{product.name}</Typography>
                      <Typography variant="body2" color="textSecondary" component="p" noWrap>{product.description}</Typography>
                      <Typography variant="h6">{`Rp. ${product.price.toLocaleString('id-ID')}`}</Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to cart" onClick={() => handleAddToCart(product)}>
                        <AddShoppingCartIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Grid>
        {!isMediumScreen ? (
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" style={{ marginTop: '2em' }}>Keranjang</Typography>
              <List>
                {cart.map(item => (
                  <ListItem key={item.product.id}>
                    <ListItemAvatar>
                      <Avatar className={classes.avatar} src={item.product.image} />
                    </ListItemAvatar>
                    <ListItemText primary={item.product.name} secondary={`Quantity: ${item.quantity}`} />
                    <ListItemSecondaryAction>
                      <Typography>{`Rp. ${(item.product.price * item.quantity).toLocaleString('id-ID')}`}</Typography>
                      <IconButton edge="end" onClick={() => handleChangeQuantity(item.product.id, Math.max(0, item.quantity - 1))}>
                        <RemoveIcon />
                      </IconButton>
                      <TextField type="number" value={item.quantity} onChange={e => handleChangeQuantity(item.product.id, Math.max(0, parseInt(e.target.value)))} />
                      <IconButton edge="end" onClick={() => handleChangeQuantity(item.product.id, item.quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveFromCart(item.product.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
          </Grid>
        ) : null}
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success" elevation={6} variant="filled">
          Product successfully added to cart!
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}
