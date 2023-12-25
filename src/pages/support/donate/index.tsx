import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import data from '../../../data/donate';
import { Card } from 'antd';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/modules/navigation/navigation.less';
import 'swiper/modules/pagination/pagination.less';
import 'swiper/modules/autoplay/autoplay.less';
import './index.less';

SwiperCore.use([Navigation, Pagination]);

const Donate: React.FC = props => {
  const intl = useIntl();

  const renderSwiper = () => {
    return (
      <div className="index-carousel-container">
        <Swiper
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          navigation
        >
          {data.map(item => {
            return (
              <SwiperSlide>
                <div>
                  <img className="slide-img" src={item.src} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  };

  return (
    <div className="full-page">
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8}>
          {renderSwiper()}
        </Grid>
      </Grid>
    </div>
  );
};

export default Donate;
