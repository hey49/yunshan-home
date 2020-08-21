import React, { useState } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card as MCard } from '@material-ui/core';
import { Slider, Card, Modal, Button } from 'antd';
import './index.less';
import data from '../../../data/report';

interface ReportProps {
  initCurr: number
}

const Report: React.FC<ReportProps> = (props) => {
  const intl = useIntl();

  const [curr, setCurr] = useState<number>(props.initCurr ? props.initCurr : 0);

  const passedStyle = {
    color: '#8da745'
  };

  const masks = {}

  data.forEach((item, index) => {
    masks[index] = {
      style: curr >= index ? passedStyle : null,
      label: item.isAnnual ? <strong style={{fontSize: '24px'}}>{item.name}</strong> : <div>{item.name}</div>,
    }
  })

  // const renderPictureModal = () => {
  //   return (
  //     <Modal
  //       title="Basic Modal"
  //       visible={this.state.visible}
  //       onOk={this.handleOk}
  //       onCancel={this.handleCancel}
  //     >

  //     </Modal>
  //   )
  // }

  return (
    <div className='report-container'>
      <Grid container xs={10} direction='row' justify='space-around' alignItems='center' style={{background: '#ffffff', margin: 'auto', height: '100%'}}>
        <Grid item xs={2} className='report-box'>
          <div style={{height: '70vh'}}>
            <Slider tooltipVisible={false} marks={masks} defaultValue={curr} vertical onChange={(v: any) => setCurr(v)} reverse step={1} min={0} max={data.length - 1}/>
          </div>
        </Grid>
        <Grid item xs={5} className='report-box' container direction='column' justify="flex-start" alignItems="center">
          <Grid item style={{margin: 'auto'}}>
          {/* <a href={data[curr].href} download={data[curr].down}> */}
            <a href={data[curr].href} >
              <div className='report-card' >
                <img style={{width: '45vh'}} src={data[curr].src}></img>
              </div>
            </a>
          </Grid>
        </Grid>
        <Grid item xs={2} className='report-box' container direction='column' justify="center" alignItems="flex-start">
          <Grid>
            <div className='report-category'>
              <ul style={{marginTop: '2px'}}>
                {data[curr].category.map(item => <li>{item}</li>)}
              </ul>
            </div>
            <div className='report-tip'>
              {'点击封面下载'}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Report;
