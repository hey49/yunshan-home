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
        { path: '/report', component: '@/pages/report/index' },
        {
          path: '/us',
          routes: [
            { path: '/us/council', component: '@/pages/us/council/index' },
            { path: '/us/team', component: '@/pages/us/team/index' },
            { path: '/us/timeline', component: '@/pages/us/timeline/index' },
            { path: '/us/partner', component: '@/pages/us/partner/index' },
            { path: '/us/contact', component: '@/pages/us/contact/index' },
          ],
        },
        { path: '/donate', component: '@/pages/donate/index' },
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
