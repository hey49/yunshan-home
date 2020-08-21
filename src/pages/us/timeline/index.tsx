import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { Timeline as TimeL } from 'antd';
import './index.less';
import data from '../../../data/timeline';

const Timeline: React.FC = (props) => {
  const intl = useIntl();

  const { Item } = TimeL;

  const timeDot = (time: string, green: boolean) => {
    return (
      <div className='time-dot' style={{backgroundColor: green? '#8da745' : '#f39800'}}>{time}</div>
    )
  }

  const renderTimeline = () => {
    data.reverse();
    let st = 2020;
    let reve = true;
    return (
      <TimeL mode="alternate">
        {
          data.map( (item, index) => {
            if (item.time.split('.')[0] < st) {
              st = parseInt(item.time.split('.')[0]);
              reve = !reve;
            }
            return (
              <Item dot={timeDot(item.time, reve)}>
                <div className={index%2 ? 'tl-left' : 'tl-right'}>{item.text}</div>
             </Item>
            )
          })
        }
        <Item dot={<div className='time-dot' style={{backgroundColor: !reve? '#8da745' : '#f39800'}}>开始</div>}>
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
