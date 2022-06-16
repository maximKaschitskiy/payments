import * as React from "react";

import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Review({ fromApi }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review
      </Typography>
      <Grid container spacing={2}>
        <Grid item container direction="column" xs={12} sm={6}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography gutterBottom>Request ID:</Typography>
              <Typography gutterBottom>{fromApi._id}</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom>Amount:</Typography>
              <Typography gutterBottom>{fromApi.amount}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
