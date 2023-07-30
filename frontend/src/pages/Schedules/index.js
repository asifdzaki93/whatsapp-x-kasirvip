import React, { useState } from "react";

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
import TableRowSkeleton from "../../components/TableRowSkeleton";
import ScheduleModal from "../../components/ScheduleModal";
import ConfirmationModal from "../../components/ConfirmationModal";

const useStyles = makeStyles((theme) => ({
  mainPaper: {
    flex: 1,
    padding: theme.spacing(1),
    overflowY: "scroll",
    ...theme.scrollbarStyles,
  },
}));

const Schedules = () => {
  const classes = useStyles();

  const [searchParam, setSearchParam] = useState("");
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const handleOpenScheduleModal = () => {
    setScheduleModalOpen(true);
  };

  const handleCloseScheduleModal = () => {
    setScheduleModalOpen(false);
  };

  const handleSearch = (event) => {
    setSearchParam(event.target.value.toLowerCase());
  };

  return (
    <MainContainer>
      <ConfirmationModal />
      <ScheduleModal open={scheduleModalOpen} onClose={handleCloseScheduleModal} />
      <MainHeader>
        <Title>{"Schedules"}</Title>
        <MainHeaderButtonsWrapper>
          <TextField
            placeholder={"Search Placeholder"}
            type="search"
            value={searchParam}
            onChange={handleSearch}
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
            onClick={handleOpenScheduleModal}
          >
            {"Add"}
          </Button>
        </MainHeaderButtonsWrapper>
      </MainHeader>
      <Paper className={classes.mainPaper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">{"Contact"}</TableCell>
              <TableCell align="center">{"Body"}</TableCell>
              <TableCell align="center">{"Send At"}</TableCell>
              <TableCell align="center">{"Status"}</TableCell>
              <TableCell align="center">{"Actions"}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <>
              <TableRow>
                <TableCell align="center">{"Sample Contact"}</TableCell>
                <TableCell align="center">{"Sample Body"}</TableCell>
                <TableCell align="center">{"Sample SendAt"}</TableCell>
                <TableCell align="center">{"Sample Status"}</TableCell>
                <TableCell align="center">
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>

                  <IconButton size="small">
                    <DeleteOutlineIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRowSkeleton columns={4} />
            </>
          </TableBody>
        </Table>
      </Paper>
    </MainContainer>
  );
};

export default Schedules;
