import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import { Card, Divider } from 'antd';
import './index.less';
import data from '../../../../data/headpics';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  return (
    <div className="article-container">
      <img className="title-img" src={data['pi6'].src}></img>
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
              <div className="tianxing-title">立项理由</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            在天行长臂猿的主要分布区——云南省德宏傣族景颇族自治州盈江县，云山保护联合云南铜壁关省级自然保护区开展了一次种群空缺调查，调查发现盈江县的天行长臂猿绝大部分种群分布在保护区外的国有林、集体林和个人林里。
            <br />
            其中盈江县苏典乡拉马河片区的天行长臂猿种群的分布情况对保护来说格外具有价值。这里的栖息地破碎化严重，然而在约13平方公里的范围内却生活着5个家庭群和2只独猿，这里的长臂猿们的活动范围比高黎贡国家级自然保护区内的天行长臂猿种群还要集中。有充分的证据表明，像拉马河片区这样保护区外的栖息地比保护区内受到了更多人为干扰因素如道路、砍伐、森林退化、周边社区开展日常生产生活活动等造成的影响，但为何这里却承载着盈江县分布最集中的天行长臂猿种群？
            <br />
            我们针对上面的问题提出一个可能的答案——保护区外存在的人为干扰、栖息地退化等因素虽然对长臂猿的生存构成了负面影响，但同时也对天行长臂猿的潜在食物竞争者起到了抑制作用，特别是其他灵长类动物；从而使得保护区外的天行长臂猿比如拉马河片区的种群的取食竞争压力小于保护区内。
            <br />
            为了验证这个猜想，我们我们希望在盈江县拉马河片区的天行长臂猿栖息地内开展一次针对长臂猿食堂的调查。我们将选取每个季节对于天行长臂猿最重要的食物树种，通过在林层系统布设红外相机，记录食物树被取食的全过程和所有的取食者，并和保护区内的相关数据进行对比。
            <br />
          </Grid>

          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">项目简介</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            2022年9月，通过腾讯公益“99公益日”的筹款，我们开展了“长臂猿食堂调查计划”。通过林层红外相机调查，可以对已有的保护区内天行长臂猿的食性数据进行验证，收集未习惯化的长臂猿种群的取食行为数据，并得到一个在天行长臂猿的食堂干饭的物种名单，最终从食物的角度对于栖息地恢复提出建议。
            <br />
            一年的时间内，云山团队通过“长臂猿食堂调查计划”布设了178台次的红外相机，拍摄了18万个共计7.57TB的红外影像文件，拍摄到两个长臂猿家庭群和一只独猿取食
            次，以及50余种鸟类和20余种其他兽类取食的画面。红外相机还拍摄到了新生的婴猿，在我们认为长臂猿不会去的次生林和高海拔地区也拍到了长臂猿。今年我们希望扩展调查区域至周边2-3个家庭群的栖息地，通过长期监测了解清楚这个片区长臂猿的活动范围特别是取食范围和规律、每个家庭群的家庭构成，从而为社区保护行动指明具体方向和关注范围。
            <br />
            现已开展四轮红外相机布设工作，截止目前，共有180余人报名并参与线上工作培训成为志愿者。
          </Grid>
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            <Divider>
              <div className="tianxing-title">了解更多</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://www.bilibili.com/video/BV1zm4y1p7Pv/?spm_id_from=333.337.search-card.all.click&vd_source=beec0246ef894e17a936065f77a10d56">
              为了拍到长臂猿，我们都做了啥？
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/K2Yr1hEw9xSAaL3Izodg0w">
              相信我吧，这里的长臂猿是吃空气长大的
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/SfA8ZybT8YpHfJTu2oB14A">
              爬了几十次山后，终于拍到了“干饭”长臂猿
            </a>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            <a href="https://mp.weixin.qq.com/s/Cr-ZHCLFHZVM82lEAaBsfg">
              我想，大概要几十年才能参透些亚热带森林的规律
            </a>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
