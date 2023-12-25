import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
// import data from '../../../../data/headpics';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
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
              <div className="tianxing-title">项目背景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            「长臂猿食堂调查计划」项目将通过林层红外相机调查，在保护区外验证已有的保护区内天行长臂猿的食性数据，收集未习惯化的长臂猿种群取食行为数据，并获取在天行长臂猿“食堂”干饭的物种名单，了解它们之间食性重叠程度，最终从食物的角度对天行长臂猿栖息地恢复提出建议。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目持续时间</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2022年12月—2023年12月（视项目进度而定）
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">工作形式</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            远程线上工作，定期处理红外影像数据，可自行选择参与时间段。

          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">工作内容</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            在项目持续期内，红外相机照片和视频需要志愿者帮忙整理和录入数据库。我们正在盈江县的拉马河地区天行长臂猿栖息地内正在果期的食物树树冠层布设50-80台红外相机，用于记录长臂猿“干饭”，同时观察还有哪些动物光顾天行长臂猿的“食堂”；此外还有3-5台拍摄地面动物的相机。
            <br />
            <b>分拣志愿者</b>：从所有影像中筛选出拍到了动物的影像。
            <br />
            <b>识别志愿者</b>：鉴别并记录动物物种名称和相关的行为学信息。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">分拣志愿者招募要求</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            · 保证每月不少于一次的任务包处理（每个任务包工作量约4小时，需在一周内完成）；
            <br />
            · 耐心、细心，面对大量空拍时也能以认真的态度寻找动物；
            <br />

            · 认可野保事业并以科学、严谨的态度对待保护工作，遵守数据保密协议。
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
