import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { Timeline as TimeL } from 'antd';
import './index.less';
import data from '../../../data/timeline';

const Timeline: React.FC = props => {
  const intl = useIntl();

  const { Item } = TimeL;

  const timeDot = (time: string, green: boolean) => {
    return (
      <div
        className="time-dot"
        style={{ backgroundColor: green ? '#8da745' : '#f39800' }}
      >
        {time}
      </div>
    );
  };

  const renderTimeline = () => {
    data.reverse();
    let st = 2022;
    let reve = true;
    return (
      <TimeL mode="alternate">
        {data.map((item, index) => {
          if (item.time.split('.')[0] < st) {
            st = parseInt(item.time.split('.')[0]);
            reve = !reve;
          }
          return (
            <Item dot={timeDot(item.time, reve)}>
              <div className={index % 2 ? 'tl-left' : 'tl-right'}>
                {item.text}
              </div>
            </Item>
          );
        })}
        <Item
          dot={
            <div
              className="time-dot"
              style={{ backgroundColor: !reve ? '#8da745' : '#f39800' }}
            >
              开始
            </div>
          }
        ></Item>
      </TimeL>
    );
  };

  const newTimeline = () => {
    data.reverse();
    let st = 2022;
    return (
      <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
        <ul className="timeline timeline-split">
          {data.map((item, index) => {
            if (item.time.split('.')[0] < st) {
              st = parseInt(item.time.split('.')[0]);
            }
            return (
              <li className="timeline-item">
                <div className="timeline-info">
                  <span>{item.time}</span>
                </div>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p>{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    // <div className="full-page">
    //   <Grid container justify="center">
    //     <Grid xs={12} sm={12} md={10}>
    //       <Card>
    //         <Grid
    //           container
    //           direction="column"
    //           justify="center"
    //           alignItems="center"
    //         >
    //           <Grid item xs={12} sm={8}>
    //             <div className="timeline-title">{'云山大事记'}</div>
    //             <div className="timeline-box">{renderTimeline()}</div>
    //           </Grid>
    //         </Grid>
    //       </Card>
    //     </Grid>
    //   </Grid>
    // </div>
    <div className="row example-split">
      {/* <Card> */}
      <div className="col-md-12 example-title">
        <h2>云山大事记</h2>
      </div>
      {newTimeline()}
      {/* </Card> */}
    </div>
  );
};

export default Timeline;
