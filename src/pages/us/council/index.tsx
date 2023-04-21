import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { Card as ACard, Divider, Avatar, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.less';
import data from '../../../data/council';

const Council: React.FC = props => {
  const intl = useIntl();

  const renderPeopleCard = (person: any) => {
    return (
      <Card>
        <Grid
          className="council-card"
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={3} sm={3} md={3}>
            <Avatar className="council-ava" src={person.avatar} />
          </Grid>
          <Grid item xs={12} container direction="column" spacing={2}>
            <Grid item container xs={12}>
              <Grid item xs={12}>
                <div className="council-pos">{person.position}</div>
              </Grid>
              <Grid item xs={12}>
                <div className="council-name">{person.name}</div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {person.title.map((item: any) => {
                return <Tag color="#F5C16D">{item}</Tag>;
              })}
            </Grid>
            <Grid item xs={12}>
              <div className="council-desc">{person.desc}</div>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  };

  const renderBossCard = (person: any) => {
    return (
      <Card>
        <Grid
          className="council-card"
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Grid item xs={3} sm={3} md={3}>
            <Avatar className="council-ava-boss" src={person.avatar} />
          </Grid>
          <Grid item xs={12} sm={8} container direction="column" spacing={2}>
            <Grid item>
              <div className="council-pos-name-boss">
                <Grid container>
                  <Grid item>
                    <div className="council-pos">{person.position}</div>
                  </Grid>
                  <Grid item>
                    <div className="council-name">{person.name}</div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item>
              {person.title.map((item: any) => {
                return <Tag color="#F5C16D">{item}</Tag>;
              })}
            </Grid>
            <Grid item>
              <div className="council-desc">{person.desc}</div>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    );
  };

  return (
    <div className="full-page">
      <ACard>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <div className="council-title">理事会</div>
          </Grid>
          <Grid item xs={12}>
            {renderBossCard(data[0])}
          </Grid>
          <Divider />
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[1])}
            </Grid>
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[2])}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[3])}
            </Grid>
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[4])}
            </Grid>
          </Grid>
          <Divider />
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[5])}
            </Grid>
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[6])}
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            container
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[7])}
            </Grid>
            <Grid xs={12} sm={12} md={5} item>
              {renderPeopleCard(data[8])}
            </Grid>
          </Grid>
        </Grid>
      </ACard>
    </div>
  );
};

export default Council;
