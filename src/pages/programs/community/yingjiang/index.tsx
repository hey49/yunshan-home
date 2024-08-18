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
        <img className="title-img" src={data['ps3'].src}></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.programs.community.yingjiang' })}
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
              id: 'programs.community.yingjiang.reason.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.yingjiang.reason.2',
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
              id: 'programs.community.yingjiang.description.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.yingjiang.description.2',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.yingjiang.description.3',
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
            <a href="https://mp.weixin.qq.com/s/46nLPLqZoRj6xg9vzpYR_A">
              世界野生动植物日，和小孩一起玩家乡
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
