import { defineConfig } from 'vitepress'


const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/' },
      ]
    },
    { text: '导航' },
    { text: '反馈' },
    { text: '数据录入' },
    { text: '数据展示' },
    { text: '布局' },
    // {
    //   text: 'Examples',
    //   items: [
    //     { text: 'Markdown Examples', link: '/markdown-examples' },
    //     { text: 'Runtime API Examples', link: '/api-examples' }
    //   ]
    // }
  ]
  
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Smarty UI",
  description: "Smarty UI docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
})
