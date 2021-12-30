module.exports = {
  dest: 'docs',
  base: '/apuntesJS/',
  title: 'Apunte sobre JS',
  description: 'Mis apuntes de JS según voy aprendiendo',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    editLinks: false,
    editLinkText: '',
    lastUpdated: false,    
    nav: [
      {
        text: 'Guía',
        link: '/',
      },     
    ],
    sidebar: [
      '/',
      '/01-Variables/'
    ]
    
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
