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
      <img className="title-img" src={data['ps1'].src}></img>
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
            在深圳市质兰公益基金会的支持下，云山保护于2019年9月-2020年4月（一期）展开了一轮以全面摸底为目标的社区调查，调查范围涉及苏典乡、支那乡以及腾冲县范围内天行长臂猿分布的周边社区。此次调查希望通过半结构式访谈及问卷调查的方法获得与天行长臂猿有关的村落的社会学本底数据，以便在规划社区保护行动中能够有数据作为支撑。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2021年8月-2022年5月（二期），我们综合考虑了盈江的长臂猿分布情况与前期的问卷调查结果，最终选定了苏典乡梨树与拉马河片区展开PRA调查（参与性农村快速评估），目的在于通过
            PRA
            调查来记录梨树-拉马河区域的自然资源利用情况。了解当地人的生产生活与长臂猿的生存需求有哪些关联，借以识别出该片区栖息地恢复的主要威胁因素。最终通过社区讨论会，并在科研专家的指导下制定以社区为主导的栖息地保护和恢复方案。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            在一期项目中，我们完成了四大长臂猿分布的区域(腾冲猴桥区、支那区、勐噶河西五寨-拉马河区、茅草区），共17个村民小组的深度社区访谈，完成271份问卷。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            本次调查得出梨树-拉马河片区是长臂猿栖息地跟社区集体林重叠度最高的片区，也是盈江县长臂猿分布海拔较低且种群集中的片区。建立以社区为主导的保护模式对增加该片区的森林连通性和长臂猿种群的繁衍具有积极意义。
            正在进行的二期项目PRA调查以社区资源图作为切入点，整合前期资料，争取全面地了解社区的自然资源分布，与社区共同探索更为全面的人猿关系。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650428478&idx=1&sn=a8e4a0c6186b2a48527260786ae512c2&chksm=f2eb4a99c59cc38f2a33c96a7429afea77bf9f1d705c9e98b4bf46b7023b4df0e4e5d028c46e&token=1317119189&lang=zh_CN#rd">
              边境乡村宣教思考：中国猿的保护如何让社区力量回归？
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV1nG411V77M/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
              大熊猫有 1864 只，但它们只有不到 150 只
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
