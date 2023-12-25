import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <Card>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">使命</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            以科研监测助推公众科普，链接多方资源保护长臂猿及其生存繁衍的栖息地

          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">愿景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            千山长青 猿声常鸣
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">价值观</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            科学 平等 合作 信任 可持续
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">口号</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            和云山一起保护中国猿          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">战略方向</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            十年内在社区保护地实现长臂猿种群净增长          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
