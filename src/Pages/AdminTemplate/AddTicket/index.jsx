import React, { useState,useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useStyles } from "../AddUser/style";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Backdrop, CircularProgress, Dialog, MenuItem,NativeSelect } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { movieService } from "Services";
import { listMovieApi } from "Reducer/listMovie";
import Loading from "Components/Loading";
import { showTimesMovieApi } from "Reducer/showTimesMoive";


export default function AddTicket(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { history } = props;
  // let [ listMovie ,setListMovie] = useState([])
  const [open, setOpen] = useState(false);
  const err = useSelector((state) => state.listMovie.err);
  const loading = useSelector((state) => state.listMovie.loading);
  const listMovieReducer = useSelector((state)=>state.listMovie.data);
  const listTheater = useSelector((state)=>state.showTimesMovie.data);
  const loadingListTheater = useSelector((state)=>state.showTimesMovie.loading)

 
  const formik = useFormik({
    initialValues: {
       maPhim:"",
       ngayChieuGioChieu:"",
       maRap:"",
       giaVe:"",
      
    },
    onSubmit: (values) => {
      console.log(values)
      
    //     console.log(values.ngayKhoiChieu)
    //   setOpen(true);
    //  await dispatch(addMovieApi(values));
    //      history.push("/list-movie");

    },
  });

 
  
  const renderAlert = () => {
    if (loading)
      return (
        <Backdrop className={classes.backdrop} open={open}>
          <CircularProgress color="secondary" />
        </Backdrop>
      );

    return (
      <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {err !== null ? (
          <Alert severity="error">{err}</Alert>
        ) : (
          <Alert severity="success">Add Success</Alert>
        )}
      </Dialog>
    );
  };
  const renderListMovieId = ()=>{
    return listMovieReducer?.map((movie,index)=>{
      return (
        <MenuItem key={movie.maPhim} value={movie.maPhim} >
        {movie.tenPhim}
      </MenuItem>
      )
    })
  
  }
  const renderListTheater = ()=>{
    return listTheater?.map((list)=>{
         return list.cumRapChieu.map(cumRap=>{
           return cumRap.lichChieuPhim.map(mLC=>{
             return (
              <MenuItem key={mLC.maLichChieu} value={mLC.maLichChieu} >
                  {mLC.maLichChieu}
              </MenuItem>
             )
           })
         })
    })
      
               
      
    

      
     
     
   
  }
  

  useEffect(() => {
    // async function  fetchMovie(){
    //    await movieService.listMovieApi().then((res)=>{
    //        setListMovie(res.data)
    //   }).catch((err)=>console.log(err))
    // }
    // fetchMovie()
    dispatch(listMovieApi())
  }, [])
  
  useEffect(()=>{
    console.log(formik.values.maPhim)
      dispatch(showTimesMovieApi(formik.values.maPhim))
  },[formik.values.maPhim])


  if(loading) return(<Loading/>)

  
  return (
        <Container component="main" maxWidth="xs">
        <CssBaseline/>
      {renderAlert()}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountBoxIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Movie
        </Typography>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                select
                error={formik.errors.maPhim && formik.touched.maPhim ? true : false}
                value={formik.values.maPhim}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="maPhim"
                variant="outlined"
                fullWidth
                id="maPhim"
                label={formik.errors.maPhim && formik.touched.maPhim ? formik.errors.maPhim : "Mã phim"}
                color="secondary"
              >
                {renderListMovieId()}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                error={formik.errors.maRap && formik.touched.maRap ? true : false}
                value={formik.values.maRap}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="maRap"
                label={
                  formik.errors.maRap && formik.touched.maRap ? formik.errors.maRap : "Mã rạp"
                }
                name="maRap"
                color="secondary"
              >
                {renderListTheater}
              </TextField>
            </Grid>
            <Grid item xs={12} >
              <TextField
                error={formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu ? true : false}
                value={formik.values.ngayChieuGioChieu}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                type="string"
                fullWidth
                id="ngayChieuGioChieu"
                format={'DD/MM/YYYY'}
                label={
                  formik.errors.ngayChieuGioChieu && formik.touched.ngayChieuGioChieu ? formik.errors.ngayChieuGioChieu : ""
                }
                name="ngayChieuGioChieu"
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                error={formik.errors.giaVe && formik.touched.giaVe ? true : false}
                value={formik.values.giaVe}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                required
                fullWidth
                id="giaVe"
                label={
                  formik.errors.giaVe && formik.touched.giaVe ? formik.errors.giaVe : "Giá Vé"
                }
                name="giaVe"
                color="secondary"
              />
            </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Add Movie
          </Button>
        </form>
      </div>
      <Box mt={5} style={{ textAlign: "center" }}>
        Copyright © 2021.All Rights Reserved By{" "}
        <span style={{ color: "#f1684e" }}>CyberCinema</span>
      </Box>
    </Container>
     
  );
}

