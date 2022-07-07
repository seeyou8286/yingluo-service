import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import config from '../../../config/default.json';

const backendurl = config.backendurl;
let deleteId;

function OrderList() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);


  const handleUpdate = (e, row) => {
    e.preventDefault();
    navigate('/update', { state: row });
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleAgreeDelete = () => {
    let username = sessionStorage.getItem("username");
    fetch(`${backendurl}/delete`, {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: `{"id":${deleteId},"updateby":"${username}"}`
    })
      .then((response) => response.json())
      .then(setOpen(false), window.location.reload(false));
  };

  const handleDelete = (e, row) => {
    // console.log(row);
    e.preventDefault();
    setOpen(true);
    deleteId = row.id;
    console.log(deleteId)
  };

  function initData() {
    fetch(`${backendurl}/retrieve`, {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: `{"hours":"24"}`
    })
      .then((response) => response.json())
      .then((datejson) => {
        setData(datejson);
      });
  }

  const handleSearch = (e, hours) => {
    fetch(`${backendurl}/retrieve`, {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: `{"hours":${hours}}`
    })
      .then((response) => response.json())
      .then((datejson) => {
        setData(datejson);
      });
  };


  useEffect(() => {
    console.log(sessionStorage.getItem("logged"))
    if (!sessionStorage.getItem("logged")) {
      navigate("/login");
    }
    initData();
  }, []);

  return (
    <div>
      <div className="center">
        <Button className = "button" variant="contained" color="primary" type="submit" onClick={(e) => handleSearch(e, "24")}>
              过去24小时订单
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className = "button" variant="contained" color="primary" type="submit" onClick={(e) => handleSearch(e, "72")}>
              过去3天订单
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className = "button" variant="contained" color="primary" type="submit" onClick={(e) => handleSearch(e, "720")}>
              过去30天订单
        </Button>
      </div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"您正在进行危险动作"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            亲，你确定要删除吗？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button onClick={handleAgreeDelete} autoFocus>
            确定
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>序列号</TableCell>
            <TableCell align="center">项目名称&nbsp;(数量)</TableCell>
            <TableCell align="center">精油类型</TableCell>
            <TableCell align="center">受力程度</TableCell>
            <TableCell align="center">精油使用量</TableCell>
            <TableCell align="center">客户电话</TableCell>
            <TableCell align="center">技师</TableCell>
            <TableCell align="center">客户姓名</TableCell>
            <TableCell align="center">下单时间</TableCell>
            <TableCell align="center">修改时间</TableCell>
            <TableCell align="center">修改人</TableCell>
            <TableCell align="center">地址</TableCell>
            <TableCell align="center">来源</TableCell>
            <TableCell align="center">充值</TableCell>
            <TableCell align="center">其他</TableCell>
            <TableCell align="center">更新</TableCell>
            <TableCell align="center">删除</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="center">{row.oiltype}</TableCell>
              <TableCell align="center">{row.strength}</TableCell>
              <TableCell align="center">{row.oilvolumn}</TableCell>
              <TableCell align="center">{row.customerphoneno}</TableCell>
              <TableCell align="center">{row.mastername}</TableCell>
              <TableCell align="center">{row.customername}</TableCell>
              <TableCell align="center">{row.orderdate}</TableCell>
              <TableCell align="center">{row.updateddate}</TableCell>
              <TableCell align="center">{row.updateby}</TableCell>
              <TableCell align="center">{row.place}</TableCell>
              <TableCell align="center">{row.source}</TableCell>
              <TableCell align="center">{row.topupamount}</TableCell>
              <TableCell align="center">{row.others}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={(e) => handleUpdate(e, row)}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  更改
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={(e) => handleDelete(e, row)}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  删除
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
}
export default OrderList;
