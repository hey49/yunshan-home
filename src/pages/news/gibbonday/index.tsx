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
        <img className="title-img" src={data['np1'].src}></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.news.public.gibbonday' })}
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
            {intl.formatMessage({ id: 'news.gibbonday.background' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.event' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'news.gibbonday.description.1' })}
            <br />
            {intl.formatMessage({ id: 'news.gibbonday.description.2' })}
            <br />
            {intl.formatMessage({ id: 'news.gibbonday.description.2' })}
            <br />
            {intl.formatMessage({ id: 'news.gibbonday.description.4' })}
            <br />
            {intl.formatMessage({ id: 'news.gibbonday.description.5' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.learn' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/jrI-7MVPJZ_I11btUnLwuw">
              国际长臂猿日｜7种不足2000只，中国猿现状如何？
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/y3VeWUR1z_8t-bxxux3zsA">
              国际长臂猿日 | 让更多人看见和听见中国猿
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
