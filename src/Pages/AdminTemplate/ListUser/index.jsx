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
import { Button, makeStyles, Typography } from "@material-ui/core";
import { listUserApi } from "Reducer/listUser";
import Loading from "Components/Loading";
import { deleteUserApi } from "Reducer/deleteUser";
import UpdateUserModal from "Components/UpdateUserModal"
import $ from "jquery"

const useStyles = makeStyles((theme) => ({
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
  }
}));


function ListUser(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [editUser,onEdit] = useState({
    email:"",
    hoTen:"",
    maLoaiNguoiDung:"",
    matKhau:"",
    soDt:"",
    taiKhoan:"",
})
  const listUser = useSelector((state) => state.listUser.data);
  const listUserLoading = useSelector((state) => state.listUser.loading);
 
  const handleEditUser=(user)=>{
      const {taiKhoan,hoTen,maLoaiNguoiDung,matKhau,soDt,email} = user
      onEdit({
          email,
          hoTen,
          maLoaiNguoiDung,
          matKhau,
          soDt,
          taiKhoan,
      })
      
  }
 const renderModalUpdate =() =>{
    return <UpdateUserModal key={editUser.taiKhoan} userUpdate={editUser}/>;
 }
 
  const handleDeleteUser= async (userDelete) =>{
    await  dispatch(deleteUserApi(userDelete))
    await dispatch(listUserApi())
      
  }
  const renderListUser = () =>{
    return listUser?.map((user, index) => (
      <TableRow key={index}>
        <TableCell className={classes.tablePadding} align="center">{user.hoTen}</TableCell>
        <TableCell className={classes.tablePadding} align="center">{user.taiKhoan}</TableCell>
        <TableCell className={classes.tablePadding} align="center">{user.soDt}</TableCell>
        <TableCell className={classes.tablePadding} align="center">{user.email}</TableCell>
        <TableCell className={classes.tablePadding} align="center">{user.matKhau}</TableCell>
        <TableCell className={classes.tablePadding} align="center">{user.maLoaiNguoiDung}</TableCell>
        <TableCell className={classes.tablePadding} style={{display:"flex"}}>
          <Button variant="contained" className={classes.btnEdit} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>handleEditUser(user)} >
            Edit
          </Button>
          <Button variant="contained" className={classes.btnDel} onClick ={()=>handleDeleteUser(user.taiKhoan)}>
            Delete  
          </Button>
        </TableCell>
      </TableRow>
    ))
  }
  
  useEffect(() => {
    dispatch(listUserApi());
    
  }, []);
  
  if (listUserLoading) return <Loading />;
  return (
    <div>
      <NavBarAdmin routelink={"/list-user"} />
      <TableContainer >
        <Typography variant="h2" className={classes.header} component="h3">
          Danh Sách Người Dùng
        </Typography>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablePadding} align="center">Họ Tên</TableCell>
              <TableCell className={classes.tablePadding} align="center">Tài Khoản</TableCell>
              <TableCell className={classes.tablePadding} align="center">Số điện thoại</TableCell>
              <TableCell className={classes.tablePadding} align="center">Email</TableCell>
              <TableCell className={classes.tablePadding} align="center">Mật khẩu</TableCell>
              <TableCell className={classes.tablePadding} align="center">Mã Loại người dùng</TableCell>
              <TableCell className={classes.tablePadding}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody    >
            {renderListUser()}
          </TableBody>
        </Table>
      </TableContainer>
      {renderModalUpdate()}
    </div>
  );
}

export default ListUser;

