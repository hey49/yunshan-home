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
import data from '../../../data/concolor';

const Concolor: React.FC = props => {
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
        2016年，云山保护成功申请到山水自然保护中心的澜沧江保护基金二期，开展了为期1年（2016年7月至2017年10月）的“云南永德大雪山自然保护区西黑冠长臂猿（滇西亚种）保护能力提升培训及保护宣传”项目。
      </Grid>
    </Grid>
  );

  const renderProject2 = () => (
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
        {/* <div className='tianxing-sub-title'>-长臂猿遗传多样性调查（2018年9月—持续进行中）-</div> */}
      </Grid>
      <Grid item>
        2018-2019年，云山保护和无量山国家级自然保护区景东管护局、广州动物园、南京红山动物园、华大基因共同开展西黑冠长臂猿进校园和进社区的宣传活动，并举行了护猿小使者选拔，评选出的两位景东护猿小使者在广州动物园给公众做了科普分享。
      </Grid>
    </Grid>
  );

  const renderProject3 = () => (
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
        {/* <div className='tianxing-sub-title'>-社区和学校保护宣传（2016年12月--持续进行中）-</div> */}
      </Grid>
      <Grid item>
        2020年10-12月，时隔10年之后，我们和无量山国家级自然保护区的景东管护局、南涧管护局，在昆明动物研究所和中山大学的长臂猿科研专业力量支持下，开展了无量山西黑冠长臂猿分布和数量动态调查及社区保护意识问卷调查。
      </Grid>
    </Grid>
  );

  return (
    <div className="article-container">
      <img className="title-img" src={data['img7'].src}></img>
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
              <div className="concolor-title">背景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            西黑冠长臂猿，拉丁学名：Nomascus concolor，英文名：Western black
            crested
            gibbon，属于长臂猿科（Hy|obatidae）冠长臂猿属（Nomascus），是国家I级保护动物，被IUCN红色名录列为极危，也是CITES附录中禁止国际贸易的物种。目前，其全球种群数量约为1100-1400只，其中在中国云南省境内分布有1000-1300只（2012年数据），也就是说中国保有90％以上的现生西黑冠长臂猿种群，是西黑冠长臂猿现生种群最多和保护任务最重国家。
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            direction="row"
            justify="space-between"
          >
            <Grid
              item
              container
              xs={6}
              direction="column"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                西黑冠长臂猿现有4个亚种：指名亚种N. c.
                concolor分布于红河与黑水河之间的滇中哀牢山区、滇南以及越南北部区域；景东亚种N.
                c. jingdongensis只分布于云南中部无量山区；滇西亚种N. c.
                furvogaster分布在谰沧江与怒江之间的滇西南临沧市的一些地区，如：永德大雪山、邦骂山、回汗山、窝坎大山等；老挝亚种N.
                c. lu只分布于老挝北部博胶省（Bokeo）一带。
              </Grid>
              <Grid item>
                现在云南省境内，西黑冠分布区域多已划归国家级自然保护区，但仍面临着栖息地退化和片段化的严重威胁，而造成这一威胁的主要原因包含保护区内放牧、非木材林产品的采集等人类活动的干扰。除此以外，西黑冠长臂猿种群的生存与繁衍还面临着森林火灾、小种群零星分布、保护经费不足、宣传及科研力度不足、不同行政区域单位间协作难度大等限制性因素。
              </Grid>
              <Grid item>
                滇西亚种仅分布在澜沧江与怒江之间的滇西南临沧市的一些地区，是冠长臂猿属中唯一分布于澜沧江以西的种群，也是西黑冠长臂猿中最濒危和受关注程度最低的一个亚种，除确定在永德大雪山国家级自然保护区确定分布有西黑冠长臂猿滇西亚种外，历史上曾有分布的邦马雪山、雪竹林山、亮山、窝坎大山-大青山一带的现种群数量不详，很有可能仅有极少存活。现确定分布的永德大雪山国际自然保护区受到盗猎和其它人为活动干扰的威胁，保护区受保护经费和科研能力的制约，对滇西亚种的科研监测和种群调查工作也只零星开展过而没有持续进行，仅存的滇西亚种的生存境况岌岌可危。
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <img src={data['loc'].src} style={{ width: '100%' }}></img>
            </Grid>
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
              <div className="concolor-goal">
                <ul style={{ marginTop: '10px' }}>
                  <li>了解西黑冠长臂猿种群动态变化和面临的威胁及其原因；</li>
                  <li>
                    通过建立系统的培训体系和考核指标，提升保护区工作人员和护林员专业技能，增强他们的工作积极性，提升工作效率；
                  </li>
                  <li>
                    提升当地政府官员的保护意识，争取各级政府对西黑冠长臂猿及其它生物多样性保护的支持；
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={1}>
              <div className="concolor-title">目</div>
              <div className="concolor-title">标</div>
              {/* <Divider type="vertical" orientation="left"><div className='tianxing-title'>背景</div></Divider> */}
            </Grid>
          </Grid>
          {/* <Grid item container xs={12} sm={10} md={8} >
            <Divider />
        </Grid> */}
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            {/* <Grid xs={4}> */}
            <Divider orientation="left">
              <div className="concolor-title">项目内容</div>
            </Divider>
            {/* </Grid> */}
          </Grid>
          {renderProject1()}
          {renderProject2()}
          {renderProject3()}
        </Grid>
      </Card>
    </div>
  );
};

export default Concolor;
