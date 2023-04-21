import React, { useEffect, useState } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card } from 'antd';
import './index.less';
import data from '../../../data/team';
import 'swiper/swiper.less';
import 'swiper/modules/navigation/navigation.less';
import 'swiper/modules/pagination/pagination.less';
import 'swiper/modules/autoplay/autoplay.less';

const Team: React.FC = props => {
  const intl = useIntl();

  const renderYL = () => {
    const people = data[0];
    return (
      <Card className="people-container" style={{ transform: 'rotate(-5deg)' }}>
        <div
          className="people-name"
          style={{ transform: 'rotate(10deg)', fontSize: '15px' }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{
            transform: 'rotate(5deg)',
            fontSize: '10px',
            bottom: '20px',
          }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  const renderLRX = () => {
    const people = data[1];
    return (
      <Card style={{ transform: 'rotate(5deg)', marginRight: '10px' }}>
        <div
          className="people-name"
          style={{
            transform: 'rotate(0deg)',
            fontSize: '15px',
            top: '10px',
            left: '-20px',
          }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{ transform: 'rotate(0deg)', fontSize: '10px', left: '-40px' }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  const renderCJY = () => {
    const people = data[2];
    return (
      <Card
        className="people-container"
        style={{ transform: 'rotate(-3deg)', marginTop: '20px' }}
      >
        <div
          className="people-name"
          style={{ transform: 'rotate(0deg)', fontSize: '15px', top: '-40px' }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{
            transform: 'rotate(5deg)',
            fontSize: '10px',
            left: '-40px',
            bottom: '20px',
          }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  const renderYX = () => {
    const people = data[3];
    return (
      <Card
        className="people-container"
        style={{ transform: 'rotate(-3deg)', marginRight: '10px' }}
      >
        <div
          className="people-name"
          style={{
            transform: 'rotate(0deg)',
            fontSize: '15px',
            top: '-40px',
            right: '10px',
          }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{
            transform: 'rotate(10deg)',
            fontSize: '10px',
            left: '-40px',
          }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  const renderZCY = () => {
    const people = data[4];
    return (
      <Card
        className="people-container"
        style={{ transform: 'rotate(5deg)', marginRight: '10px' }}
      >
        <div
          className="people-name"
          style={{
            transform: 'rotate(0deg)',
            fontSize: '15px',
            top: '-30px',
            right: '-7px',
          }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{
            transform: 'rotate(-5deg)',
            fontSize: '10px',
            left: '-40px',
            bottom: '-5px',
          }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  const renderDGH = () => {
    const people = data[5];
    return (
      <Card
        className="people-container"
        style={{ transform: 'rotate(5deg)', marginRight: '10px' }}
      >
        <div
          className="people-name"
          style={{
            transform: 'rotate(5deg)',
            fontSize: '15px',
            top: '-40px',
            left: '-7px',
          }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{ transform: 'rotate(5deg)', fontSize: '10px', left: '-10px' }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  const renderDY = () => {
    const people = data[6];
    return (
      <Card
        className="people-container"
        style={{ transform: 'rotate(-3deg)', marginRight: '10px' }}
      >
        <div
          className="people-name"
          style={{
            transform: 'rotate(0deg)',
            fontSize: '15px',
            top: '-40px',
            right: '-37px',
          }}
        >
          <div>{people.name}</div>
          <div>{people.ename}</div>
        </div>
        <img className="people-img" src={people.src}></img>
        <div
          className="people-text"
          style={{
            transform: 'rotate(-5deg)',
            fontSize: '10px',
            left: '-40px',
          }}
        >
          {people.title}
        </div>
      </Card>
    );
  };

  return (
    <div className="team-container">
      {/* <div className="team-bg">年轻、多元</div> */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={8} sm={3} className="people-container">
          {renderYL()}
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={10}
        >
          <Grid
            item
            container
            xs={12}
            sm={8}
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={4} className="people-container">
              {renderLRX()}
            </Grid>
            <Grid item xs={12} sm={4} className="people-container">
              {renderCJY()}
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            direction="row"
            justify="space-between"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={4} className="people-container">
              {renderYX()}
            </Grid>
            <Grid item xs={12} sm={4} className="people-container">
              {renderZCY()}
            </Grid>
          </Grid>
          <Grid
            item
            container
            sm={8}
            direction="row"
            justify="space-around"
            alignItems="center"
            spacing={1}
          >
            <Grid item xs={12} sm={4} className="people-container">
              {renderDGH()}
            </Grid>
            <Grid item xs={12} sm={4} className="people-container">
              {renderDY()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Team;
