import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBarAdmin from "../../../Components/NavBarAdmin"; 
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, FormControl, FormHelperText, Input, InputLabel, Typography } from "@material-ui/core";
import {useStyles} from './style';
import { listTicketApi } from "Reducer/listTicket";





function ListTicket() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [maLichChieu,setMaLichChieu] = useState(0) 

  const renderListMovie = () =>{
      <TableRow >
        <TableCell className={classes.tablePadding} align="center"></TableCell>
        <TableCell className={classes.tablePadding} align="center"></TableCell>
        <TableCell className={classes.tablePadding} align="center"></TableCell>
        <TableCell className={classes.tablePadding} align="center"></TableCell>
        <TableCell  className={classes.tablePadding} align="center"></TableCell>
        <TableCell className={classes.tablePadding} align="center"></TableCell>
        <TableCell className={classes.tablePadding} align="center"></TableCell>
      </TableRow>
  }
  const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(maLichChieu)
  }
  const handleOnChange = (e)=>{
      setMaLichChieu(e.target.value)
  }
  useEffect(() => {
    async function fetchNewPage(){
        dispatch(listTicketApi(maLichChieu))
    }
    // fetchNewPage();
    }, [maLichChieu]);
  
//   if () return <Loading />;
  return (
    <div>
      <NavBarAdmin routelink={"/dash-board/user-manager"} />
      <TableContainer component={Paper} className={classes.root}>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" onChange={handleOnChange} className={classes.inputType} />
              <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
              <Button type="submit"> Submit</Button>
            </FormControl>     
        </form>
        <Typography variant="h2" className={classes.header} component="h3">
           QUẢN LÝ ĐẶT VÉ THEO MÃ LỊCH CHIẾU <span> {maLichChieu}</span>
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablePadding} align="center">Mã Phim</TableCell>
              <TableCell className={classes.tablePadding} align="center">Tên Phim</TableCell>
              <TableCell className={classes.tablePadding} align="center">Trailer</TableCell>
              <TableCell className={classes.tablePadding} align="center">Hình Ảnh</TableCell>
              <TableCell className={classes.tablePadding} align="center">Mô Tả</TableCell>
              <TableCell className={classes.tablePadding} align="center">Ngày khởi chiếu</TableCell>
              <TableCell className={classes.tablePadding}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody    >
            {renderListMovie()}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListTicket;


