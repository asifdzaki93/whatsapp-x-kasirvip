import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const SalesTable = () => {
  const [rows, setRows] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortModel, setSortModel] = useState([{ field: 'date', sort: 'desc' }]);
  const [searchTerm, setSearchTerm] = useState("");
  const [firstDate, setFirstDate] = useState(new Date());
  const [lastDate, setLastDate] = useState(new Date());
  

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'idtable', headerName: 'ID Table', width: 150 },
    { field: 'no_invoice', headerName: 'Invoice No.', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'payment', headerName: 'Payment', width: 150 },
    { field: 'totalorder', headerName: 'Total Order', width: 150 },
    { field: 'totalpay', headerName: 'Total Pay', width: 150 },
  ];

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://zieda.id/pro/geten/transaction/listpreordervip.php', {
        params: {
          key: 'c910eae7e30da15a60e2cbebea6fabd0',
          first_date: firstDate.toISOString().split('T')[0],
          last_date: lastDate.toISOString().split('T')[0],
          page: page + 1,
          limit: pageSize,
          sort_by: sortModel[0]?.field,
          sort_order: sortModel[0]?.sort === 'asc' ? 'ASC' : 'DESC',
          search_term: searchTerm,
        },
      });
      setRows(response.data.data);
      setTotalRows(response.data.totalRows);
    } catch (error) {
      console.error('There was an error!', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, sortModel, searchTerm, firstDate, lastDate]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <TextField
        id="search-input"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="first-date-picker-dialog"
          label="First Date"
          format="MM/dd/yyyy"
          value={firstDate}
          onChange={setFirstDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="last-date-picker-dialog"
          label="Last Date"
          format="MM/dd/yyyy"
          value={lastDate}
          onChange={setLastDate}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        onPageChange={(newPage) => setPage(newPage)}
        onSortModelChange={(model) => setSortModel(model)}
        pagination
        paginationMode="server"
        loading={loading}
        rowCount={totalRows}
      />
    </div>
  );
};

export default SalesTable;
