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
      <img className="title-img" src={data['ps2'].src}></img>
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
              <div className="tianxing-title">背 景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            云南无量山哀牢山国家级自然保护区是森林生态系统和野生生物类别的自然保护区，以中山湿性常绿阔叶林森林生态系统以及在其生存的珍稀濒危动物为主要保护对象。保护区物种资源丰富，其中，有国家一级保护植物4种（红豆杉、长蕊木兰等）、国家一级保护动物11种（西黑冠长臂猿、灰叶猴等），面积达147万亩，周边涉及5万多人口。为了更好地开展保护工作，培养周边群众对家乡环境的喜爱，获得人们对保护的认知与支持。自2019年以来，云山保护与无量山哀牢山国家级自然保护区景东管护局等单位长期合作，围绕长臂猿栖息地周边小学开展了一系列关于西黑冠长臂猿的相关科普宣教活动。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2019年3-7月，“长臂猿小使者”科普宣传系列活动在周边小学开展“认识家乡的长臂猿”、“保护中国猿，科普进校园”科普课堂宣讲、主题游园会、长臂猿巨画制作等，游园会与科普课堂相结合的宣传方式，把保护区宣教工作向前推进了一步，保护区将继续用知识和欢乐把西黑冠长臂猿带回给生活在两山的孩子心中。
            <br />
            2021年7-9月，两山自然教育体验活动用自然教育的手法，在无量山哀牢山周边乡村小学，基于校园及周边环境，研发并开展科普课堂和校园自然周活动，促进学生对家乡自然环境的认知、理解和欣赏，让社区的年轻一代逐步了解自然和人的关系，成为实实在在的家乡生态环境守护者。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650428478&idx=1&sn=a8e4a0c6186b2a48527260786ae512c2&chksm=f2eb4a99c59cc38f2a33c96a7429afea77bf9f1d705c9e98b4bf46b7023b4df0e4e5d028c46e&token=1317119189&lang=zh_CN#rd">
              长臂猿小使者：他们将西黑冠长臂猿的故事带到广东
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
