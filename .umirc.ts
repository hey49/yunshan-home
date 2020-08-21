import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  theme: {
    '@primary-color': '#8da745',
  },
  antd: {
    // compact: true,
  },
  dva: {
    hmr: true,
  },
  dynamicImport: {

  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
    title: true,
  },
  chainWebpack(config) {
    config.module.rule('svg-with-file')
      .test(/.pdf$/)
      .use('pdf-with-file-loader')
      .loader('file-loader')
  },
  favicon: '.favicon.ico',
  routes: [
    {
      path: '/',
      component: '../layouts/basicLayout',
      routes: [
        { path: '/', component: '@/pages/index/index' },
        {
          path: '/protect',
          routes: [
            {path: '/protect/archive', component: '@/pages/protect/archive/index'}
          ]
        },
        { path: '/report', component: '@/pages/report/index' },
        {
          path: '/us',
          routes: [
            { path: '/us/council', component: '@/pages/us/council/index'},
            { path: '/us/team', component: '@/pages/us/team/index'},
            // { path: '/us/report', component: '@/pages/us/report/index'},
            { path: '/us/timeline', component: '@/pages/us/timeline/index'},
          ]
        },
        { path: '/partner', component: '@/pages/partner/index' },
        { path: '/contact', component: '@/pages/contact/index' },
      ]
    }
  ],
});
