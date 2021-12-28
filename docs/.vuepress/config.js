module.exports = {
  title: "Younglina冲冲冲", //页面加载中显示的标题
  description: "Younglina要加油", //页面加载中显示的描述
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
    logo: "/cat.jpeg", //导航栏左侧头像
    authorAvatar: '/avatar.png',
    // 项目开始时间，只填写年份
    startYear: '2021',
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        items: [
          { text: "Vue3配置", link: "/write/docs/Vue3Config" },
          { text: "搭建vuepress", link: "/write/docs/vuepressConfig" },
        ],
      },
      {
        text: "源码阅读",
        items: [
          {
            text: "ElemetUI make new",
            link: "/write/sourceRead/element-make-new",
          },
          { text: "包管理器only-allow", link: "/write/sourceRead/only-allow" },
        ],
      },
      {
        text: "项目",
        items: [
          {
            text: "electron仿网易云音乐桌面版",
            link: "/write/project/electron-cloud-music",
          },
          {
            text: "trao开发微信小程序",
            link: "/write/project/my-trao",
          },
          {
            text: "mpvue仿网易云音乐",
            link: "/write/project/wx-cloud-music",
          },
        ],
      },
      // {
      //   text: "Younglina",
      //   items: [
      //     { text: "Github", link: "https://github.com/Younglina" },
      //     { text: "gitee", icon:'reco-mayun',link: "https://gitee.com/Younglina" },
      //     { text: "掘金", link: "https://juejin.cn/user/817692381290190" },
      //   ],
      // },
    ],
    sidebar: {
      "/write/docs/": [
        {
          title: "文档",
          collapsable: false,
          children: [
            {
              text: "Vue3配置",
              title: "Vue3配置",
              path: "Vue3Config",
            },
            {
              text: "搭建vuepress",
              title: "搭建vuepress",
              path: "vuepressConfig",
            },
          ],
        },
      ],
      "/write/sourceRead/": [
        {
          title: "源码阅读",
          collapsable: false,
          children: [
            {
              text: "ElemetUI make new",
              title: "ElemetUI make new",
              path: "element-make-new",
            },
            {
              text: "包管理器only-allow",
              title: "包管理器only-allow",
              path: "only-allow",
            },
          ],
        },
      ],
      "/write/project/": [
        {
          title: "项目",
          path: "/",
          collapsable: false,
          children: [
            {
              title: "electron仿网易云音乐桌面版",
              text: "electron仿网易云音乐桌面版",
              path: "electron-cloud-music",
              collapsable: false,
            },
            {
              title: "trao开发微信小程序",
              text: "trao开发微信小程序",
              path: "my-trao",
              collapsable: false,
            },
            {
              title: "mpvue仿网易云音乐",
              text: "mpvue仿网易云音乐",
              path: "wx-cloud-music",
              collapsable: false,
            },
          ],
        },
      ],
    },
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: '标签'      // 默认文案 “标签”
      },
      socialLinks: [     // 信息栏展示社交信息
        { text: "github", icon:'reco-github',link: "https://github.com/Younglina" },
        { text: "gitee", icon:'reco-mayun',link: "https://gitee.com/Younglina" },
        { text: "juejin", icon:'reco-juejin',link: "https://juejin.cn/user/817692381290190" },
      ]
    }
  },
  //百度统计
  head:[
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
  ],
};
