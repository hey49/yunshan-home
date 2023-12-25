import React, { useState } from 'react';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import { Link, useIntl, history, setLocale, SelectLang, getLocale } from 'umi';
import logo from '../public/logo.jpeg';
import { Button } from 'antd';
import { WeiboOutlined, WechatOutlined, MailOutlined } from '@ant-design/icons';
import BasicAnchor from './anchor';
import './basicLayout.less';

const BasicLayout: React.FC = props => {
  const intl = useIntl();
  const [pathname, setPathname] = useState(props.location.pathname);

  const changeLocales = () => {
    const locales = getLocale();
    if (locales === 'zh-CN') {
      setLocale('en-US');
    }
    if (locales === 'en-US') {
      setLocale('zh-CN');
    }
  };

  const localesBtn = () => {
    switch (getLocale()) {
      case 'zh-CN':
        return 'EN';
      case 'en-US':
        return '中';
    }
  };

  const routesProps = {
    route: {
      path: '/',
      routes: [
        {
          path: '/protect',
          name: intl.formatMessage({ id: 'menu.protect' }),
          routes: [
            {
              path: '/protect/archive',
              name: intl.formatMessage({ id: 'menu.protect.archive' }),
            },
            // todo
            // {
            //   path: '/protect/others',
            //   name: intl.formatMessage({ id: 'menu.protect.others' }),
            // },
            {
              path: '/protect/knowledge',
              name: intl.formatMessage({ id: 'menu.protect.knowledge' }),
            },
          ],
        },
        {
          path: '/programs',
          name: intl.formatMessage({ id: 'menu.programs' }),
          routes: [
            {
              path: '/programs/investigation',
              name: intl.formatMessage({ id: 'menu.programs.investigation' }),
              routes: [
                {
                  path: '/programs/investigation/empower',
                  name: intl.formatMessage({
                    id: 'menu.programs.investigation.empower',
                  }),
                },
                {
                  path: '/programs/investigation/population',
                  name: intl.formatMessage({
                    id: 'menu.programs.investigation.population',
                  }),
                },
                {
                  path: '/programs/investigation/habitat',
                  name: intl.formatMessage({
                    id: 'menu.programs.investigation.habitat',
                  }),
                },
                {
                  path: '/programs/investigation/gene',
                  name: intl.formatMessage({
                    id: 'menu.programs.investigation.gene',
                  }),
                },
                {
                  path: '/programs/investigation/cloud',
                  name: intl.formatMessage({
                    id: 'menu.programs.investigation.cloud',
                  }),
                },
                {
                  path: '/programs/investigation/canteen',
                  name: intl.formatMessage({
                    id: 'menu.programs.investigation.canteen',
                  }),
                },
              ],
            },
            {
              path: '/programs/community',
              name: intl.formatMessage({ id: 'menu.programs.community' }),
              routes: [
                {
                  path: '/programs/community/surround',
                  name: intl.formatMessage({
                    id: 'menu.programs.community.surround',
                  }),
                },
                {
                  path: '/programs/community/education',
                  name: intl.formatMessage({
                    id: 'menu.programs.community.education',
                  }),
                },
                {
                  path: '/programs/community/yingjiang',
                  name: intl.formatMessage({
                    id: 'menu.programs.community.yingjiang',
                  }),
                },
                {
                  path: '/programs/community/lishu',
                  name: intl.formatMessage({
                    id: 'menu.programs.community.lishu',
                  }),
                },
              ],
            },
            {
              path: '/programs/habitat',
              name: intl.formatMessage({ id: 'menu.programs.habitat' }),
              routes: [
                {
                  path: '/programs/habitat/qingshan',
                  name: intl.formatMessage({
                    id: 'menu.programs.habitat.qingshan',
                  }),
                },
              ],
            },
          ],
        },
        {
          path: '/us',
          name: intl.formatMessage({ id: 'menu.us' }),
          routes: [
            {
              path: '/us/will',
              name: "使命愿景"
            },
            {
              path: '/us/council',
              name: intl.formatMessage({ id: 'menu.us.council' }),
            },
            {
              path: '/us/team',
              name: intl.formatMessage({ id: 'menu.us.team' }),
            },
            {
              path: '/us/report',
              name: intl.formatMessage({ id: 'menu.us.report' }),
            },
            {
              path: '/us/timeline',
              name: intl.formatMessage({ id: 'menu.us.timeline' }),
            },
            {
              path: '/us/partner',
              name: intl.formatMessage({ id: 'menu.us.partner' }),
            },
            {
              path: '/us/contact',
              name: intl.formatMessage({ id: 'menu.us.contact' }),
            },
          ],
        },
        {
          path: '/news',
          name: intl.formatMessage({ id: 'menu.news' }),
          routes: [

            {
              path: '/news/gibbonday',
              name: intl.formatMessage({
                id: 'menu.news.public.gibbonday',
              }),
            },
            {
              path: '/news/illegal',
              name: intl.formatMessage({ id: 'menu.news.public.illegal' }),
            },
            {
              path: '/news/participation',
              name: intl.formatMessage({
                id: 'menu.news.public.participation',
              }),
            },
            {
              path: '/news/content',
              name: intl.formatMessage({ id: 'menu.news.public.content' }),
            },
            {
              path: '/news/media',
              name: intl.formatMessage({ id: 'menu.news.media' }),
            },
          ],
        },
        {
          path: '/support',
          name: intl.formatMessage({ id: 'menu.support' }),
          routes: [
            {
              path: '/support/month',
              name: intl.formatMessage({ id: 'menu.support.month' }),
            },
            // {
            //   path: '/support/intern',
            //   name: intl.formatMessage({ id: 'menu.support.intern' }),
            // },
          ],
        },
      ],
    },
  };

  return (
    <ProLayout
      {...props}
      {...routesProps}
      layout="topmenu"
      navTheme="light"
      title="云山保护"
      logo={logo}
      onMenuHeaderClick={() => history.push('/')}
      location={{
        pathname,
      }}
      menuItemRender={(item, dom) => (
        <Link
          to={item.path}
          onClick={() => {
            setPathname(item.path || '/');
          }}
        >
          {dom}
        </Link>
      )}
      menuHeaderRender={(logo, title) => (
        <Link
          to="/"
          onClick={() => {
            setPathname('/');
          }}
        >
          <div style={{ marginLeft: '1rem' }}>{logo}</div>
        </Link>
      )}
      rightContentRender={() => (
        <Button
          onClick={changeLocales}
          type="dashed"
          style={{ marginRight: '1rem' }}
        >
          {localesBtn()}
        </Button>
      )}
      footerRender={() => {
        return (
          <DefaultFooter
            copyright={`${new Date().getFullYear()} 大理白族自治州\n云山生物多样性保护与研究中心`}
            links={[
              {
                key: 'yunshan',
                title: '云山保护',
                href: 'http://www.cloudmountain.cn/',
                blankTarget: true,
              },
              {
                key: 'mail',
                title: <MailOutlined />,
                href: 'mailto:info@cloudmountain.cn',
              },
            ]}
          />
        );
      }}
    >
      {props.children}
      <BasicAnchor></BasicAnchor>
    </ProLayout>
  );
};

export default BasicLayout;
