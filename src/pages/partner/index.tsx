
import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const Partner: React.FC = (props) => {
  const intl = useIntl();

  return (
    <Container>
      合作伙伴
    </Container>
  );
}

export default Partner;
