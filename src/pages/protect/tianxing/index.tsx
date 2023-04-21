import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card, Divider } from 'antd';
import './index.less';
import {
  HomeOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import data from '../../../data/tianxing';

const Tianxing: React.FC = props => {
  const intl = useIntl();

  const renderProject1 = () => (
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
          -长臂猿数量和分布调查，及持续的种群动态监测-
        </div>
      </Grid>
      <Grid item>
        2017年4-6月云山保护联合中山大学和西南林业大学的研究团队，以及高黎贡山国家级自然保护区、盈江县林草局、铜壁关省级自然保护区一起开展了我国天行长臂猿野外种群数量及分布大调查。
      </Grid>
      <Grid item>
        2018年西南林业大学的管振华博士与盈江县环保局合作，在支那、苏典开展了为期一年的天行长臂猿监测工作，进一步了解清楚了支那、苏典两个乡的长臂猿种群数量和分布情况。更重要的是通过这一年的监测培养了10位对长臂猿非常熟悉的基层护林员。
      </Grid>
    </Grid>
  );

  const renderProject2 = () => (
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
          -长臂猿遗传多样性调查（2018年9月—持续进行中）-
        </div>
      </Grid>
      <Grid item>
        栖息地破碎化的天行长臂猿被分隔在苏典、支那、腾冲和高黎贡山等地，小种群的隔离分布造成了种群之间的近亲繁殖现象，对种群的繁衍不利，为调查各地的小种群之间的遗传多样性，从2018年9月开始，云山保护与中山大学范朋飞教授团队合作，开始长臂猿遗传多样性的野外数据收集工作。到目前为止的一年多时间里共投入一百多天的野外工作，已收集到香柏、梨树、拉马河共4群长臂猿的20多份粪便样品，接下来的工作中仍会继续进行粪样收集。
      </Grid>
    </Grid>
  );

  const renderProject3 = () => (
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
          -社区和学校保护宣传（2016年12月--持续进行中）-
        </div>
      </Grid>
      <Grid item>
        2016年12月，云山保护和盈江县林业局第一次在苏典乡勐嘎小学和社区开展了保护宣传活动；2017年6月-2018年6月多次在支那乡的小学、保山市隆阳区的保护区周边学校、腾冲市一中开展长臂猿科普进校园宣传活动。
      </Grid>
      <Grid item>
        2019年3月，云山保护与铜壁关自然保护区管护局一起，邀请了两位艺术家志愿者，在支那和苏典的5个寨子和1所学校开展了一轮长臂猿保护宣传，通过绘制长臂猿墙绘、长臂猿摄影作品展览、视频放映等形式向长臂猿栖息地周边的村寨宣传长臂猿科普知识。
      </Grid>
    </Grid>
  );

  const renderProject4 = () => (
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
        <div className="tianxing-sub-title">-共建云端护猿基地-</div>
      </Grid>
      <Grid item>
        2019年1月由高黎贡山国家级自然保护区保山管护局、中山大学范朋飞研究团队和云山保护共建共管高黎贡山板厂保护与科研基地正式启动，两年的探索，板厂基地实现了每月6天的长臂猿生态行为学监测、50个植物样方月度监测、20多台红外相机网格化监测，开拓更多创新的保护思路，提供公众参与一线保护行动的机会；并且，在另一个我国天行长臂猿的重要分布区——云南省德宏州盈江县也将建立一个基于社区的云端护猿基地。希望通过两个点的相关监测数据对比以及实地调查，为天行长臂猿整体和局部的保护行动方案提供一线的科学依据。
      </Grid>
    </Grid>
  );

  const renderProject5 = () => (
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
          -长臂猿栖息地考察及栖息地质量调查（2019年12月—持续开展中）-
        </div>
      </Grid>
      <Grid item>
        要解决天行长臂猿栖息地破碎化的问题，必须要从长远的角度去考虑栖息地恢复和生态廊道建设，而第一步就需要了解天行长臂猿现有栖息地的状况，了解现有种群的分布、栖息地范围、林地权属和建设生态廊道的潜在区域。在2020年5-6月，云山保护两位工作人员分别对盈江县支那乡和苏典乡的5个自然村和周边的长臂猿栖息地开展了实地调查，在这一次的实地调查中我们共确定了6群长臂猿的活动范围。
      </Grid>
    </Grid>
  );

  const renderProject6 = () => (
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
          -深度社区调查（2019年5月-2020年5月）-
        </div>
      </Grid>
      <Grid item>
        2019-2020年，我们通过半结构式访谈及问卷调查的方法获得与天行长臂猿有关的村落的社会学本底数据，以便在规划社区保护行动中能够有数据作为支撑；与当地社区建立起联系，了解社区内部不同的声音有哪些，可能来自哪些群体；在前两者的基础上，与当地政府部门针对社区保护的议题展开讨论，争取来自政府层面的支持。
        在调查过程中，云山保护同时展开了与苏典乡政府（河西五寨-拉马河区、茅草区）
        的合作，尝试性进行社区保护的探索工作。目前已有针对苏典乡中小学的乡土教材及自然教育计划、以及针对社区青少年暑期学习项目的合作。
      </Grid>
    </Grid>
  );

  const renderProject7 = () => (
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
          -长臂猿主题自然教育课程开发和实践-
        </div>
      </Grid>
      <Grid item>
        当地傈僳族有不猎杀长臂猿的传统和世代以来对长臂猿的保护意识，但在现代生活的冲击下，当地传统文化知识逐渐丧失，导致长臂猿栖息地周边社区群众对长臂猿缺乏科学认知，与自然的情感连结也越来越淡薄。我们通过对栖息地周边社区学校的学生进行长臂猿主题自然教育，研发乡土教材并在学校和周边森林开展课程实践，以重塑青少年对家乡自然的科学认知和感情连结，进而获得更多社区群众对保护行动的支持。
      </Grid>
    </Grid>
  );

  const renderProject8 = () => (
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
        <div className="tianxing-sub-title">-社区保护和科研体验营-</div>
      </Grid>
      <Grid item>
        盈江县是天行长臂猿在中国重要的分布区，当地傈僳族人们长期以来自发保护长臂猿的传统，使得不少天行长臂猿在离村寨较近的森林里还得以继续繁衍，在盈江北部形成了长臂猿与当地傈僳族人们和谐共处的独特景观。支那乡庐山村的香柏寨子周边就生活着三群天行长臂猿，这里也是目前最容易见到野外状态下非习惯化天行长臂猿的地方。2019年8月，云山招募了3个核心支持者家庭共同在社区开展了一周的保护和科研体验营，每天早上和上午是参与长臂猿监测和栖息地调查，穿插鸟类、两爬和昆虫观测活动；下午会跟当地的孩子进行自由交流和互动；晚上的时候就走入村民家庭开展社区访谈。我们邀请了一位音乐人和一位即兴戏剧老师，在营期最后，城市家庭和当地孩子共同创作出演了一场“家乡的甲米呜呼”戏剧表演。
      </Grid>
    </Grid>
  );

  return (
    <div className="article-container">
      <img className="title-img" src={data['gibbon1'].src}></img>
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
              <div className="tianxing-title">背景</div>
            </Divider>
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            高黎贡白眉长臂猿（又称为天行长臂猿），学名：Hoolock
            tianxing，英文名：Skywalker Hoolock
            Gibbon，属于长臂猿科（Hy|obatidae）白眉长臂猿属（Hoolock），是国家I级保护动物，被IUCN红色名录列为濒危，也是CITES附录中禁止国际贸易的物种。天行长臂猿在全球范围内仅分布于亲敦江和怒江之间的中国云南、缅甸和印度的局部地区，云南省是我国天行长臂猿唯一有分布的省区。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            根据2008-2009年期间的野外调查数量估计，目前中国天行长臂猿种群数量仅有40群左右，个体数量已不足200只，片段化分布于云南保山、腾冲和盈江的17个森林斑块中。2017年1月，云山保护的发起人和理事，中山大学的范朋飞教授与国内外研究者合作撰写了天行长臂猿作为新种命名的文章，发表在《美国灵长类学报》，得到了国内外媒体的广泛关注和报道。伴随着这一物种分类地位的提升，对于它们的保护也变得更为紧迫。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            我国天行长臂猿的栖息地一部分位于保护区内，如高黎贡山国家级自然保护区、铜壁关省级自然保护区、小黑山县级自然保护区；在盈江和腾冲地区，还有一部分天行长臂猿散落在两个乡镇的个人林地、集体林和国有林当中。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            分布于保护区内的长臂猿种群及其栖息地一定程度上受益于保护区的庇护得到了有效保护，但
            它们仍面临着诸多威胁：栖息地破碎化极为严重加上小种群致使天行长臂猿基因交流困难；草果种植、农田开垦等人类生产活动导致它们的栖息地面积不断减少、质量不断下降。另外，还有一部分天行长臂猿生活在集体林里，缺乏针对性的保护措施。这些都极大威胁着天行长臂猿的生存，使该物种未能摆脱极度濒危的状态。究其原因，虽不乏历史因素导致，但也有近十多年来社会经济快速发展所带来的一些新问题。
          </Grid>
          <Grid item xs={12} sm={10} md={8}>
            盈江支那、苏典两个乡的傈僳族将高黎贡白眉长臂猿（当地称“黑猴”）视为神猴，历来有不打猎长臂猿的传统，民间还制定有乡规民约规定不允许打猎长臂猿，否则将罚以重款，受全村谴责。盈江既是现在天行长臂猿分布较多的区域，又保有良好的护猿传统，保护行动的介入对于缓解该区域长臂猿面临的生存威胁，帮助该地区的长臂猿种群实现长期生存和繁衍有重要意义。
          </Grid>
          <Grid item container xs={12} sm={10} md={8}>
            <Divider />
          </Grid>
          <Grid
            item
            container
            xs={12}
            sm={10}
            md={8}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={9}>
              <div className="tianxing-goal">
                <ul style={{ marginTop: '10px' }}>
                  <li>
                    通过长期的监听和栖息地调查，摸清该物种在云南的全面分布现状和种群数量，评估栖息地质量并栖息识别出栖息地恢复和廊道建设的优先区域；
                  </li>
                  <li>
                    加强宣传教育，通过在盈江的支那、苏典两乡的学校、社区开展长臂猿主题宣传活动和自然教育课程研发，使长臂猿分布区周边学校、社区了解保护天行长臂猿的必要性和意义，并清楚知道通过哪些实际行动参与保护天行长臂猿；
                  </li>
                  <li>
                    通过在盈江苏典、支那乡组建社区护猿队伍，确立巡护监测机制，加大社区参与力度，使威胁长臂猿生存及破坏栖息地的现象基本消失；
                  </li>
                </ul>
              </div>
            </Grid>

            <Grid item xs={1}>
              <div className="tianxing-title">目</div>
              <div className="tianxing-title">标</div>
              {/* <Divider type="vertical" orientation="left"><div className='tianxing-title'>背景</div></Divider> */}
            </Grid>
          </Grid>
          {/* <Grid item container xs={12} sm={10} md={8} >
            <Divider />
        </Grid> */}
          <Grid item container xs={12} sm={10} md={8} alignItems="flex-start">
            {/* <Grid xs={4}> */}
            <Divider orientation="left">
              <div className="tianxing-title">项目内容</div>
            </Divider>
            {/* </Grid> */}
          </Grid>
          {renderProject1()}
          {renderProject2()}
          {renderProject3()}
          {renderProject4()}
          {renderProject5()}
          {renderProject6()}
          {renderProject7()}
          {renderProject8()}
        </Grid>
      </Card>
    </div>
  );
};

export default Tianxing;
