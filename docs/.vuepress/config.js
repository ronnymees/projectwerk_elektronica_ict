module.exports = {
  title: 'Project - Professional Bachelor Elektronica-ICT',
  description: 'Student guide for project',
  themeConfig: {
    logo: '/files/afbeelding1.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Company', link: 'https://www.vives.be' },      
      { text: 'Contact', link: 'mailto:ronny.mees@vives.be' },
    ],
    sidebarDepth: 1,
    repo: 'https://github.com/ronnymees/projectwerk_elektronica_ict',
    docsDir: 'docs',
    docsBranch: 'master',
    sidebar: [
          '/01_chapter1/',
          '/02_chapter2/',
          '/03_chapter3/',          
          '/04_chapter4/',          
          '/05_chapter5/',          
          '/06_chapter6/',                
          '/07_chapter7/',                
          '/08_chapter8/',                
          '/09_chapter9/',                
          '/10_chapter10/',                
    ]    
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      selector: 'img',
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
	  ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],    
  ],  
}
