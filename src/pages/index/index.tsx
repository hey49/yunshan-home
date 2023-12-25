import React from 'react';
import { useIntl, setLocale } from 'umi';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/modules/navigation/navigation.less';
import 'swiper/modules/pagination/pagination.less';
import 'swiper/modules/autoplay/autoplay.less';
import { Card, Divider, Button } from 'antd';
import Grid from '@material-ui/core/Grid';
import indexLog from '../../data/assets/index/indexLogo.png';
import './index.less';
import data from '../../data/index';
import mediadata from '../../data/contact';
import { Link } from 'umi';

SwiperCore.use([Navigation, Pagination]);


const IndexSection = props => {
  const { order, img, title, content, link } = props;
  const renderImg = () => <img className="index-section-img-content" src={img} />;
  const renderText = () => (
    <div className='index-section-text-container'>
      <div className='index-section-title'>{title}</div>
      <div className='index-section-content'>{content}</div>
      <Button type='primary' className='index-section-button'>
        <Link
          to={link}
        >
          了解更多
        </Link>
      </Button>
    </div>
  )
  return (
    <div className='index-section'>
      {
        order === 1 ? <div className='index-section-img'>{renderImg()}</div> : <div className='index-section-text'>{renderText()}</div>
      }
      {
        order === 1 ? <div className='index-section-text'>{renderText()}</div> : <div className='index-section-img'>{renderImg()}</div>
      }
    </div>
  );
}


const Index: React.FC = props => {
  const intl = useIntl();

  const idx_data = [
    {
      title: "长臂猿科普介绍",
      content: "",
      img: data.idx0,
      link: '/protect/knowledge',
    },
    {
      title: "云山保护2022年年报",
      content: "",
      img: data.idx1,
      link: '/us/report'
    },
    {
      title: "长臂猿食堂调查计划",
      content: "长臂猿食性与取食行为调查",
      img: data.idx2,
      link: '/programs/investigation/canteen'
    },
    {
      title: "青山项目",
      content: "生态种植提升长臂猿栖息地质量",
      img: data.idx3,
      link: '/programs/habitat/qingshan'
    },
    {
      title: "成为月捐人",
      content: "",
      img: data.idx4,
      link: '/donate/month'
    },
  ]


  return (
    <div className='full-page'>
      <div>
        <video className='index-video' autoPlay loop muted>
          <source src={data.indexVideo} type='video/mp4' />
        </video>
        <div className='video-link'>
          云山保护
        </div>
      </div>
      <div>
        <div className='index-section-container'>
          {
            idx_data.map((item, index) => {
              return (
                <IndexSection order={index % 2} title={item.title} content={item.content} img={item.img} link={item.link} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Index;
