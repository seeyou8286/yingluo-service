import React, { useState, useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function  OrderList ()
{
  const navigate = useNavigate();
  const [data, setData] = useState([]);


  const handleUpdate = (e,row) =>{
    console.log(row);
    e.preventDefault();
    navigate("/update")
  };

  function initData() {
    fetch("http://localhost:3000/info/retrieve")
    .then(response=> response.json())
    .then(datejson=>{
      setData(datejson);
    })
  }

  useEffect(() => {
    // Some initialization logic here
    initData();
  }, []);
  
 
    return (
      
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
                <Button onClick={(e) => handleUpdate(e,row)} variant="contained" color="primary" type="submit">
                 更改
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    );
}
export default OrderList;