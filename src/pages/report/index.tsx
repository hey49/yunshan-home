import React, { useState } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card as MCard } from '@material-ui/core';
import { Slider, Card, Modal, Button } from 'antd';
import './index.less';
import data from '../../data/report';
import Hidden from '@material-ui/core/Hidden';

interface ReportProps {
  initCurr: number;
}

const Report: React.FC<ReportProps> = props => {
  const intl = useIntl();

  const [curr, setCurr] = useState<number>(props.initCurr ? props.initCurr : 0);
  const [picModal, setPicModal] = useState<boolean>(false);

  const passedStyle = {
    color: '#8da745',
  };

  const masksBig = {};
  const masksSmall = {};

  data.forEach((item, index) => {
    masksBig[index] = {
      style: curr >= index ? passedStyle : null,
      label: item.isAnnual ? (
        <strong style={{ fontSize: '16px' }}>
          {item.name + intl.formatMessage({ id: 'us.report.annual' })}
        </strong>
      ) : (
        <div>{item.name}</div>
      ),
    };
    masksSmall[index] = {
      style: curr >= index ? passedStyle : null,
      label: <div>{item.sm}</div>,
    };
  });

  const renderPictureModal = () => {
    return (
      <Modal
        className="report-pic-viewer"
        visible={picModal}
        footer={null}
        onCancel={() => setPicModal(false)}
      >
        <div className="report-pic-viewer">
          <img className="report-pic-viewer" src={data[curr].href}></img>
        </div>
      </Modal>
    );
  };

  const renderPic = () => {
    if (data[curr].isAnnual || data[curr].isPdf) {
      return (
        <a href={data[curr].href} target="_blank">
          <div className="report-card">
            <img style={{ width: '45vh' }} src={data[curr].src}></img>
          </div>
        </a>
      );
    } else {
      return (
        <div onClick={() => setPicModal(true)}>
          <div className="report-card">
            <img className="report-pic" src={data[curr].src}></img>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="report-container">
      <Grid
        container
        xs={12}
        sm={12}
        md={10}
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        style={{ background: '#ffffff', margin: 'auto', height: '100%' }}
      >
        <Grid item xs={4} sm={3} md={2} className="report-box">
          <Hidden xsDown>
            <div
              style={{ height: '70vh', overflow: 'scroll', marginLeft: '-4vh' }}
            >
              <Slider
                style={{ height: '100vh', marginTop: '20px' }}
                tooltipVisible={false}
                marks={masksBig}
                defaultValue={curr}
                vertical
                onChange={(v: any) => setCurr(v)}
                reverse
                step={1}
                min={0}
                max={data.length - 1}
              />
            </div>
          </Hidden>
          <Hidden smUp>
            <div style={{ height: '70vh', overflow: 'scroll' }}>
              <Slider
                style={{ height: '100vh' }}
                tooltipVisible={false}
                marks={masksSmall}
                defaultValue={curr}
                vertical
                onChange={(v: any) => setCurr(v)}
                reverse
                step={1}
                min={0}
                max={data.length - 1}
              />
            </div>
          </Hidden>
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
          className="report-box"
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Grid item xs={12} style={{ margin: 'auto' }}>
            {renderPic()}
          </Grid>
          <Grid item>
            <div className="report-tip">{'点击封面阅读'}</div>
          </Grid>
        </Grid>
      </Grid>
      {renderPictureModal()}
    </div>
  );
};

export default Report;
