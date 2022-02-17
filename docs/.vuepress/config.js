const wyNav = require('./nav.js')
const wySidebar = require('./sidebar.js')
module.exports = {
  title: "Younglina", //页面加载中显示的标题
  description: "Younglina要加油！冲冲冲！", //页面加载中显示的描述
  // dest: "docs/public",
  base: "/younglinaBlog/", //根路径 https://younglina.github.io/younglinaBlog/
  author: "Younglina", //全局显示作者
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  markdown: {
    lineNumbers: true, //代码行数
  },
  theme: "reco",
  themeConfig: {
    type: "blog",
    sidebarDepth: 2, //子标题
    author: 'Younglina',
    showAccessNumber: true,
    subSidebar: "auto",
    logo: "/avatar.jpg", //导航栏左侧头像
    authorAvatar: '/avatar.jpg',
    // 项目开始时间，只填写年份
    startYear: '2021',
    nav: wyNav,
    sidebar: wySidebar,
    blogConfig: {
      // category: {
      //   location: 2,     // 在导航栏菜单中所占的位置，默认2
      //   text: '分类' // 默认文案 “分类”
      // },
      // tag: {
      //   location: 3,     // 在导航栏菜单中所占的位置，默认3
      //   text: '标签'      // 默认文案 “标签”
      // },
      socialLinks: [     // 信息栏展示社交信息
        { text: "github", icon: 'reco-github', link: "https://github.com/Younglina" },
        { text: "gitee", icon: 'reco-mayun', link: "https://gitee.com/Younglina" },
        { text: "juejin", icon: 'reco-juejin', link: "https://juejin.cn/user/817692381290190" },
      ]
    }
  },
  //百度统计
  head: [
    [
      'link',
      { rel: 'icon', herf: '"/younglinaBlog/favicon.ico' }
    ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?11dbf2ebf496bab00f7e2c4d37cb33f1";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    [
      "style",
      {},
      `.content__default{max-width: unset !important;}
      .markdown-body,.vssue,.vssue .vssue-new-comment .vssue-new-comment-input{font-size: 14px !important;}
      .vssue-header-powered-by{display: none}`
    ]

  ],
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang", //live2d
      {
        theme: ["blackCat", "whiteCat"],
        clean: true,
      },
    ],
    [
      "@vssue/vuepress-plugin-vssue",
      {
        platform: 'gitee',
        owner: 'Younglina',
        repo: 'younglinaBlog',
        clientId: '4e3bcb1906a476b9e1abe40c953309688c7ca38153f8e3d089b29de001b6df36',
        clientSecret: '818fcfd021439c0210fa4bc9dd547ce0944ca87180634d675a77a525814ea77a',
        autoCreateIssue: true,
      }
    ],
    [
      require('./vuepress-plugin-code-copy'),
      {
        'copybuttonText': '复制',
        'copiedButtonText': '已复制！'
      }
    ],
    // ["vuepress-plugin-nuggets-style-copy", {
    //     copyText: "复制代码",
    //     tip: {
    //         content: "复制成功"
    //     }
    // }]
  ],
};