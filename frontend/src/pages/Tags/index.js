import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";

import MainContainer from "../../components/MainContainer";
import MainHeader from "../../components/MainHeader";
import MainHeaderButtonsWrapper from "../../components/MainHeaderButtonsWrapper";
import Title from "../../components/Title";

import { Chip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
}));

const Tags = () => {
  const classes = useStyles();

  return (
    <MainContainer>
      <MainHeader>
      <Title>Title</Title>
      <MainHeaderButtonsWrapper>
        <TextField
          placeholder="Search"
          type="search"
          InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <SearchIcon style={{ color: "gray" }} />
            </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          color="primary"
        >
          Add
        </Button>
      </MainHeaderButtonsWrapper>
      </MainHeader>
      <Paper
        className={classes.mainPaper}
        variant="outlined"
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Tickets</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell align="center">
                  <Chip
                    variant="outlined"
                    style={{backgroundColor: "#000", textShadow: '1px 1px 1px #000', color: 'white'}}
                    label="Sample Tag"
                    size="small"
                  />
                </TableCell>
                <TableCell align="center">0</TableCell>
                <TableCell align="center">
                  <IconButton
                    size="small"
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    size="small"
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainContainer>
  );
};

export default Tags;
