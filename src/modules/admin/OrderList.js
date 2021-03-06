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
  let place = sessionStorage.getItem("location")

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
      body: `{"hours":"24","place":"${place}"}`
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
      body: `{"hours":${hours},"place":"${place}"}`
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
              ??????24????????????
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className = "button" variant="contained" color="primary" type="submit" onClick={(e) => handleSearch(e, "72")}>
              ??????3?????????
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className = "button" variant="contained" color="primary" type="submit" onClick={(e) => handleSearch(e, "720")}>
              ??????30?????????
        </Button>
      </div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"???????????????????????????"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ??????????????????????????????
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>??????</Button>
          <Button onClick={handleAgreeDelete} autoFocus>
            ??????
          </Button>
        </DialogActions>
      </Dialog>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>?????????</TableCell>
            <TableCell align="center">????????????&nbsp;(??????)</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">????????????</TableCell>
            <TableCell align="center">????????????</TableCell>
            <TableCell align="center">???????????????</TableCell>
            <TableCell align="center">????????????</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">????????????</TableCell>
            <TableCell align="center">????????????</TableCell>
            <TableCell align="center">????????????</TableCell>
            <TableCell align="center">?????????</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">??????</TableCell>
            <TableCell align="center">??????</TableCell>
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
              <TableCell align="center">{row.bath}</TableCell>
              <TableCell align="center">{row.others}</TableCell>
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
              <TableCell align="center">
                <Button
                  onClick={(e) => handleUpdate(e, row)}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  ??????
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={(e) => handleDelete(e, row)}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  ??????
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
