import React, { useState } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card as MCard } from '@material-ui/core';
import { Slider, Card, Modal, Button } from 'antd';
import './index.less';
import data from '../../data/report';

interface ReportProps {
  initCurr: number
}

const Report: React.FC<ReportProps> = (props) => {
  const intl = useIntl();

  const [curr, setCurr] = useState<number>(props.initCurr ? props.initCurr : 0);
  const [picModal, setPicModal] = useState<boolean>(false);


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

  const renderPictureModal = () => {
    return (
      <Modal
        width='70%'
        title= {(
          <div className='report-pic-viewer-title'>
            {data[curr].down.split('.')[0]}
          </div>
        )}
        visible={picModal}
        footer={null}
        onCancel={() => setPicModal(false)}
      >
        <div className='report-pic-viewer'>
          <img className='report-pic-viewer' src={data[curr].href}></img>
        </div>
      </Modal>
    )
  }

  const renderPic = () => {
    if (data[curr].isAnnual) {
      return (
        <a href={data[curr].href} target="_blank">
          <div className='report-card' >
            <img style={{width: '45vh'}} src={data[curr].src}></img>
          </div>
        </a>
      )
    } else {
      return (
        <div onClick={ () => setPicModal(true)}>
          <div className='report-card' >
            <img style={{width: '45vh'}} src={data[curr].src}></img>
          </div>
        </div>
      )
    }
  }

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
            {renderPic()}

          </Grid>
          <Grid item>
          <div className='report-tip'>
              {'点击封面阅读'}
            </div>
          </Grid>
        </Grid>
        <Grid item xs={2} className='report-box' container direction='column' justify="center" alignItems="flex-start">
          <Grid>
            <div className='report-category'>
              <ul style={{marginTop: '2px'}}>
                {data[curr].category.map(item => <li>{item}</li>)}
              </ul>
            </div>

          </Grid>
        </Grid>
      </Grid>
      {renderPictureModal()}
    </div>
  );
}

export default Report;
