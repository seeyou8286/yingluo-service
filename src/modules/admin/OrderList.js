import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

function createData(
  name,
  calories,
  fat,
  carbs,
  protein
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default class  OrderList extends React.Component{

  constructor(props) {
    super(props);
    this.state = {data: []};
  }


  componentDidMount() {
    // fetch("https://lispa.live/info/retrieve")
    fetch("http://localhost:3000/info/retrieve")
    .then(response=> response.json())
    .then(datejson=>{
      this.setState({data:datejson});})
  }

  render() {
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
          {this.state.data.map((row) => (
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
              <TableCell align="right">{row.oilType}</TableCell>
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
                <Button variant="contained" color="primary" type="submit">
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
}