import React, { useState } from 'react';
import { useIntl } from 'umi';
import { Button, Tabs, Card, Descriptions, Typography } from 'antd';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import data from './archive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import './index.less';
import { SoundOutlined, PauseOutlined } from '@ant-design/icons';

// const hoAu = require('./audio/Hoolock_tianxing.mp3');

import tianxing from './audio/Hoolock_tianxing.mp3';
import lar from './audio/Hylobates_lar.mp3';
import concolor from './audio/Nomascus_concolor.mp3';
import hainanus from './audio/Nomascus_hainanus.mp3';
import leucogenys from './audio/Nomascus_leucogenys.mp3';
import nasutus from './audio/Nomascus_nasutus.mp3';
import { Spin } from 'antd';
const audios = [
  new Audio(tianxing),
  new Audio(hainanus),
  new Audio(nasutus),
  new Audio(concolor),
  new Audio(leucogenys),
  new Audio(lar),
];

const ImgViewer = props => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  return (
    <div>
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        <img
          onLoad={() => setIsLoading(false)}
          style={{ height: '30rem' }}
          src={props.src}
        />
      </div>
      <div style={{ display: isLoading ? 'block' : 'none' }}>
        <Spin />
      </div>
    </div>
  );
};

export default props => {
  const queryId = props.location.query.id;
  const intl = useIntl();
  const [selected, setSelected] = useState<number>(queryId || 0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const { Item } = Descriptions;
  const { Text, Title } = Typography;

  const descItemStyle = {
    color: '#8da745',
  };

  const changeTab = (key: string) => {
    audios[selected].pause();
    audios[selected].currentTime = 0;
    setSelected(parseInt(key));
  };

  const playAudio = () => {
    if (isPlaying) {
      audios[selected].pause();
    } else {
      audios[selected].play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="full-page">
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={8}
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={2} sm={3} md={3}>
            <Button
              type="primary"
              style={{ marginTop: 10 }}
              onClick={playAudio}
              icon={isPlaying ? <PauseOutlined /> : <SoundOutlined />}
            />
          </Grid>
          <Grid item xs={10} sm={9} md={9}>
            <Tabs
              defaultActiveKey="0"
              onChange={changeTab}
              activeKey={selected.toString()}
              style={{ marginTop: 30 }}
              tabPosition="top"
              type="card"
            >
              {data.map(item => (
                <Tabs.TabPane tab={item.name} key={item.key.toString()} />
              ))}
            </Tabs>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={5} className="archiveItem">
            <Card>
              <Swiper>
                {[...new Array(data[selected].imageCount)].map(
                  (item, index) => (
                    <SwiperSlide key={index}>
                      <Container maxWidth="sm" style={{ textAlign: 'center' }}>
                        <ImgViewer
                          src={data[selected].images[index]}
                        ></ImgViewer>
                      </Container>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={5} className="archiveItem">
            <Card>
              <Descriptions title={data[selected].name} column={1}>
                <Item label={<div style={descItemStyle}>学名</div>}>
                  <i>{data[selected].latin}</i>
                </Item>
                <Item label={<div style={descItemStyle}>分类</div>}>
                  <Text>{data[selected].classification.family}</Text>
                  <Text>{`科_`}</Text>
                  <Text>{data[selected].classification.genus}</Text>
                  <Text>属</Text>
                </Item>
                <Item label={<div style={descItemStyle}>体型</div>}>
                  <p>{`体重：${data[selected].body.weight}kg`}</p>
                  <p>{`体长：${data[selected].body.height}cm`}</p>
                </Item>
                <Item label={<div style={descItemStyle}>IUCN等级</div>}>
                  {data[selected].IUCN}
                </Item>
                <Item label={<div style={descItemStyle}>中国保护级别</div>}>
                  {data[selected].chineseLevel}
                </Item>
                <Item label={<div style={descItemStyle}>分布</div>}>
                  {data[selected].distribution}
                </Item>
                <Item label={<div style={descItemStyle}>数量</div>}>
                  {data[selected].amount}
                </Item>
                <Item label={<div style={descItemStyle}>特征</div>}>
                  {data[selected].feature}
                </Item>
              </Descriptions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  const test = (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Tabs
          defaultActiveKey="0"
          onChange={changeTab}
          activeKey={selected.toString()}
        >
          {data.map(item => (
            <Tabs.TabPane tab={item.name} key={item.key.toString()} />
          ))}
        </Tabs>
      </Grid>
      <Grid item container justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={4} className="archiveItem">
          <Card>
            <Swiper>
              {[...new Array(data[selected].imageCount)].map((item, index) => (
                <SwiperSlide key={index}>
                  <Container maxWidth="sm" style={{ textAlign: 'center' }}>
                    <img
                      style={{ height: '30rem' }}
                      src={data[selected].images[index]}
                    />
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </Grid>
        <Grid item xs={4} className="archiveItem">
          <Card>
            <Descriptions title={data[selected].name} column={1}>
              <Item label={<div style={descItemStyle}>学名</div>}>
                <i>{data[selected].latin}</i>
              </Item>
              <Item label={<div style={descItemStyle}>分类</div>}>
                <Text>{data[selected].classification.family}</Text>
                <Text>{`科_`}</Text>
                <Text>{data[selected].classification.genus}</Text>
                <Text>属</Text>
              </Item>
              <Item label={<div style={descItemStyle}>体型</div>}>
                <p>{`体重：${data[selected].body.weight}kg`}</p>
                <p>{`体长：${data[selected].body.height}cm`}</p>
              </Item>
              <Item label={<div style={descItemStyle}>IUCN等级</div>}>
                {data[selected].IUCN}
              </Item>
              <Item label={<div style={descItemStyle}>中国保护级别</div>}>
                {data[selected].chineseLevel}
              </Item>
              <Item label={<div style={descItemStyle}>分布</div>}>
                {data[selected].distribution}
              </Item>
              <Item label={<div style={descItemStyle}>数量</div>}>
                {data[selected].amount}
              </Item>
              <Item label={<div style={descItemStyle}>特征</div>}>
                {data[selected].feature}
              </Item>
            </Descriptions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
