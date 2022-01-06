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
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        items: [
          { text: "Vue3配置", link: "/write/docs/Vue3Config" },
          { text: "搭建vuepress", link: "/write/docs/VuepressConfig" },
          { text: "代码规范格式化配置", link: "/write/docs/codeFormat" },
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
      {
        text: "算法学习",
        items: [
          {
            text: "03.无重复字符的最长子串",
            link: "/write/algorithms/leetCode03",
          },
          {
            text: "11.盛水最多的容器",
            link: "/write/algorithms/leetCode11",
          },
          {
            text: "15.三数之和",
            link: "/write/algorithms/leetCode15",
          },
          {
            text: "19.删除链表的倒数第 N 个结点",
            link: "/write/algorithms/leetCode19",
          },
          {
            text: "26.删除有序数组中的重复项",
            link: "/write/algorithms/leetCode26",
          },
          {
            text: "27.移除元素",
            link: "/write/algorithms/leetCode27",
          },
          {
            text: "88.合并两个有序数组",
            link: "/write/algorithms/leetCode88",
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
              path: "VuepressConfig",
            },
            {
              text: "代码规范格式化配置",
              title: "代码规范格式化配置",
              path: "codeFormat",
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
      'write/algorithms/':[{
        title: "算法学习",
        path: "/",
        collapsable: false,
        items: [
          {
            text: "03.无重复字符的最长子串",
            title: "03.无重复字符的最长子串",
            path: "leetCode03",
          },
          {
            text: "11.盛水最多的容器",
            title: "11.盛水最多的容器",
            path: "leetCode11",
          },
          {
            text: "15.三数之和",
            title: "15.三数之和",
            path: "leetCode15",
          },
          {
            text: "19.删除链表的倒数第 N 个结点",
            title: "19.删除链表的倒数第 N 个结点",
            path: "leetCode19",
          },
          {
            text: "26.删除有序数组中的重复项",
            title: "26.删除有序数组中的重复项",
            path: "leetCode26",
          },
          {
            text: "27.移除元素",
            title: "27.移除元素",
            path: "leetCode27",
          },
          {
            text: "88.合并两个有序数组",
            title: "88.合并两个有序数组",
            path: "leetCode88",
          },
        ],}
    ]
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
      { rel: 'icon', herf: '/favicon.ico' }
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
