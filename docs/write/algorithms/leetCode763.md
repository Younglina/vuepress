---
title: 763.划分字母区间
author: Younglina
date: '2022-07-23'
showAccessNumber: true
categories:
 - 算法
tags:
 - 刷题
 - 二分查找
 - 中等
--- 
## 题目描述
[763.划分字母区间](https://leetcode.cn/problems/partition-labels/)  
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。  

### 示例 1：
```
输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
```

:::tip 提示
S的长度在[1, 500]之间。
S只包含小写字母 'a' 到 'z' 。
:::

## 思路
遍历一次字符串，用哈希表记录一边每个字符最后出现的位置，再遍历一次字符，如果当前位置和哈希表中的位置相同，则说明当前字符后面不会再出现  

## 题解
```javascript
var partitionLabels = function(s) {
    let res = [],l=0,r=0,map={}
    for(let i=0;i<s.length;i++){
        map[s[i]] = i
    }
    for(let i=0;i<s.length;i++){
        r = Math.max(r, map[s[i]])
        if(i===r){
            res.push(r-l+1)
            l=i+1
        }
    }
    return res
};
```