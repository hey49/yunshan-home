import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import data from '../../data/partner';
import { Card } from 'antd';
import './index.less';

const Partner: React.FC = (props) => {
  const intl = useIntl();

  const src = data[0].src;

  return (
    // <Card>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={10}>
          <img className='partner-total' src={src}></img>
        </Grid>
      </Grid>
    // </Card>
  );
}

export default Partner;
