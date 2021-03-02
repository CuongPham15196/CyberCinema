import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";
import { Box, Fade } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export default function CardMovie(props) {
  const classes = useStyles();
  const { movie, setData } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea
        style={{ position: "relative" }}
        onMouseEnter={handleChange}
        onMouseLeave={handleChange}
      >
        <CardMedia className={classes.media} image={movie.hinhAnh} title="Contemplative Reptile" />
        <Fade in={checked}>
          <button className={classes.play} onClick={() => setData(movie.trailer, true)}>
            <PlayArrowIcon fontSize="large" />
          </button>
        </Fade>
      </CardActionArea>

      <CardContent style={{ fontWeight: "bold", padding: "0" }}>
        {movie.tenPhim}
        <Box component="fieldset" borderColor="transparent">
          <Rating
            name="read-only"
            value={movie.danhGia / 2}
            precision={0.5}
            readOnly
            size="small"
          />
        </Box>
      </CardContent>
      <CardActions style={{ textAlign: "center" }}>
        <Button variant="contained" color="secondary" style={{ width: "100%" }}>
          Mua vé
        </Button>
      </CardActions>
    </Card>
  );
}
