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
          src={data['ps4'].src}
          alt="Image Title Loading"
        ></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.programs.community.lishu' })}
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
            {intl.formatMessage({ id: 'programs.community.lishu.reason.1' })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'programs.community.lishu.reason.2' })}
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
              id: 'programs.community.lishu.description.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.lishu.description.2',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.lishu.description.3',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.lishu.description.4',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.lishu.description.5',
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
