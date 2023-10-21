import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../../data/headpics';
import mediaData from '../../../../data/contact';

const Tianxing: React.FC = props => {
  const intl = useIntl();
  const pics = mediaData[0];
  const renderMedia = () => {
    return (
      <>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={3}
        >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.wechat}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.wechat_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <a href="https://weibo.com/p/1006065823202811" target="_blank">
                  <img className="media-logo" src={pics.weibo}></img>
                </a>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.weibo_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.tiktok}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.tiktok_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <img className="media-logo" src={pics.xiaohongshu}></img>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.xiaohongshu_qr}></img>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Grid item xs={2}>
                <a href="https://space.bilibili.com/402317570" target="_blank">
                  <img className="media-logo" src={pics.bilibili}></img>
                </a>
              </Grid>
              <Grid item xs={6}>
                <img className="media-qr" src={pics.bilibili_qr}></img>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          ></Grid>
        </Grid>
      </>
    );
  };
  return (
    <div className="article-container">
      <img className="title-img" src={data['np4'].src}></img>
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
              <div className="tianxing-title">背 景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            对于公众来说，长臂猿及其保护工作还有很大的科普空间。云山保护已入驻包括但不限于微信公众号、微博、B站、快手、抖音、小红书等的社交媒体平台，通过优质图文影音、直播、讲座等方式，持续产出长臂猿及相关物种的科普内容、鼓励保护工作者以多样的角度出发分享保护工作故事，提高公众对长臂猿的关注和长臂猿保护工作重要性的认知，也让更多人了解并加入长臂猿保护的队伍中来。
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">过 程</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            云山不断破圈，尝试不同领域、不同形式的内容产出：
            <br />
            《人民日报》、《中国国家地理》、《少年科学画报》、果壳等媒体平台对天行长臂猿及其保护工作进行了多元报道；
            <br />
            @Alex绝对是个妞儿、@滇西小哥等大V博主探访项目地，为我们带来了更广泛的关注；
            <br />
            我们也把保护故事带到了播客节目“故事FM”、“声东击西”中，《寻找猿粪：我可能是世界上最艰难的铲屎官》《猿粪有什么好珍惜的？》分享了别样的跟猿工作日常；
            <br />
            “长臂猿和它的邻居们”、“云山同事热爱工作”、“云山同事关系良好”系列原创视频，从长臂猿及相关动植物科普、保护工作记录等方面展示更加立体的保护工作。
            <br />
            同时，持续推出的天天玩偶、长臂猿生境拼图、知识手册、解密游戏盒、长臂猿服饰等原创和联名文创周边，策划的月捐一周年“样样好”活动、“虎年春节指南”等活动，都让我们与大众的关系更加紧密
            <br />
            截至2023年7月，云山保护微信公众号关注者达1.9万，微博粉丝数达7.9万，B站粉丝数达5000+
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">关注我们</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            {renderMedia()}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
