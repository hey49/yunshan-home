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
      <img className="title-img" src={data['pi1'].src}></img>
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
            在多年的保护区合作中，我们了解到一线的护林员往往较少有机会接受系统的野外调查、巡护监测的方法和工具方面的专业培训。云山在成立之初申请过北京山水自然保护中心的澜沧江保护项目，支持了云南省永德大雪山西黑冠长臂猿保护能力提升培训。后续在盈江县和昌宁县分别开展过长臂猿鸣声调查监测方法、红外相机布设、望远镜使用等技能培训。培训的护林员约40多人，其中有10位成为了各个保护区做长臂猿监测和野外调查的主要力量。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            云山保护在不同项目执行过程中都非常注重赋能让保护区和林业部门的护林员在巡护、监测和宣传上变得更专业。永德大雪山西黑冠长臂猿保护能力提升培训项目中，我们通过与监测队员回顾西黑冠长臂猿规范化巡护监测方案，评估方案实施效果，根据反馈对方案进行必要的调整和改进。通过对监测队员进行进一步监测技术指导，提升监测队员的巡护技术能力。后续在盈江县和昌宁县分别开展过长臂猿鸣声调查监测方法、红外相机布设、望远镜使用等技能培训，在统一的监测方法和数据记录方法培训之后，云山的项目人员对数据进行了分析并将下一步调整的建议反馈给监测队员和保护主管部门，帮助他们从日常的巡护监测中收获更大的成就感。云山保护还结合当地传统节日，与永德大雪山保护区、昆明动物博物馆共同开展了永德大雪山生物多样性公众宣传活动，印制了西黑冠长臂猿宣传折页。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650430799&idx=1&sn=32be05445db30e7f46d42df0094429c0&chksm=f2eb43e8c59ccafe5f5aa6eb5e192cf1680f9d9c631621d7c56ea26e417a0296377c28ea950a&token=1317119189&lang=zh_CN#rd">
              李如雪：和原住民一起，守护猿住民的家
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650426351&idx=1&sn=c4b8bf8a189e114c97d51f7857dcd2a3&chksm=f2eb5548c59cdc5eb473e4cc7a4feb808155c8f8e9cc167d907ad69c188acbda11542ac1ed69&token=1317119189&lang=zh_CN#rd">
              山大跑死人，动物难得见，想去山里追长臂猿，先练练？
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
