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
import { getLocale } from '@@/plugin-locale/localeExports';

SwiperCore.use([Navigation, Pagination]);

const IndexSection = props => {
  const intl = useIntl();

  const { order, img, title, content, link } = props;
  const renderImg = () => (
    <img className="index-section-img-content" src={img} />
  );
  const renderText = () => (
    <div className="index-section-text-container">
      <div className="index-section-title">{title}</div>
      <div className="index-section-content">{content}</div>
      <Button type="primary" className="index-section-button">
        <Link to={link}>{intl.formatMessage({ id: 'home.button.learn' })}</Link>
      </Button>
    </div>
  );
  return (
    <div className="index-section">
      {order === 1 ? (
        <div className="index-section-img">{renderImg()}</div>
      ) : (
        <div className="index-section-text">{renderText()}</div>
      )}
      {order === 1 ? (
        <div className="index-section-text">{renderText()}</div>
      ) : (
        <div className="index-section-img">{renderImg()}</div>
      )}
    </div>
  );
};

const Index: React.FC = props => {
  const intl = useIntl();

  const idx_data = [
    {
      title: intl.formatMessage({ id: 'home.knowledge' }),
      content: '',
      img: data.idx0,
      link: '/protect/knowledge',
    },
    {
      title: intl.formatMessage({ id: 'home.report' }),
      content: '',
      img: data.idx1,
      link: '/us/report',
    },
    {
      title: intl.formatMessage({ id: 'home.canteen' }),
      content: intl.formatMessage({ id: 'home.canteen.content' }),
      img: data.idx2,
      link: '/programs/investigation/canteen',
    },
    {
      title: intl.formatMessage({ id: 'home.qingshan' }),
      content: intl.formatMessage({ id: 'home.qingshan.subtitle' }),
      img: data.idx3,
      link: '/programs/habitat/qingshan',
    },
    {
      title: intl.formatMessage({ id: 'home.donate' }),
      content: '',
      img: data.idx4,
      link: '/donate/month',
    },
  ];

  return (
    <div className="full-page">
      <div>
        <video className="index-video" autoPlay loop muted>
          <source src={data.indexVideo} type="video/mp4" />
        </video>
        <div className="video-link">
          {intl.formatMessage({ id: 'home.video' })}
        </div>
      </div>
      <div>
        <div className="index-section-container">
          {idx_data.map((item, index) => {
            return (
              <IndexSection
                order={index % 2}
                title={item.title}
                content={item.content}
                img={item.img}
                link={item.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
