import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';

const Media: React.FC = props => {
  const intl = useIntl();

  const renderReports1 = () => (
    <Grid
      item
      xs={12}
      sm={10}
      md={8}
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://mp.weixin.qq.com/s/FFGBL5PsfKiCvTnKWOvHLg">
            南方人物周刊 -《保护天行长臂猿，也是保护人与自然的链接》
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://h.xinhuaxmt.com/vh512/share/11171676?d=1348c60&channel=weixin">
            新华社客户端 - 国际长臂猿日在北京举行
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://news.cctv.com/2021/05/10/ARTI4NWoxlYRpOaJu5htC2Y8210510.shtml">
            央视网 - 云山之间 孕育生命的希望——专访“云山保护”创始人阎璐
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://w.yangshipin.cn/video?type=0&vid=a000019p0sy">
            央视科教频道《科学动物园》 - 中国科学家发现新物种—天行长臂猿
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://mtydazzle.yunshicloud.com/pages/details/details.html?companyId=ysxw&productId=320D3AAAE13D4813B3B256FE4B9E8C56&docid=1506409CE66E4EE4B4338534725B6340&isNew=yes&downloadTips=true&jumpCode=QCYD&type=news&articleType=1">
            云南电视台 - 以热爱护自然 用行动美家园
            云南公益机构入选全球生物多样性保护典型
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://weekly.caixin.com/2021-04-30/101704396.html">
            财新周刊 - 封面报道《孤独的天行者》
          </a>
        </div>
      </Grid>
    </Grid>
  );

  const renderReports2 = () => (
    <Grid
      item
      xs={12}
      sm={10}
      md={8}
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://mp.weixin.qq.com/s/6Sc9C6zr05z0IsngJR7JWg">
            一条 -
            有一群名校毕业的90后和00后漂亮女生，整天追猿、捡猿粪、给猿找对象……
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://www.bilibili.com/video/BV1Jp4y1e7Cc/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
            ALex绝对是个妞儿 - 不到150只的长臂猿，保护它们的人比长臂猿更少
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://www.bilibili.com/video/BV1nG411V77M/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
            大熊猫有 1864 只，但它们只有不到 150 只
          </a>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="tianxing-sub-title">
          <a href="https://www.bilibili.com/video/BV11E411y7ss/?spm_id_from=333.999.0.0&vd_source=beec0246ef894e17a936065f77a10d56">
            滇西小哥 -
            云南高黎贡山有一群可爱的人，守护着中国野外少于150只的天行长臂猿
          </a>
        </div>
      </Grid>
    </Grid>
  );

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
            {/* <Grid xs={4}> */}
            <Divider orientation="left">
              <div className="tianxing-title">官方媒体</div>
            </Divider>
            {/* </Grid> */}
          </Grid>
          {renderReports1()}
        </Grid>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            {/* <Grid xs={4}> */}
            <Divider orientation="left">
              <div className="tianxing-title">自媒体</div>
            </Divider>
            {/* </Grid> */}
          </Grid>
          {renderReports2()}
        </Grid>
      </Card>
    </div>
  );
};

export default Media;
