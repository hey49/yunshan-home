import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { Timeline as TimeL } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.less';

const Timeline: React.FC = (props) => {
  const intl = useIntl();

  const { Item } = TimeL;

  const timeDot = (time: string, green: boolean) => {
    return (
      <div className='time-dot' style={{backgroundColor: green? '#8da745' : '#f39800'}}>{time}</div>
    )
  }

  const renderTimeline = () => {
    return (
      <TimeL mode="alternate">
        <Item dot={timeDot('2015.1', true)}>
          <div className='tl-right'>阎璐、范鹏飞和赵超共同发起成立云山保护</div>
        </Item>
        <Item dot={timeDot('2015.6', true)}>
          <div className='tl-left'>云山保护在大理民政局正式注册</div>
        </Item>
        <Item dot={timeDot('2015.12', true)}>
          <div className='tl-right'>云山保护召开第一届理事会会议，理事会成员为：范鹏飞、刘阳、赵超、董磊、阎璐</div>
        </Item>
        <Item dot={timeDot('2015.12', true)}>
          <div className='tl-left'>第一次云山保护合作伙伴交流会，龙勇诚受邀成为荣誉理事</div>
        </Item>
        <Item dot={timeDot('2016.1', false)}>
          <div className='tl-right'>云山保护第一届自然摄影展</div>
        </Item>
        <Item dot={timeDot('2016.3', false)}>
          <div className='tl-left'>深入盈江长臂猿栖息地周边社区调研长臂猿保护现状</div>
        </Item>
        <Item dot={timeDot('2016.5', false)}>
          <div className='tl-right'>永德大雪山西黑冠长臂猿保护项目获得山水自然中心资助</div>
        </Item>
        <Item dot={timeDot('2016.8', false)}>
          <div className='tl-left'>在永德大雪山保护区举办西黑冠长臂猿规范化巡护检测暨红外相机培训研讨会</div>
        </Item>
        <Item dot={timeDot('2016.9', false)}>
          <div className='tl-right'>第一次开展公共筹款活动，完成筹款目标198,220元</div>
        </Item>
        <Item dot={timeDot('2016.12', false)}>
          <div className='tl-left'>在盈江县长臂猿栖息地周边两所小学开展长臂猿保护主题游园宣传</div>
        </Item>
        <Item dot={timeDot('2017.1', true)}>
          <div className='tl-right'>云山保护理事会迎来了两位重量级新成员：科普大咖张劲硕和长臂猿专家管振华</div>
        </Item>
        <Item dot={timeDot('2017.3', true)}>
          <div className='tl-left'>获得阿拉善基金会劲草同行项目3年共30万资助</div>
        </Item>
        <Item dot={timeDot('2017.3', true)}>
          <div className='tl-right'>参加劲草同行面向线下和线上公众的生物多样性嘉年华讲座和图片展</div>
        </Item>
        <Item dot={timeDot('2017.4-6', true)}>
          <div className='tl-left'>完成了天行长臂猿全国范围野外种群数量和分布调查，同期完成了社区保护意识访问调查</div>
        </Item>
        <Item dot={timeDot('2017.5', true)}>
          <div className='tl-right'>2016年年报出版</div>
        </Item>
        <Item dot={timeDot('2017.6', true)}>
          <div className='tl-left'>加入桃花源社会公益保护地联盟，获得桃花源基金会资助开展社区保护地调研</div>
        </Item>
        <Item dot={timeDot('2017.7', true)}>
          <div className='tl-right'>在永德芒果节期间与保护区和昆明动物博物馆合作开展公共生物多样性宣传</div>
        </Item>
      </TimeL>
    );
  }
  return (
    <Container>
      <Card>
      <Grid container direction='column' justify='center' alignItems='center'>
          <Grid item xs={8} >
            <div className='timeline-title'>
              {'云山大事记'}
            </div>
            <div className='timeline-box'>
              {renderTimeline()}
            </div>
          </Grid>
        </Grid>
      </Card>
    </Container>

  );
}

export default Timeline;
