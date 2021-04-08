import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  bannerImg: {
    marginTop: 70,
    width: "100%",
    height: 400,
    filter: "blur(50px)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  banner: {
    position: "relative",
    cursor: "pointer",
    marginTop: 70,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  heading: {
    position: "absolute",
    top: 120,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  poster: {
    width: 200,
    height: 300,
  },
  play: {
    position: "absolute",
    top: "50%",
    left: "60%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "2px solid white",
    borderRadius: "50%",
    transition: "all 0.5s",
    "&:hover": {
      color: theme.palette.secondary.main,
      borderColor: "#f1684e",
    },
  },
  btn: {
    marginTop: 20,
    transition: "all 0.5s",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: theme.palette.primary.dark,
    },
  },
  table: {
    width: "60%!important",
    height: "700px",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "5px 5px #b93724",
    [theme.breakpoints.down("lg")]: {
      width: "70%!important",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%!important",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90%!important",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%!important",
    },
  },

  content: {
    display: "flex",
    flex: "1 1 auto",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
  },
  cover: {
    display: "inline-block",
    width: 50,
    height: 50,
  },
  txt: {
    textAlign: "left",
    width: 200,
  },
}));
