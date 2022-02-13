import React from "react";
import { Paper,Grid,Typography } from "@mui/material";

const TourCard = () => {
  return (
    <Grid item xs={4}>
      <Paper elevated={3}>
          {/* Image */}
           <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"></img>
          {/* Title */}
          <Typography variant="h5">
              Immerse into the falls
          </Typography>
          <Typography varaint="caption">
              5 Hours
          </Typography>
        
        </Paper>
    </Grid>
  );
};

export default TourCard;
