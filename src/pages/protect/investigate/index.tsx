import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card, Divider } from 'antd';
import './index.less';
import {
  HomeOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import data from '../../../data/investigate';

const Investigate: React.FC = props => {
  const intl = useIntl();

  const renderProject1 = () => (
    <Grid
      item
      xs={12}
      sm={10}
      md={8}
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={12}>
        {/* <div className='tianxing-sub-title'>-长臂猿数量和分布调查，及持续的种群动态监测-</div> */}
      </Grid>
      <Grid item>
        我们会选择长臂猿历史分布区、近年有过疑似长臂猿目击或鸣叫记录、且长期以来并没有开展过系统摸底调查的区域开展此项目。
        对策是使用较为节约人力的监听设备替代人工，通过系统地设备布置，提高调查效率。结合详细的社区访问调查，确定实际调查的栖息地范围。务必坐实调查点是否可能有长臂猿残留分布的现状，尽可能分析出此地区长臂猿种群数量减少或者消失的历史原因。
      </Grid>
    </Grid>
  );

  return (
    <div className="article-container">
      <img className="title-img" src={data['img1'].src}></img>
      <Card>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="inv-title">背景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            我国有确凿分布记录的6种长臂猿全部属于一级保护动物，其中5种被IUCN红色名录列为极度濒危（CR），还有一种被列为濒危（EN）。白掌长臂猿和北白颊长臂猿在中国野外已经多年没有确凿分布记录，相关科研院校在保护区内的历史分布区开展过针对性的野外调查也得出了悲观的结论。长臂猿保护最有效的措施是保护它们赖以生存的原始森林，而现状是很多栖息地都面临破碎化和质量下降，从而使得长臂猿的部分小种群面临灭绝风险。2018年底至2019年初，云山保护共开展了三次分别针对北白颊长臂猿、西黑冠长臂猿以及白掌长臂猿的社区调查，收获了濒危物种重要的历史分布信息以及潜在线索，而每一条线索都是这些可能在中国“消失”的长臂猿保护的曙光。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            中国西南地区山脉密集、交通不便，很多地区的生物多样性本底信息极度缺乏调查，许多潜在有长臂猿分布的栖息地未开展过系统的摸底调查，一些原始栖息地没有受到有效的保护。因为缺少了解与保护界的关注，我们可能忽视了一些潜在的长臂猿种群，如果不通过调查确定它们的分布并采取紧急保护措施，这些可能残存的小种群未来将会真正消失。目前项目执行的主要挑战是野生动物摸底调查耗费的人力物力较高，且很难在知识空缺的区域开展成规模的调查。
          </Grid>
          <Grid item container xs={12} sm={10} md={8}>
            <Divider />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={9}>
              <div className="inv-goal">
                <ul style={{ marginTop: '10px' }}>
                  <li>
                    确认北白颊长臂猿和白掌长臂猿在我国是否还有残存的分布种群；
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={1}>
              <div className="inv-title">目</div>
              <div className="inv-title">标</div>
              {/* <Divider type="vertical" orientation="left"><div className='tianxing-title'>背景</div></Divider> */}
            </Grid>
          </Grid>
          {/* <Grid item container xs={12} sm={10} md={8} >
            <Divider />
        </Grid> */}
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            {/* <Grid xs={4}> */}
            <Divider orientation="left">
              <div className="inv-title">项目内容</div>
            </Divider>
            {/* </Grid> */}
          </Grid>
          {renderProject1()}
        </Grid>
      </Card>
    </div>
  );
};

export default Investigate;
