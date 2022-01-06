---
title: 03.无重复字符的最长子串
author: Younglina
date: '2022-01-04'
showAccessNumber: true
categories:
 - 算法
tags:
 - 刷题
 - 双指针
 - 中等
---

## 题目描述
[3. 无重复字符的最长子串](https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/)  
给定一个字符串 s ，请你找出其中不含有重复字符的最长子串的长度。

### 示例 1：
```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

### 示例 2:
```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

### 示例 3:
```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

### 示例 4:
```
输入: s = ""
输出: 0
```

:::tip 提示
0 <= s.length <= 5 * 104  
s 由英文字母、数字、符号和空格组成
:::

## 思路
参考[宫水三叶](https://github.com/SharingSource/LogicStack-LeetCode/blob/main/LeetCode/1-10/3.%20%E6%97%A0%E9%87%8D%E5%A4%8D%E5%AD%97%E7%AC%A6%E7%9A%84%E6%9C%80%E9%95%BF%E5%AD%90%E4%B8%B2%EF%BC%88%E4%B8%AD%E7%AD%89%EF%BC%89.md)  
定义两个指针 `start` 和 `end`，表示当前处理到的子串是 `[start,end]`。
`[start,end]` 始终满足要求：无重复字符。
从前往后进行扫描，同时维护一个哈希表记录 `[start,end]` 中每个字符出现的次数。
遍历过程中，`end` 不断自增，将第 end 个字符在哈希表中出现的次数加一。
令 `right` 为 下标 `end` 对应的字符，当满足 `map.get(right) > 1` 时，代表此前出现过第 `end` 位对应的字符。
此时更新 `start` 的位置（使其右移），直到不满足 `map.get(right) > 1` （代表 `[start,end]` 恢复满足无重复字符的条件）。同时使用 `[start,end]` 长度更新答案。

## 题解
```javascript
var lengthOfLongestSubstring = function(s) {
    let map = {},res = 0
    for(let start = 0, end = 0; end < s.length; end++){
      let right = s[end]
      map[right] = (map[right] || 0) + 1
      while(map[right]>1){
        let left = s[start]
        map[left]--
        start++
      }
      res = Math.max(res, end-start+1)
    }
    return res
};
```
<Vssue />