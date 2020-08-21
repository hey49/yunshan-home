
import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card, Divider } from 'antd';
import './index.less';

const Contact: React.FC = (props) => {
  const intl = useIntl();

  const renderContact = () => {
    return (
      <Card>
        <div className='contact-title'>联系方式</div>
        <Divider></Divider>
        <Grid container>
          <Grid item>
            <span><div className='contact-item-title'>地址</div><div>大理市大理古城床单厂C-2-2</div></span>
          </Grid>
        </Grid>
      </Card>
    )
  }

  const renderMedia = () => {
    return (
      <Card>
        <div className='contact-title'>宣传媒体</div>
        <Divider></Divider>

      </Card>
    )
  }
  return (
    <Grid container justify="center" alignItems="flex-start" spacing={2}>
      <Grid item xs={5}>
        {renderContact()}
      </Grid>
      <Grid item xs={5}>
        {renderMedia()}
      </Grid>
    </Grid>
  );
}

export default Contact;
