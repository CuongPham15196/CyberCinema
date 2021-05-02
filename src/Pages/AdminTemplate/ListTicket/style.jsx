import {makeStyles} from '@material-ui/core'


export const useStyles = makeStyles((theme) => ({
    root:{
       padding:"20px"
    },
    table: {
      maxWidth: "500px",
      margin: "auto",
      padding:theme.spacing(5)
    },
    tablePadding:{
      padding:"12px",
    },
  
    header: {
      textAlign: "center",
    },
    btnEdit:{
      backgroundColor:"#81b214",
      "&:hover":{
          backgroundColor:"green",
          color:"#fff"
      }
    },
    btnDel:{
      backgroundColor:"#fb3640",
      "&:hover":{
          backgroundColor:"#ce1212",
          color:"#fff"
      }
    },
    inputType:{
        display:"flex",
    }
  }));