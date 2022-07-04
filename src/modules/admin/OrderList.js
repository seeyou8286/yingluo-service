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
    fetch("https://lispa.live/info/delete", {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: `{"id":${deleteId}}`
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
    fetch("https://lispa.live/info/retrieve")
      .then((response) => response.json())
      .then((datejson) => {
        setData(datejson);
      });
  }

  useEffect(() => {
    console.log(sessionStorage.getItem("logged"))
    if (!sessionStorage.getItem("logged")) {
      navigate("/login");
    }
    initData();
  }, []);

  return (
    <div>
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
            <TableCell align="right">项目名称&nbsp;(数量)</TableCell>
            <TableCell align="right">精油类型</TableCell>
            <TableCell align="right">受力程度</TableCell>
            <TableCell align="right">精油使用量</TableCell>
            <TableCell align="right">客户电话</TableCell>
            <TableCell align="right">技师</TableCell>
            <TableCell align="right">客户姓名</TableCell>
            <TableCell align="right">下单时间</TableCell>
            <TableCell align="right">地址</TableCell>
            <TableCell align="right">来源</TableCell>
            <TableCell align="right">充值</TableCell>
            <TableCell align="right">操作</TableCell>
            <TableCell align="right">操作</TableCell>
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
              <TableCell component="th" scope="row">
                {row.item}
              </TableCell>
              <TableCell align="right">{row.oiltype}</TableCell>
              <TableCell align="right">{row.strength}</TableCell>
              <TableCell align="right">{row.oilvolumn}</TableCell>
              <TableCell align="right">{row.customerphoneno}</TableCell>
              <TableCell align="right">{row.mastername}</TableCell>
              <TableCell align="right">{row.customername}</TableCell>
              <TableCell align="right">{row.orderdate}</TableCell>
              <TableCell align="right">{row.place}</TableCell>
              <TableCell align="right">{row.source}</TableCell>
              <TableCell align="right">{row.topupamount}</TableCell>
              <TableCell align="right">
                <Button
                  onClick={(e) => handleUpdate(e, row)}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  更改
                </Button>
              </TableCell>
              <TableCell align="right">
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
