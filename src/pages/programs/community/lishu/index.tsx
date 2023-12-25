import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../../data/headpics';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <img className="title-img" src={data['ps4'].src}></img>
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
              <div className="tianxing-title">立项理由</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            “梨树英语小组”是云山保护“梨树村社区保护项目”其中的一个分项目，也是目前在梨树社区持续最久的社会资源输入实践。在暂无资金支持的情况下，依靠18位志愿者连续20个月不间断的努力，小组已为梨树社区的适龄孩童带去近百节英语口语课堂。我们希望借助英文小组，将边境区域目前缺少的社会资源引入其中，提升社区发展与长臂猿保护行动之间的连接。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            英文小组本身并非一个支教项目。小组目标更侧重在紧密而轻松的接触中，让孩子们有机会用很小的时间成本尝试新事物，有机会得到应试教育单一评价体系之外的肯定。这种肯定，尽量避免知识体系的信息差所带来的规训意味，而是用更为亲密的关怀、更为真诚的行动进入彼此的世界，以此为社区保护行动扎根奠定基础。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2020年7月-8月，云山保护英文小组初创成员，云山保护长期以来的支持者洁琦以及她女儿月亮来到梨树社区展开英文小组的实践。
            2020年9月，云山保护开启线上英文小组的实践，并持续招募了5名志愿者老师为小朋友带来自然拼读法课程。
            2021年11月，以梨树社区为中心，英文小组开始尝试辐射周边的乡村小组。
            截至2022年4月，云山英文小组已吸纳18名核心志愿者（包括3名社区内部志愿者），为梨树社区的小朋友带去持续20个月的英文教育课程。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650432373&idx=1&sn=06b673a051390cb251213d707fa63aa2&chksm=f2eb7dd2c59cf4c41dd88a9cfd4ca7946352a3da9e62fe2ec806316ab3fa2bb99faa229bfdc3&token=1317119189&lang=zh_CN#rd">
              陈镜羽：社区工作，重新思考物种保护中人的位置
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
