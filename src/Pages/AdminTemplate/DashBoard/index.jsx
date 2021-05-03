import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardDashBoard from 'Components/CardItem'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 70,
  },
});

export default function DashBoard() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
      <Grid item xs={3}>
          <CardDashBoard/>
        
      </Grid>
    </Grid>
  );
}

