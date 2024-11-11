import React from 'react';
import { useIntl, setLocale } from 'umi';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import 'swiper/modules/navigation/navigation.less';
import 'swiper/modules/pagination/pagination.less';
import 'swiper/modules/autoplay/autoplay.less';
import { Divider, Button } from 'antd';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Box,
} from '@mui/material';
import indexLog from '../../data/assets/index/indexLogo.png';
import './index.less';
import data from '../../data/index';
import mediadata from '../../data/contact';
import { Link } from 'umi';
import { getLocale } from '@@/plugin-locale/localeExports';
import Container from '@material-ui/core/Container';
import { CaretRightOutlined, RightCircleOutlined } from '@ant-design/icons';

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

  const project_data = [
    {
      title: intl.formatMessage({ id: 'home.canteen' }),
      sub: intl.formatMessage({ id: 'home.canteen.sub' }),
      content: '',
      img: data.idx0,
      link: '/programs/investigation/canteen',
      phone: 'flex',
    },
    {
      title: intl.formatMessage({ id: 'home.empower' }),
      sub: intl.formatMessage({ id: 'home.empower.sub' }),
      content: '',
      img: data.idx1,
      link: '/programs/community/lishu',
      phone: 'flex',
    },
    {
      title: intl.formatMessage({ id: 'home.habitat' }),
      sub: intl.formatMessage({ id: 'home.habitat.sub' }),
      content: '',
      img: data.idx2,
      link: '/programs/habitat/qingshan',
      phone: 'flex',
    },
    {
      title: intl.formatMessage({ id: 'home.donate' }),
      sub: '',
      content: '',
      img: data.idx3,
      link: '/support/month',
      phone: 'none',
    },
  ];

  const story_data = [
    {
      title: intl.formatMessage({ id: 'home.eat' }),
      content: '',
      img: data.idx4,
      link: 'https://mp.weixin.qq.com/s/Lf7FqPEk5cz8NW66CEyAFQ',
    },
    {
      title: intl.formatMessage({ id: 'home.tree' }),
      content: '',
      img: data.idx5,
      link: 'https://www.bilibili.com/video/BV1Cb421n7uQ/',
    },
    {
      title: intl.formatMessage({ id: 'home.actions' }),
      content: '',
      img: data.idx6,
      link: 'https://www.bilibili.com/video/BV1nG411V77M/',
    },
  ];

  return (
    <div className="full-page">
      <div className="head-section-container">
        <div className="image-head-section">
          <img src={data.headpic} />
        </div>
        <div className="text-head-section">
          <h1>{intl.formatMessage({ id: 'home.title' })}</h1>
          <p>{intl.formatMessage({ id: 'home.description' })}</p>
          <Box
            sx={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '10px',
              flexDirection: {
                xxs: 'column',
                xs: 'column',
                sm: 'row',
                md: 'row',
              },
            }}
          >
            <Button>
              <Link to="/us/will">
                <b>{intl.formatMessage({ id: 'home.button.learn' })}</b>
              </Link>
            </Button>
            <Button
              style={{
                marginLeft: '-10px',
              }}
              type="text"
              icon={<CaretRightOutlined />}
              className="responsive-button"
            >
              <Link to="/support/month" style={{ color: 'inherit' }}>
                <b>{intl.formatMessage({ id: 'home.support' })}</b>
              </Link>
            </Button>
          </Box>
        </div>
      </div>
      <div className="project-section-container">
        <div className="project-section-title">
          <h2>{intl.formatMessage({ id: 'home.sub1' })}</h2>
        </div>
        <Grid
          container
          spacing={2}
          sx={{
            height: '100%',
            padding: {
              xs: '20px',
              sm: '20px',
              md: '30px',
              lg: '30px',
            },
          }}
        >
          {project_data.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                lg={3}
                sx={{ width: '100%', height: '100%' }}
                key={index}
              >
                <Card
                  sx={{
                    display: {
                      xs: item.phone,
                      md: 'flex',
                    },
                    flexDirection: {
                      xs: index % 2 === 0 ? 'row' : 'row-reverse',
                      md: 'column',
                    },
                    backgroundColor: '#8bc34a',
                    height: '100%',
                  }}
                >
                  <CardActionArea
                    href={item.link}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: {
                        xs: index % 2 === 0 ? 'row' : 'row-reverse',
                        md: 'column',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={item.img}
                      title={item.title}
                      sx={{
                        width: {
                          xs: '50%',
                          md: '100%',
                        },
                        minHeight: { xs: '300px', md: '400px', lg: '450px' },
                      }}
                    />
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        padding: {
                          xs: '15px',
                          md: '20px',
                        },
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: {
                          xs: '50%',
                          md: '100%',
                        },
                        minHeight: '100px',
                      }}
                    >
                      <Typography
                        variant="h6"
                        component="div"
                        sx={{
                          fontSize: {
                            xs: '15px',
                            md: '15px',
                          },
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="div"
                        sx={{
                          display: {
                            xs: 'block',
                            md: 'none',
                          },
                          color: 'white',
                          fontSize: {
                            xs: '12px',
                            md: '14px',
                          },
                          marginTop: '10px',
                        }}
                      >
                        {item.sub} {/* Add a subtitle if needed */}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div className="project-section-container">
        <div className="project-section-title">
          <h3>{intl.formatMessage({ id: 'home.sub2' })}</h3>
        </div>
        <Grid
          container
          spacing={{
            xs: 0,
            sm: 0,
            md: 2,
            lg: 2,
          }}
          sx={{
            height: '100%',
            padding: {
              xs: '20px',
              sm: '20px',
              md: '30px',
              lg: '30px',
            },
          }}
        >
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            sx={{ width: '100%', height: '100%' }}
            key={0}
            marginBottom={2}
          >
            <Card
              sx={{
                backgroundColor: '#8bc34a',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardActionArea href={story_data[0].link} sx={{ height: '100%' }}>
                <CardMedia
                  sx={{
                    height: { xs: '300px', md: '400px', lg: '450px' },
                    objectFit: 'cover',
                  }}
                  image={story_data[0].img}
                  title={story_data[0].title}
                />
                <CardContent
                  sx={{
                    height: '100px',
                    padding: {
                      xs: '15px',
                      md: '15px',
                      lg: '20px',
                    },
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    {story_data[0].title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            sx={{ width: '100%', height: '100%' }}
            key={1}
          >
            <Card
              sx={{
                backgroundColor: '#8bc34a',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardActionArea href={story_data[1].link} sx={{ height: '100%' }}>
                <CardMedia
                  sx={{
                    height: { xs: '300px', md: '400px', lg: '450px' },
                    objectFit: 'cover',
                  }}
                  image={story_data[1].img}
                  title={story_data[1].title}
                />
                <CardContent
                  sx={{
                    height: '100px',
                    padding: {
                      xs: '15px',
                      md: '15px',
                      lg: '20px',
                    },
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    {story_data[1].title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            sx={{ width: '100%', height: '100%' }}
            key={2}
          >
            <Card
              sx={{
                backgroundColor: '#8bc34a',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardActionArea href={story_data[2].link} sx={{ height: '100%' }}>
                <CardMedia
                  sx={{
                    height: { xs: '300px', md: '400px', lg: '450px' },
                    objectFit: 'cover',
                  }}
                  image={story_data[2].img}
                  title={story_data[2].title}
                />
                <CardContent
                  sx={{
                    height: '100px',
                    padding: {
                      xs: '15px',
                      md: '15px',
                      lg: '20px',
                    },
                    flexGrow: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: 'white',
                      fontSize: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    {story_data[2].title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Index;
