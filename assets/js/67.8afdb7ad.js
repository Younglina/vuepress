(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{729:function(s,t,a){"use strict";a.r(t);var n=a(10),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"题目描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题目描述"}},[s._v("#")]),s._v(" 题目描述")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-repeating-character-replacement/",target:"_blank",rel:"noopener noreferrer"}},[s._v("424.替换后的最长重复字符"),a("OutboundLink")],1),a("br"),s._v("\n给你一个仅由大写英文字母组成的字符串，你可以将任意位置上的字符替换成另外的字符，总共可最多替换 "),a("code",[s._v("k")]),s._v(" 次。在执行上述操作后，找到包含重复字母的最长子串的长度。")]),s._v(" "),a("p",[s._v("注意：字符串长度 和 "),a("code",[s._v("k")]),s._v(" 不会超过"),a("code",[s._v("104")]),s._v("。")]),s._v(" "),a("h3",{attrs:{id:"示例-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-1"}},[s._v("#")]),s._v(" 示例 1：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("输入：s = \"ABAB\", k = 2\n输出：4\n解释：用两个'A'替换为两个'B',反之亦然。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例 2：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('输入：s = "AABABBA", k = 1\n输出：4\n解释：\n将中间的一个\'A\'替换为\'B\',字符串变为 "AABBBBA"。\n子串 "BBBB" 有最长重复字母, 答案为 4。\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("ol",[a("li",[s._v("定义"),a("code",[s._v("l")]),s._v(","),a("code",[s._v("r")]),s._v("双指针确定滑动窗口")]),s._v(" "),a("li",[s._v("移动右指针"),a("code",[s._v("r")]),s._v("，确定滑动窗口中出现最多的字母次数记为"),a("code",[s._v("max")])]),s._v(" "),a("li",[s._v("根据滑动窗口的大小"),a("code",[s._v("r-l+1")]),s._v("是否大于"),a("code",[s._v("max+k")]),s._v("，大于的话说明，在该滑动窗口中能被替换的字母已经不足，如"),a("code",[s._v("AABAB")]),s._v("，此时"),a("code",[s._v("r=4, l=0, k=1")]),s._v("，最多只能替换第一个"),a("code",[s._v("B")]),s._v("使最长重复等于4，所以此时需要移动左指针"),a("code",[s._v("l")]),s._v("重新确定滑动窗口，因为左指针移动，所以它对应的出现次数也需要减1")]),s._v(" "),a("li",[s._v("最后的结果就是滑动窗口的长度"),a("code",[s._v("r-l")])])]),s._v(" "),a("h2",{attrs:{id:"题解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题解"}},[s._v("#")]),s._v(" 题解")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("characterReplacement")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" k")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" max "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" len "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n    max "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("\n      l"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" r"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);