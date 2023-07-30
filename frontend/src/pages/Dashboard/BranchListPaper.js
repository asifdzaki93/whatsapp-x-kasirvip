import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Avatar, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  listItem: {
    alignItems: 'flex-start',
  },
  listItemText: {
    marginLeft: theme.spacing(2),
  },
}));

function BranchListPaper({ branchData }) {
  const classes = useStyles();

  return (
      <List>
        {branchData.map((branch) => (
          <React.Fragment key={branch.id_store}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <Avatar alt={branch.name_store} src={branch.photo} className={classes.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={branch.name_store}
                secondary={`Omset: $${branch.omset} | Transaksi: ${branch.transaksi} | Order: ${branch.order}`}
                className={classes.listItemText}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
  );
}

export default BranchListPaper;
