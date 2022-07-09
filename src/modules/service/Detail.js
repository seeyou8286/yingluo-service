import React, { useState } from "react";
import DetailPic from "../../assets/detail.jpeg";
import oilspapic from "../../assets/item/精油SPA.jpeg";
import jiuzuopic from "../../assets/item/久坐.png";
import yuanqipic from "../../assets/item/元气.png";
import jingtipic from "../../assets/item/净体.png";
import nvshenpic from "../../assets/item/女神.png";
import youranpic from "../../assets/item/悠然.png";
import aoyepic from "../../assets/item/熬夜.png";
import baokuanpic from "../../assets/item/爆款.png";
import huafapic from "../../assets/item/花筏.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useLocation, useNavigate } from "react-router-dom";



const jingyou = {
  name:"【初之体验】 精油SPA",
  min:"60分钟",
  price:"298元",
  oil:"精油",
  feature:'基础精油SPA,身体12条经络疏通\n缓解疲劳，促进血液循环。\n不做臀部、胸部、头部（主：膀胱经+肝胆经）',
  rough:"放松:5min\n推油:55min",
  parts:"背部+手臂:30min\n腿部（背）:10min\n腿部（正）:10min\n腹部:5min",
  origin:"298",
  discount1:"196",
  discount2:"211",
  discount3:"223",
  pic:oilspapic
}

const jianjing = {
  name:"【久坐之殇】肩背释压",
  min:"45分钟",
  price:"188元",
  oil:"精油",
  feature:'脊柱护理：\n针对低头族、办公族、颈部血液循环不良、头痛等状态，有很好的缓解效果。\n主：肩颈）',
  rough:"趴按：35min",
  parts:"放松 5min\n背部+手臂 30min（背部中交以上）",
  origin:"188",
  discount1:"124",
  discount2:"133",
  discount3:"141",
  pic:jiuzuopic
}

const qiangyao = {
  name:"【元気臀震】强腰护肾",
  min:"60分钟",
  price:"398元",
  oil:"精油",
  feature:'局部保养:\n通过仪器和手法，\n对久坐、臀部松弛、腰臀冰凉等状态进行有效改善，\n补充元气能量，\n促进腰肾经络血液循环。\n（主：腰、肾、臀）',
  rough:"放松：5min\n仪器：15min\n推油：40min",
  parts:"腰臀 30min\n背部+手臂 10min",
  origin:"398",
  discount1:"262",
  discount2:"282",
  discount3:"298",
  pic:yuanqipic
}

const linba = {
  name:"【熬夜必点】淋巴净排",
  min:"90分钟",
  price:"488元",
  oil:"精油",
  feature:'熬夜、喝酒、睡眠不好；\n21:00～23:00淋巴排毒；\n23:00～1:00肝胆肾排毒；\n无臀部、头部\n（主：全身淋巴）',
  rough:"放松：5min\n推油+刮痧：85min",
  parts:"背部 20min\n无痛刮痧5min\n腿部（背）15min\n无痛刮痧5min\n颈部+腋下 15min  无痛刮痧5min\n腿部（正）腹部 20min ",
  origin:"488",
  discount1:"322",
  discount2:"346",
  discount3:"366",
  pic:aoyepic
}

const nailiang = {
  name:"【悠然舒展】奈良古态",
  min:"60分钟",
  price:"588元",
  oil:"精油",
  feature:'古法健能\n牵引拉伸、跪背顶腰\n无腹部、胸部\n（主：缓释疲劳、放松肌理）',
  rough:"净足：5min\n脚踝+腿部（正）+手臂45min\n腿部（反）+跪背顶腰30min\n头部：10min",
  parts:"净足：5min\n脚踝+腿部（正）+手臂45min\n腿部（反）+跪背顶腰30min\n头部：10min",
  origin:"588",
  discount1:"388",
  discount2:"417",
  discount3:"441",
  pic:youranpic
}

const daban = {
  name:"【奢宠女神】大阪樱花",
  min:"80分钟",
  price:"628元",
  oil:"精油",
  feature:'能量石热敷卵巢\n胸部淋巴疏通及卵巢保养\n（主：胸部、卵巢）',
  rough:"放松：5min\n推油：65min\n头部：10min",
  parts:"背+腰+臀20min\n腿部（背）10min\n推腹部+热石敷卵巢/腹部10min\n胸部15min\n腿部（正）10min",
  origin:"628",
  discount1:"414",
  discount2:"445",
  discount3:"471",
  pic:nvshenpic
}

const jingdu = {
  name:"【店铺爆款】京都神乐",
  min:"60分钟",
  price:"298元",
  oil:"精油",
  feature:'能量热石敷督脉、腰肾、八髎；\n疏通腹股沟周边淋巴\n（主：腰肾臀、腹股沟）',
  rough:"放松：5min（特色）\n 推油：75min\n头部：10min",
  parts:"背+腰+臀 30min\n腿部（背）10min\n腹部+胸 20min\n腿部（正）15min",
  origin:"688",
  discount1:"454",
  discount2:"488",
  discount3:"516",
  pic:baokuanpic
}

const caojing = {
  name:"【净体祛湿】草津秘汤",
  min:"120分钟",
  price:"888元",
  oil:"精油",
  feature:'泡浴祛湿/美肤\n30分钟泡澡及搓背\n能量热石敷督脉、腰肾、八髎；\n疏通腹股沟周边淋巴\n（主：腰肾臀、腹股沟）',
  rough:"泡浴：15～30min（含净足、搓背、小憩）\n放松：5min\n推油：75min\n头部：10min",
  parts:"背+腰+臀 30min\n腿部（背）10min\n腹部+胸 20min\n腿部（正）15min",
  origin:"888",
  discount1:"586",
  discount2:"630",
  discount3:"666",
  pic:jingtipic
}

const dongjing = {
  name:"【倾心奢享】东京之热",
  min:"90分钟",
  price:"988元",
  oil:"精油",
  feature:'轻柔舒缓、静心养神\n固本扶阳、通灵之源\n疏通腹股沟周边淋巴\n（主：腹股沟、外前列腺）',
  rough:"放松+指滑+会阴穴：10min\n推油：80min",
  parts:"推油及指滑左半身（背）20min\n推油及指滑右半身（背）20min\n推油及指滑左半身（正）20min\n推油及指滑右半身（正）20min",
  origin:"988",
  discount1:"652",
  discount2:"701",
  discount3:"741",
  pic:huafapic
}

const Detail = (props) => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {item} = state;
  let project;
  if(item == "精油SPA") {
    project= jingyou;
  } else if (item == "肩背释压") {
    project= jianjing;
  } else if (item == "强腰护肾") {
    project= qiangyao;
  }else if (item == "淋巴净排") {
    project= linba;
  }else if (item == "奈良古态") {
    project= nailiang;
  }else if (item == "京都神乐") {
    project= jingdu;
  }else if (item == "草津秘汤") {
    project= caojing;
  }else if (item == "东京花筏") {
    project= dongjing;
  }else if (item == "大阪樱花") {
    project= daban;
  }

  console.log(item)
  return (
    <div style={{backgroundColor:"#e8c67a"}}>
      <div>
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static" style={{ background: '#2E3B55' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              <Button onClick={(e) => {navigate(-1)}} color="inherit">返回</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <div>
        <img style={{ width: "100%", height: "100%" }} src={project.pic}></img>
      </div>
      <div style={{ paddingLeft: "20px", whiteSpace:'pre-wrap' }}>
        <h1>{project.name} </h1>
        <div>
          <div className="tag">{project.min}</div>
          <div className="tag">{project.price}</div>
          <div className="tag">{project.oil}</div>
        </div>
        <br />
        <Divider />
        <h3>项目特色 </h3>
        <p>
          {project.feature}
        </p>
        <h3>项目概述 </h3>
        <p>
          {project.rough}
        </p>
        <h3>涉及部位 </h3>
        <p>
          {project.parts}
        </p>
      </div>
      <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
        <h3>项目价格 </h3>
        <TableContainer style={{backgroundColor:"#efefde"}} component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <TableCell>原价（元）</TableCell>
                <TableCell align="right">8000+4000/6.6折</TableCell>
                <TableCell align="right">5000+2000/7.1折</TableCell>
                <TableCell align="right">30000+1000/7.5</TableCell>
                {/* <TableCell align="right">线上</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">{project.origin}</TableCell>
                <TableCell align="right">{project.discount1}</TableCell>
                <TableCell align="right">{project.discount1}</TableCell>
                <TableCell align="right">{project.discount1}</TableCell>
                {/* <TableCell align="right">{project.online}</TableCell> */}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
export default Detail;
