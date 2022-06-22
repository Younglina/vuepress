---
title: 11.盛水最多的容器
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
**[11. 盛最多水的容器](https://leetcode-cn.com/problems/container-with-most-water/)**   
在一个 m*n 的二维字符串数组中输出二叉树，并遵守以下规则：  

行数 m 应当等于给定二叉树的高度。  
列数 n 应当总是奇数。  
根节点的值（以字符串格式给出）应当放在可放置的第一行正中间。根节点所在的行与列会将剩余空间划分为两部分（左下部分和右下部分）。你应该将左子树输出在左下部分，右子树输出在右下部分。左下和右下部分应  当有相同的大小。即使一个子树为空而另一个非空，你不需要为空的子树输出任何东西，但仍需要为另一个子树留出足够的空间。然而，如果两个子树都为空则不需要为它们留出任何空间。  
每个未使用的空间应包含一个空的字符串""。  
使用相同的规则输出子树。  

![](https://raw.githubusercontent.com/Younglina/images/master/leetcode11.png)

### 示例 1：
```
输入:  
     1  
    /  
   2  
输出:  
[["", "1", ""],  
 ["2", "", ""]]  
```

### 示例 2：
```
输入:  
     1  
    / \  
   2   3  
    \  
     4  
输出:  
[["", "", "", "1", "", "", ""],  
 ["", "2", "", "", "", "3", ""],  
 ["", "", "4", "", "", "", ""]]  
```

### 示例 3：
```
输入：height = [4,3,2,1,4]
输出：16
```

### 示例 4：
```
输入:   
      1   
     / \  
    2   5  
   /   
  3   
 /   
4   
输出:  
[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]  
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]  
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]  
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]  
```

:::tip 提示
注意: 二叉树的高度在范围 [1, 10] 中。
:::

## 思路

## 题解
```javascript
var printTree = function(root) {
    let d = maxDepth(root)
    let len = Math.pow(2,d)-1,
    res = Array.from({length: d},()=>Array.from({length:len},()=>""))
    let dfs = (node, start, end, level) => {
        if(!node) return
        let idx = Math.floor((start+end)/2)
        res[level][idx] = ''+node.val
        dfs(node.left,start,idx-1,level+1)
        dfs(node.right,idx+1,end,level+1)
    }
    dfs(root,0,len,0)
    return res
};
let maxDepth = (root) => {
    if(!root) return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}
```