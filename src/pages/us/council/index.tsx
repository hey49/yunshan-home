import React, { useEffect } from 'react';
import { useIntl, setLocale } from 'umi';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Card } from '@material-ui/core';
import { Card as ACard, Divider, Avatar, Tag } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import './index.less';
import dl from './asset/images/dl.png';
import fpf from './asset/images/fpf.png';
import gzh from './asset/images/gzh.png';
import hyx from './asset/images/hyx.png';
import ly from './asset/images/ly.png';
import lyc from './asset/images/lyc.jpg';
import yl from './asset/images/yl.png';
import zc from './asset/images/zc.png';
import zjs from './asset/images/zjs.png';


const Council: React.FC = (props) => {
  const intl = useIntl();

  const data = [
    {
      name: '阎璐',
      position: '机构负责人',
      title: ['云山保护创始人', '云山执行主任'],
      desc: '负责日常运营管理、筹款及项目监督管理。获得University College London 生态保护硕士，回国后于2003年12月-2012年4月，在野生动植物保护国际（FFI）中国项目担任灵长类保护项目经理。在这8年多时间里，策划和管理灵长类保护项目20多个，涉及10种灵长类，积累了丰富的项目策划、协调和监督经验，并参与机构发展的决策制定和跨边界保护项目开发。2007年9月，带队在中越边境的广西靖西县进行野外调查重新发现了极度濒危的灵长类——东黑冠长臂猿，随后积极推动在这个物种的栖息地设立保护区，促成中国和越南双方政府和保护区的对话与合作，为这一物种制定了跨国保护行动计划。',
      avatar: yl,
    },
    {
      name: '范朋飞',
      position: '理事',
      title: ['博士', '中山大学教授','灵长类学家'],
      desc: '自2002年以来，一直从事长臂猿的研究和保护工作，对我国5种长臂猿开展了种群数量调查和生态学研究，建立了无量山和高黎贡山两个野外研究基地。发表SCI论文25篇，主持多项国家自然科学基金及国内外科研项目。',
      avatar: fpf,
    },
    {
      name: '刘阳',
      position: '理事',
      title: ['博士', '中山大学副教授','鸟类学家'],
      desc: '研究方向为动物进化生态学，并结合当前快速全球化的大背景，开展野生动物疫病、气候变化对鸟类分布的影响、濒危物种保护生物学等应用性研究。成功申请了多个国际物种保护项目。',
      avatar: ly,
    },
    {
      name: '董磊',
      position: '理事',
      title: ['西南交通大学老师','自然摄影师'],
      desc: '从2004年至今坚持拍摄中国的濒危野生动物，中国野鸟图库里收录了他拍摄的573种鸟类。兼任IBE技术总监，英国Nature Picture Library图库签约摄影师。',
      avatar: dl,
    },
    {
      name: '赵超',
      position: '理事',
      title: ['鸟类研究人员','自然摄影师'],
      desc: '在中国国家地理担任科考领队七年，组织了飞羽瞬间野生鸟类摄影大赛。多次参与国内外野生动植物保护组织的工作，拍摄了大量长臂猿及其他野生动物图片。现主要从事保护生物学和鸟类学相关研究。',
      avatar: zc,
    },
    {
      name: '侯一先',
      position: '监事',
      title: ['自然教育导师','资深青少年教育者'],
      desc: '曾任北京市重点高中教师多年，在大理创建中国第一家亲子自然教育主题客栈，已连续开展主题活动近三年共130多周。',
      avatar: hyx,
    },
    {
      name: '龙勇诚',
      position: '荣誉理事',
      title: ['阿拉善 SEE 西南中心首席科学家','中国灵长类学会名誉会长', '中国兽类学会常务理事', '中国动物生态学会理事', '云南自然与文化遗产保护促进会专家委员会主任'],
      desc: '长期从事中国的自然保护和研究工作。',
      avatar: lyc,
    },
    {
      name: '张劲硕',
      position: '科普顾问',
      title: ['中科院动物研究所高级工程师','国家动物博物馆科普策划专家'],
      desc: '致力于青少年科普教育和科学传播，经常在网络平台、广播、电视等媒体进行科普讲座，发表科普文章 300 多篇。',
      avatar: zjs,
    },
    {
      name: '管振华',
      position: '科学顾问',
      title: ['云南生物多样性研究院助理研究员'],
      desc: '长期从事长臂猿野外行为生态学研究和巡护监测培训，是最熟悉长臂猿的专家之一',
      avatar: gzh,
    },
  ]

  // const renderBoss = () => {

  // }

  // const renderOthers = () => {

  // }

  const renderPeopleCard = (person: any) => {
    return (
      <Card>
        <Grid className='council-card' container direction='row' justify="space-around" alignItems="center" spacing={1}>
          <Grid item xs={3}>
            <Avatar className='council-ava' src={person.avatar}/>
          </Grid>
          <Grid item xs={8} container direction='column' spacing={2}>
            <Grid item container>
              <Grid item>
                <div className='council-pos'>{person.position}</div>
              </Grid>
              <Grid item>
                <div className='council-name'>{person.name}</div>
              </Grid>
            </Grid>
            <Grid item>
              {person.title.map((item: any) => {
                return (
                  <Tag color="#F5C16D">{item}</Tag>
                )
              })}
            </Grid>
            <Grid item>
              <div className='council-desc'>
                {person.desc}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    )
  }

  const renderBossCard = (person: any) => {
    return (
      <Card>
        <Grid className='council-card' container direction='row' justify="center" alignItems="center" spacing={0}>
          <Grid item xs={3}>
            <Avatar className='council-ava-boss' src={person.avatar}/>
          </Grid>
          <Grid item xs={8} container direction='column' spacing={2}>
            <Grid item>
              <div className='council-pos-name-boss'>
                <Grid container>
                  <Grid item>
                    <div className='council-pos'>{person.position}</div>
                  </Grid>
                  <Grid item>
                    <div className='council-name'>{person.name}</div>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item>
              {person.title.map((item: any) => {
                return (
                  <Tag color="#F5C16D">{item}</Tag>
                )
              })}
            </Grid>
            <Grid item>
              <div className='council-desc'>
                {person.desc}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    )
  }

  return (
    <Container>
      <ACard>
        <Grid container direction='column' justify="center" alignItems="center" spacing={2}>
          <Grid item>
            <div className='council-title'>理事会成员</div>
          </Grid>
          <Grid item>
            {renderBossCard(data[0])}
          </Grid>
          <Divider />
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid xs={5} item>{renderPeopleCard(data[1])}</Grid>
            <Grid xs={5} item>{renderPeopleCard(data[2])}</Grid>
          </Grid>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid xs={5} item>{renderPeopleCard(data[3])}</Grid>
            <Grid xs={5} item>{renderPeopleCard(data[4])}</Grid>
          </Grid>
          <Divider />
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid xs={5} item>{renderPeopleCard(data[5])}</Grid>
            <Grid xs={5} item>{renderPeopleCard(data[6])}</Grid>
          </Grid>
          <Grid item container justify="center" alignItems="center" spacing={2}>
            <Grid xs={5} item>{renderPeopleCard(data[7])}</Grid>
            <Grid xs={5} item>{renderPeopleCard(data[8])}</Grid>
          </Grid>
        </Grid>
      </ACard>
    </Container>
  );
}

export default Council;
