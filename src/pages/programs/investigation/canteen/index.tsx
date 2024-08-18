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
          src={data['pi6'].src}
          alt="Image Title Loading"
        ></img>
        <div className="title-overlay">
          {intl.formatMessage({ id: 'menu.programs.investigation.canteen' })}
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
              id: 'programs.investigation.canteen.reason.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.canteen.reason.2',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.canteen.reason.3',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.canteen.reason.4',
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
              id: 'programs.investigation.canteen.description.1',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.canteen.description.2',
            })}
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {intl.formatMessage({
              id: 'programs.investigation.canteen.description.3',
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
            <a href="https://www.bilibili.com/video/BV1zm4y1p7Pv/?spm_id_from=333.337.search-card.all.click&vd_source=beec0246ef894e17a936065f77a10d56">
              为了拍到长臂猿，我们都做了啥？
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/K2Yr1hEw9xSAaL3Izodg0w">
              相信我吧，这里的长臂猿是吃空气长大的
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/SfA8ZybT8YpHfJTu2oB14A">
              爬了几十次山后，终于拍到了“干饭”长臂猿
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/Cr-ZHCLFHZVM82lEAaBsfg">
              我想，大概要几十年才能参透些亚热带森林的规律
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
