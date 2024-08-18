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
          src={data['pi4'].src}
          alt="Image Title Loading"
        ></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.programs.investigation.cloud' })}
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
            {intl.formatMessage({ id: 'programs.investigation.cloud.reason' })}
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
              id: 'programs.investigation.cloud.description.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.cloud.description.2',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.cloud.description.3',
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
            <a href="https://www.bilibili.com/video/BV11E411y7ss/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
              云南高黎贡山有一群可爱的人，守护着中国野外少于150只的天行长臂猿
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650427878&idx=1&sn=9a13c34e2afb68e42d40051baaccf1d0&chksm=f2eb4f41c59cc6573ae5f9da35f6b4ab9fe2d0e36f09f796e3c380a6c3c7f723557215477194&token=1317119189&lang=zh_CN#rd">
              第一封基地家书：我在板厂，挺好的
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s?__biz=MzI2OTA4NTY0MA==&mid=2650428945&idx=1&sn=6e3cec131adb9762f7dd057b45af61d4&chksm=f2eb48b6c59cc1a0e0b31027873a20e70fe6ce945bf5a4e7ea68f016bd48c59f42230eb567b8&token=1317119189&lang=zh_CN#rd">
              护林21年，蔡叔：守到我一辈子攀不动为止
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/3OT4rJrm9jOs7_CcfKE9xg">
              祝常悦：离开高黎贡，两年来我在家过了第一个春节
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
