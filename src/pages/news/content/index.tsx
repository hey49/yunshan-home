import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../data/headpics';
import mediaData from '../../../data/contact';

const Tianxing: React.FC = props => {
  const intl = useIntl();
  const pics = mediaData[0];
  const renderMedia = () => {
    return (
      <>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.wechat}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.wechat_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <a href="https://weibo.com/p/1006065823202811" target="_blank">
                  <img className="media-logo" src={pics.weibo}></img>
                </a>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.weibo_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.tiktok}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.tiktok_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.xiaohongshu}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.xiaohongshu_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <a href="https://space.bilibili.com/402317570" target="_blank">
                  <img className="media-logo" src={pics.bilibili}></img>
                </a>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.bilibili_qr}></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          ></Grid>
        </Grid>
      </>
    );
  };
  return (
    <div className="article-container">
      <div className="image-container">
        <img className="title-img" src={data['np4'].src}></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.news.public.content' })}
        </div>
      </div>{' '}
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
            {intl.formatMessage({ id: 'news.content.reason' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.output' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'news.content.output.1' })}
            <br />
            {intl.formatMessage({ id: 'news.content.output.2' })}
            <br />
            {intl.formatMessage({ id: 'news.content.output.3' })}
            <br />
            {intl.formatMessage({ id: 'news.content.output.4' })}
            <br />
            {intl.formatMessage({ id: 'news.content.output.5' })}
            <br />
            {intl.formatMessage({ id: 'news.content.output.6' })}
            <br />
            {intl.formatMessage({ id: 'news.content.output.7' })}
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">
                {intl.formatMessage({ id: 'news.follow' })}
              </div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {renderMedia()}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
