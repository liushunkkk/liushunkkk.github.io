export const FrontendNavBar = {
  text: '前端池',
  children: [
    { text: 'JS&TS', link: '/tech/frontend/js_ts/' },
    { text: '页面&样式', link: '/tech/frontend/page_style/' },
    { text: 'React', link: '/tech/frontend/react/' },
    { text: 'Vue', link: '/tech/frontend/vue/' },
    { text: 'Vite', link: '/tech/frontend/vite/' },
    { text: 'Webpack', link: '/tech/frontend/webpack/' },
  ],
}

export const FrontendSideBar = {
  '/tech/frontend/js_ts/': [
    {
      text: 'JS&TS',
      children: [
        '/tech/frontend/js_ts/README.md',
        '/tech/frontend/js_ts/js1.md',
        '/tech/frontend/js_ts/js2.md',
        '/tech/frontend/js_ts/js3.md',
        '/tech/frontend/js_ts/js4.md',
        '/tech/frontend/js_ts/js5.md',
        '/tech/frontend/js_ts/ts1.md'
      ],
    },
  ],
  '/tech/frontend/page_style/': [
    {
      text: '页面&样式',
      children: [
        '/tech/frontend/page_style/README.md',
        '/tech/frontend/page_style/hcbase.md',
        '/tech/frontend/page_style/csstip.md',
        '/tech/frontend/page_style/less.md',
        '/tech/frontend/page_style/sass.md',
      ],
    },
  ],
  '/tech/frontend/react/': [
    {
      text: 'React',
      children: [
        '/tech/frontend/react/README.md',
        '/tech/frontend/react/new.md',
        '/tech/frontend/react/1.md',
        '/tech/frontend/react/2.md',
        '/tech/frontend/react/3.md',
        '/tech/frontend/react/4.md',
        '/tech/frontend/react/5.md',
        '/tech/frontend/react/6.md',
        '/tech/frontend/react/7.md',
        '/tech/frontend/react/8.md',
        '/tech/frontend/react/9.md',
      ],
    },
  ],
  '/tech/frontend/vue/': [
    {
      text: 'Vue',
      children: [
        '/tech/frontend/vue/README.md',
        '/tech/frontend/vue/vue2.md',
        '/tech/frontend/vue/base_tutorial.md',
        '/tech/frontend/vue/api_tutorial.md',
        '/tech/frontend/vue/vue3_1.md',
        '/tech/frontend/vue/vue3_2.md',
        '/tech/frontend/vue/pinia.md',
      ],
    },
  ],
  '/tech/frontend/vite/': [
    {
      text: 'Vite',
      children: ['/tech/frontend/vite/README.md', '/tech/frontend/vite/1.md'],
    },
  ],
  '/tech/frontend/webpack/': [
    {
      text: 'Webpack',
      children: ['/tech/frontend/webpack/README.md', '/tech/frontend/webpack/1.md'],
    },
  ],
}