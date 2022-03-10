const wyNav = require('./nav.js')
const wySidebar = require('./sidebar.js')
module.exports = {
  title: "Younglina", //页面加载中显示的标题
  description: "Younglina要加油！冲冲冲！", //页面加载中显示的描述
  // dest: "docs/public",
  // base: "/younglinaBlog/", //根路径 https://younglina.github.io/younglinaBlog/
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
    sidebarDepth: 2, //
    lastUpdated: '上次更新',
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
  head: [
    ['meta', { name: 'keywords', content: 'Younglina,younglina,算法,vuepress,博客' }],
    ['meta', { name: 'author', content: 'Younglina' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-qO24creHLS' }],
    [
      'link',
      { rel: 'icon', herf: '"/younglinaBlog/favicon.ico' }
    ],
    //百度统计
    [
      "script",
      {},
      `
      <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?353277c226a3c149b9619fba591d66ea";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        </script>
      `
    ],
    [
      "script",
      {},
      `
      <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?2866f59a01d41a3c6b024f3152e7403e";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      </script>
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
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          return new Date(timestamp).toLocaleDateString();
        }
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://younglina.top'
      },
    ],
    ['seo',
      {
        siteTitle: (_, $site) => 'Younglina blog',
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => 'Younglina',
        type: $page => 'article',
        url: (_, $site, path) => 'https://younglina.top' + path,
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
      }
    ]
    // ["vuepress-plugin-nuggets-style-copy", {
    //     copyText: "复制代码",
    //     tip: {
    //         content: "复制成功"
    //     }
    // }]
  ],
};