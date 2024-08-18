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
      <div className="image-container">
        <img
          className="title-img"
          src={data['pi1'].src}
          alt="Image Title Loading"
        ></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.programs.investigation.empower' })}
        </div>
      </div>
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
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'programs.reason' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.empower.reason',
            })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'programs.description' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.empower.description',
            })}
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'programs.learn' })}
              </div>
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
