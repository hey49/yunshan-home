import React from 'react';
import { useIntl, setLocale } from 'umi';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import { Card, Divider } from 'antd';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import slide1 from './asset/images/slide1.jpeg';
import slide2 from './asset/images/slide2.jpg';
import slide3 from './asset/images/slide3.jpg';
import indexLog from './asset/images/indexLogo.png';
import "./index.less";

SwiperCore.use([Navigation, Pagination]);

const styles = {
  slideImg: {
    width: '100%',
    // height: '30rem'
  },
  authorBox: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
  },
  authorText: {
    color: 'white',
    fontSize: '1rem',
  },
  box2: {
    position: 'absolute',
    right: '50vh',
    top: '40vh',
  },
  box2Text1: {
    color: '#8da745;',
    fontSize: '60px',
    textShadow: '2px 2px #000000'
  },
  box2Text2: {
    color: 'white',
    fontSize: '40px',
    textShadow: '2px 2px #000000'
  },
}

const Index: React.FC = (props) => {
  const intl = useIntl();

  const renderUs = () => {
    return (
      <Container>
        <Card>
          <Grid container direction='column' justify="center" alignItems="center" spacing={4}>
            <Grid item container justify="center" alignItems="center" spacing={4}>
              <Grid item>
                <div className='index-title'>
                  云山保护
                </div>
              </Grid>
              <Grid item>
                <img style={{width: '30vh'}} src={indexLog}></img>
              </Grid>
            </Grid>
            <Grid container item xs={8} direction='column' justify="center" alignItems="center">
              <Divider><div className='index-sub-title'>我们是谁</div></Divider>
              <Grid item xs={8}>
                <div>
                云山保护（Cloud Mountain Conservation），全称大理白族自治州生物多样性保护与研究中心，于2015年6月在大理州民政局注册成立，是一个专注于抢救性地研究和保护中国西南地区生物多样性的民间公益组织。
                </div>
                <div>
  云山保护的创始人是一群志同道合的朋友，拥有着丰富的野生动物研究与保护经验，其中既有曾长期在国际保护组织从事濒危野生动植物保护的项目负责人，也有专业的兽类学家、鸟类学家，以及知名的野生动物摄影师和自然教育导师。
                </div>
              </Grid>
              <Divider><div className='index-sub-title'>成立初衷</div></Divider>
              <Grid item xs={8}>
                <div>
                云南及其周边地区是全球生物多样性最富集的地区之一，仅云南省就有15种灵长类（约占中国灵长类的57%），960多种鸟类（约占中国鸟类的2/3）和18000多种高等植物(约占中国总数的60%)，其中很多为特有种和濒危种。但云南少数民族众多，很多地区经济发展水平仍十分落后，生存和发展严重依赖着对自然资源的损耗，尤其在人口扩张的压力下，野生动物丧失了大面积的栖息地，还有不少珍稀的野生动物死于盗猎者的枪口，种群数量急剧减少。人在进，动物在退，我们希望减缓甚至阻止人向自然侵入的步伐，留住野生动植物，也留住它们的家。
                </div>
                <div>
  中国的西南山地是生物多样性最为丰富和独特的地区之一，在过去5年中，科学家在滇西北和藏东南先后发现了怒江金丝猴和白颊猕猴两种大型灵长类，说明我们对这一地区的生物多样性的调查还远远不够。与此同时，有更多物种在还没有被发现或者了解清楚之前就消失在人类的视野，中国的6种长臂猿其中有两种（白掌长臂猿和北白颊长臂猿）已经在野外功能性灭绝。这对于我们从事保护和科研的人而言既是挑战也是机遇，于是我们成立了云山保护，希望以保护长臂猿和其它灵长类旗舰物种为突破口，进而保护生物多样性最为丰富的西南森林生态系统，促进人与自然和谐共存。
                </div>
              </Grid>
              <Divider><div className='index-sub-title'>我们的使命</div></Divider>
              <Grid item xs={8}>
                <div>
                通过系统的调查、专业的科学研究和科普教育，抢救性的研究和保护中国西南地区的生物多样性，同时促进当地社区的可持续发展。
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Card>

      </Container>
    )
  }

  const renderSwiper = ()=> {
    return (
    <div className='index-carousel-container' >
      <Swiper
        className='index-swiper'
        effect="fade"
        loop
        autoplay
        pagination={{ clickable: true }}
        navigation>
        <SwiperSlide>
          <a href='/report'>
            <div>
              <div style={styles.authorBox}>
                <div style={styles.authorText}>图/欧阳凯</div>
              </div>
              <img style={styles.slideImg} src={slide1}/>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.bilibili.com/bangumi/media/md28228553/?from=search&seid=11540729606434942222' target="_blank">
            <div>
              <div style={styles.authorBox}>
                <div style={styles.authorText}>图/天行情歌</div>
              </div>
              <img style={styles.slideImg} src={slide2}/>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.bilibili.com/bangumi/media/md28228553/?from=search&seid=11540729606434942222' target="_blank">
            <div>
              <div style={styles.authorBox}>
                <div style={styles.authorText}>图/范鹏飞</div>
              </div>
              <div style={styles.box2}>
                <div style={styles.box2Text1}>XXXXXXXXX</div>
                <div style={styles.box2Text2}>XXXX</div>
              </div>
              <img style={styles.slideImg} src={slide3}/>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
    )
  }

  return (
    <>
      {renderSwiper()}
      {renderUs()}
    </>
  )
}

export default Index;
