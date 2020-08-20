
import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card, Divider } from 'antd';
import './index.less';

const Contact: React.FC = (props) => {
  const intl = useIntl();

  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={5}>
        <Card>
          <div className='contact-title'>联系方式</div>
          <Divider></Divider>
          <Grid>
          <Grid item></Grid>
        </Grid>
        </Card>
      </Grid>
      <Grid item xs={5}>
        <Card>
          <div className='contact-title'>联系方式</div>
          <Divider></Divider>
          <Grid>
          <Grid item></Grid>
        </Grid>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Contact;
