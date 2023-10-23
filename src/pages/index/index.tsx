import React from 'react';
import { useIntl, setLocale } from 'umi';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/modules/navigation/navigation.less';
import 'swiper/modules/pagination/pagination.less';
import 'swiper/modules/autoplay/autoplay.less';
import { Card, Divider } from 'antd';
import Grid from '@material-ui/core/Grid';
import indexLog from '../../data/assets/index/indexLogo.png';
import './index.less';
import data from '../../data/index';
import mediadata from '../../data/contact';
import {
  HomeOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';

SwiperCore.use([Navigation, Pagination]);

const styles = {
  slideImg: {
    width: '100%',
    // height: '30rem'
  },
  authorBox: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
  },
  authorText: {
    color: 'white',
    fontSize: '1rem',
  },
};

const Index: React.FC = props => {
  const intl = useIntl();

  const pics = mediadata[0];

  const renderContactItem = (name: any, text: any) => {
    return (
      <Grid
        item
        xs={12}
        sm={10}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={4} sm={2}>
          {name}
        </Grid>
        <Grid item xs={8}>
          {text}
        </Grid>
      </Grid>
    );
  };

  const renderContact = () => {
    return (
      <>
        <Divider>
          <div className="contact-title">联系方式</div>
        </Divider>
        <Grid
          item
          xs={12}
          container
          // direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {renderContactItem(
            <div className="contact-item-title">
              <HomeOutlined className="item-icon" />
              地址:
            </div>,
            <div>云南省大理古城苍坪街56号床单厂艺术区C-2-2</div>,
          )}
          {renderContactItem(
            <div className="contact-item-title">
              <PhoneOutlined className="item-icon" />
              电话:
            </div>,
            <div>0872-2504186</div>,
          )}
          {renderContactItem(
            <div className="contact-item-title">
              <GlobalOutlined className="item-icon" />
              网站:
            </div>,
            <a href="https://www.cloudmountain.cn" target="_blank">
              www.cloudmountain.cn
            </a>,
          )}
          {renderContactItem(
            <div className="contact-item-title">
              <MailOutlined className="item-icon" />
              邮件:
            </div>,
            <a href="mailto:info@cloudmountain.cn">info@cloudmountain.cn</a>,
          )}
        </Grid>
      </>
    );
  };

  const renderMedia = () => {
    return (
      <>
        <Divider>
          <div className="contact-title">关注我们</div>
        </Divider>
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
  const renderUs = () => {
    return (
      <div className="full-page">
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item xs={12} sm={10} md={8}>
            <Card>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={4}
              >
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item>
                    <img style={{ width: '30vh' }} src={indexLog}></img>
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  sm={10}
                  md={8}
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12} sm={10} md={8}>
                    <div>
                      云山保护（Cloud Mountain
                      Conservation），全称大理白族自治州云山生物多样性保护与研究中心，于2015年6月在大理州民政局注册成立，是一个专注于抢救性地研究和保护中国西南地区生物多样性的民间公益组织。
                    </div>
                  </Grid>
                  <Divider>
                    <div className="index-sub-title">使命</div>
                  </Divider>
                  <Grid item xs={12} sm={10} md={8}>
                    <div>
                      以科研监测助推公众科普，链接多方资源保护长臂猿及其生存繁衍的栖息地
                    </div>
                  </Grid>
                  <Divider>
                    <div className="index-sub-title">愿景</div>
                  </Divider>
                  <Grid item xs={12} sm={10} md={8}>
                    <div>千山长青 猿声常鸣</div>
                  </Grid>
                  <Divider>
                    <div className="index-sub-title">价值观</div>
                  </Divider>
                  <Grid item xs={12} sm={10} md={8}>
                    <div>科学 平等 合作 信任 可持续</div>
                  </Grid>
                  <Divider>
                    <div className="index-sub-title">口号</div>
                  </Divider>
                  <Grid item xs={12} sm={10} md={8}>
                    <div>和云山一起保护中国猿</div>
                  </Grid>
                  <Divider>
                    <div className="index-sub-title">战略方向</div>
                  </Divider>
                  <Grid item xs={12} sm={10} md={8}>
                    <div>十年内在社区保护地实现长臂猿种群净增长</div>
                  </Grid>
                  <Grid>{renderContact()}</Grid>
                  <Grid>{renderMedia()}</Grid>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  };

  const renderSwiper = () => {
    return (
      <div className="index-carousel-container">
        <Swiper
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
          className="index-swiper"
        >
          {data.map(item => {
            return (
              <SwiperSlide>
                <a href={item.url} target={item.blank ? '_blank' : ''}>
                  <div>
                    <img
                      className="slide-img"
                      style={styles.slideImg}
                      src={item.src}
                    />
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };

  return (
    <>
      {renderSwiper()}
      {renderUs()}
    </>
  );
};

export default Index;
