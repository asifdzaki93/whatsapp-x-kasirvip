import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(2),
  },
}));

const branchData = [
  { id: 1, name: 'Branch A', totalSales: 5000, rank: 1 },
  { id: 2, name: 'Branch B', totalSales: 4500, rank: 2 },
  { id: 3, name: 'Branch C', totalSales: 4000, rank: 3 },
  { id: 4, name: 'Branch D', totalSales: 3500, rank: 4 },
  // Add more branches data here...
];

function RankingTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="branch ranking table">
        <TableHead>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Branch</TableCell>
            <TableCell>Total Sales</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {branchData.map((branch) => (
            <TableRow key={branch.id}>
              <TableCell>{branch.rank}</TableCell>
              <TableCell>
                <Avatar alt={branch.name} src={`https://source.unsplash.com/50x50/?branch`} className={classes.avatar} />
                {branch.name}
              </TableCell>
              <TableCell>${branch.totalSales}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RankingTable;
