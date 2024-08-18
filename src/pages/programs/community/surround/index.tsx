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
          src={data['ps1'].src}
          alt="Image Title Loading"
        ></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.programs.community.surround' })}
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
            {intl.formatMessage({ id: 'programs.community.surround.reason.1' })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({ id: 'programs.community.surround.reason.2' })}
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
              id: 'programs.community.surround.description.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.community.surround.description.2',
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
