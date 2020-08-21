import React, { useEffect, useState } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import './index.less';
import data from '../../../data/team';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';

const Team: React.FC = (props) => {

  const intl = useIntl();

  const renderTeam = (item: any, index: number) => {
    return (
      <Grid container item direction='column' justify="flex-end" alignItems="center">
        <Grid item>
          <div className='people-box' id={item.id}>
            <img className='people-img' src={item.src}></img>
            <div className='people-name'><div>{item.name}</div><div>{item.ename}</div></div>
            <div className='people-text'>{item.text}</div>
          </div>
        </Grid>
      </Grid>
    )
  }

  return (
    <Card>
      <Grid container direction="column" justify="flex-end" alignItems="center">
        <Grid container item xs={10} direction='row' justify="center" alignItems="flex-end">
          <Grid container xs={10} item>
            <Swiper loop navigation className='people-container'>
              {data.map((item, index)=>{
                return(
                  <SwiperSlide>
                    {renderTeam(item, index)}
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Grid>
        </Grid>
      </Grid>
    </Card>

  );
}

export default Team;
