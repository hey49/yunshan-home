import React, { useState } from 'react';
import { useIntl } from 'umi';
import { Button, Tabs, Card, Descriptions, Typography } from 'antd';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import data from './archive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import "./index.less";


export default () => {
  const intl = useIntl();
  const [selected, setSelected] = useState<number>(0);

  const { Item } = Descriptions;
  const { Text, Title } = Typography;

  const descItemStyle = {
    color: '#8da745'
  }

  const changeTab = (key: string) => {
    setSelected(parseInt(key));
  }

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid item>
        <Tabs defaultActiveKey="0" onChange={changeTab} activeKey={selected.toString()}>
          {data.map((item) => <Tabs.TabPane tab={item.name} key={item.key.toString()} />)}
        </Tabs>
      </Grid>
      <Grid item container justify='center' alignItems='flex-start' spacing={2}>
        <Grid item xs={4} className='archiveItem'>
          <Card>
            <Swiper>
              {[...new Array(data[selected].imageCount)].map((item, index) => (
                <SwiperSlide key={index}>
                  <Container maxWidth="sm" style={{textAlign: "center"}}>
                    <img style={{ height: '30rem'}} src={data[selected].images[index]} />
                  </Container>
                </SwiperSlide>
              ))}
            </Swiper>
          </Card>
        </Grid>
        <Grid item xs={4} className='archiveItem'>
          <Card>
            <Descriptions title={data[selected].name} column={1}>
              <Item label={<div style={descItemStyle}>学名</div>}><i>{data[selected].latin}</i></Item>
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
}
