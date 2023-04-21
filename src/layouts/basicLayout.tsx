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
            {
              path: '/protect/tianxing',
              name: intl.formatMessage({ id: 'menu.protect.tianxing' }),
            },
            {
              path: '/protect/concolor',
              name: intl.formatMessage({ id: 'menu.protect.concolor' }),
            },
            {
              path: '/protect/investigate',
              name: intl.formatMessage({ id: 'menu.protect.investigate' }),
            },
          ],
        },
        { path: '/report', name: intl.formatMessage({ id: 'menu.report' }) },
        {
          path: '/us',
          name: intl.formatMessage({ id: 'menu.us' }),
          routes: [
            {
              path: '/us/council',
              name: intl.formatMessage({ id: 'menu.us.council' }),
            },
            {
              path: '/us/team',
              name: intl.formatMessage({ id: 'menu.us.team' }),
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
          path: '/donate',
          name: intl.formatMessage({ id: 'menu.donate' }),
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
