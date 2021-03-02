import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    width: 190,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  btn: {
    marginTop: theme.spacing(1.6),
  },
}));
