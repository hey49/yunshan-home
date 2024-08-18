import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../data/headpics';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <div className="image-container">
        <img className="title-img" src={data['np3'].src}></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.news.public.participation' })}
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
                {intl.formatMessage({ id: 'news.background' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'news.participation.background' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.event' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'news.participation.event.1' })}
            <br />
            {intl.formatMessage({ id: 'news.participation.event.2' })}
            <br />
            {intl.formatMessage({ id: 'news.participation.event.3' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.learn' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/EaFY3wAhEXoOxgg4C7_F8g">
              志愿者手记：和云山一起，把长臂猿带回它们的故乡吧！
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV1wh411R7GY/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
              在野保NGO实习是一种什么样的体验？
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
