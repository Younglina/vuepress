
module.exports = {
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
    'write/algorithms/': [{
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
            {
                text: "345.反转字符串中的元音字母",
                title: "345.反转字符串中的元音字母",
                path: "leetCode345",
            },
            {
                text: "413.等差数列划分",
                title: "413.等差数列划分",
                path: "leetCode413",
            },
        ],
    }
    ]
}