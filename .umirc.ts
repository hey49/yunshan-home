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
  dynamicImport: {},
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
    title: true,
  },
  chainWebpack(config) {
    config.module
      .rule('svg-with-file')
      .test(/.pdf$/)
      .use('pdf-with-file-loader')
      .loader('file-loader');
    config.module
      .rule('media')
      .test(/\.(mp3|4)$/)
      .use('file-loader')
      .loader(require.resolve('file-loader'));
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
            {
              path: '/protect/archive',
              component: '@/pages/protect/archive/index',
            },
            {
              path: '/protect/knowledge',
              component: '@/pages/protect/knowledge/index',
            },
            {
              path: '/protect/tianxing',
              component: '@/pages/protect/tianxing/index',
            },
            {
              path: '/protect/concolor',
              component: '@/pages/protect/concolor/index',
            },
            {
              path: '/protect/investigate',
              component: '@/pages/protect/investigate/index',
            },
          ],
        },
        {
          path: '/programs',
          routes: [
            {
              path: '/programs/investigation/empower',
              component: '@/pages/programs/investigation/empower/index',
            },
            {
              path: '/programs/investigation/population',
              component: '@/pages/programs/investigation/population/index',
            },
            {
              path: '/programs/investigation/habitat',
              component: '@/pages/programs/investigation/habitat/index',
            },
            {
              path: '/programs/investigation/gene',
              component: '@/pages/programs/investigation/gene/index',
            },
            {
              path: '/programs/investigation/cloud',
              component: '@/pages/programs/investigation/cloud/index',
            },
            {
              path: '/programs/investigation/canteen',
              component: '@/pages/programs/investigation/canteen/index',
            },
            {
              path: '/programs/community/surround',
              component: '@/pages/programs/community/surround/index',
            },
            {
              path: '/programs/community/education',
              component: '@/pages/programs/community/education/index',
            },
            {
              path: '/programs/community/yingjiang',
              component: '@/pages/programs/community/yingjiang/index',
            },
            {
              path: '/programs/community/lishu',
              component: '@/pages/programs/community/lishu/index',
            },
            {
              path: '/programs/habitat/qingshan',
              component: '@/pages/programs/habitat/qingshan/index',
            },
          ],
        },

        {
          path: '/news',
          routes: [
            {
              path: '/news/public/gibbonday',
              component: '@/pages/news/public/gibbonday',
            },
            {
              path: '/news/public/illegal',
              component: '@/pages/news/public/illegal',
            },
            {
              path: '/news/public/participation',
              component: '@/pages/news/public/participation',
            },
            {
              path: '/news/public/content',
              component: '@/pages/news/public/content',
            },
            { path: '/news/media', component: '@/pages/news/media' },
          ],
        },
        {
          path: '/us',
          routes: [
            { path: '/us/council', component: '@/pages/us/council/index' },
            { path: '/us/team', component: '@/pages/us/team/index' },
            { path: '/us/report', component: '@/pages/report/index' },
            { path: '/us/timeline', component: '@/pages/us/timeline/index' },
            { path: '/us/partner', component: '@/pages/us/partner/index' },
            { path: '/us/contact', component: '@/pages/us/contact/index' },
          ],
        },
        {
          path: '/donate',
          routes: [
            { path: '/donate/month', component: '@/pages/donate/index' },
          ],
        },
        // legacy
        { path: '/gibbon-archives1.html', redirect: '/protect/archive?id=0' },
        { path: '/gibbon-archives2.html', redirect: '/protect/archive?id=1' },
        { path: '/gibbon-archives3.html', redirect: '/protect/archive?id=2' },
        { path: '/gibbon-archives4.html', redirect: '/protect/archive?id=3' },
        { path: '/gibbon-archives5.html', redirect: '/protect/archive?id=4' },
        { path: '/gibbon-archives6.html', redirect: '/protect/archive?id=5' },
      ],
    },
  ],
});
