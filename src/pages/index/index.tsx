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
