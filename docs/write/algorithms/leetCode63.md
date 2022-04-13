---
title: 63.不同路径II
author: Younglina
date: '2022-04-13'
showAccessNumber: true
categories:
 - 算法
tags:
 - 刷题
 - 动态规划
 - 中等
---

## 题目描述

**[63.不同路径II](https://leetcode-cn.com/problems/unique-paths-ii/)**  
一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。  
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish”）。  
现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？  
网格中的障碍物和空位置分别用 1 和 0 来表示。  

### 示例 1：
<div class="path-table">

| 🤖️（start）  |      |      |      |      |      |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |      |   🏔   |      |      |      |
|      |      |      |      |      |      |  ✨（Finish）   |

</div>

```
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]  
输出：2  
解释：3x3 网格的正中间有一个障碍物。  
从左上角到右下角一共有 2 条不同的路径：  
1. 向右 -> 向右 -> 向下 -> 向下  
2. 向下 -> 向下 -> 向右 -> 向右  
```

### 示例 2：
<div class="path-table">

| 🤖️  |   🏔   |
| ---- | ---- |
|      |   ✨   |

</div>

```
输入：obstacleGrid = [[0,1],[0,0]]  
输出：1  
```

:::tip 提示
m == obstacleGrid.length  
n == obstacleGrid[i].length  
1 <= m, n <= 100  
obstacleGrid[i][j] 为 0 或 1  
:::

## 思路
动态规划：
<div class="path-table">

| dp[0][0] |      |      |      |      |      |      |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|      |      |   🏔(1)   |      |      |                |  dp[i-1][j]    |
|      |      |      |      |      |  dp[i][j-1]    |  dp[i][j]   |

</div>

与上一题总体思想是一样的，只是要在初始化和对`dp[i][j]`赋值的时候，判断当前位置是否是障碍物
1. 确定 `dp[i][j]` 为从`[0, 0]`到`[i, j]`有`dp[i][j]`条不同的路径  
2. 因为机器人只能`向右`或`向下`走，所以能到达`dp[i][j]`的只有`dp[i-1][j]`和`dp[i][j-1]`两条路径，
推出状态转移方程为`dp[i][j]=dp[i-1][j]+dp[i][j-1]`
3. 初始化`dp`，因为第一行和第一列只有一种方式能到达，所以可以将第一行和第一列初始化为1，
这时候出现不同，因为障碍物可能存在于第一行和第一列，所以在障碍物之后的位置都应该是`0`
4. 在给`dp[i][j]`赋值的时候，要判断当前位置是否是障碍物，即判断当前位置是否等于`1`，如果是，则赋值为`0`

<div class="path-table">

| dp[0][0] |   1   |   1   |   🏔 (1)=0  |   0   |   0   |   0   |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|   1   |   2   |   🏔(1)=0   |      |      |                |  dp[i-1][j]    |
|   1   |      |      |      |      |  dp[i][j-1]    |  dp[i][j]   |

</div>

5. 依次遍历行、列求出数据最后返回`dp[i][j]`即可

<div class="path-table">

| dp[0][0] |   1⬇️   |   1   |   🏔 (1)=0  |   0   |   0   |   0   |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- |
|   1➡️   |   2   |   🏔(1)=0   |   0   |   0   |       0         |  dp[i-1][j] = 0   |
|   1   |   3   |   3   |    3  |   3   |  dp[i][j-1] = 3   |  dp[i][j] = 3  |

</div>

## 题解
```javascript
var uniquePathsWithObstacles = function(dp) {
    let m = dp.length,n=dp[0].length
    for(let i =0;i<m;i++){
        if(i>0 && dp[i-1][0]===0){
            dp[i][0] = 0
        }else{
            dp[i][0] = ~~!dp[i][0]
        }
    }
    for(let j=1;j<n;j++){
        if(j>0 && dp[0][j-1]===0){
            dp[0][j] = 0
        }else{
            dp[0][j] = ~~!dp[0][j]
        }
    }

    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            if(dp[i][j]===1) {
                dp[i][j] = 0
            }else{
                dp[i][j] = dp[i-1][j]+dp[i][j-1]
            }
        }
    }
    return dp[m-1][n-1]
};
```

## 优化
```
[
    [0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0]
]
```

于之前想法一致，就是需要在循环中判断二维数组当前位置是否是障碍物，如果是，则赋值为0

```
第一次 [1, 1     , 1            , 0(dp[0][3]=1)      , 0         , 0      , 0     ]
第二次 [1, 2(1+1), 0(dp[1][2]=1), 0                  , 0         , 0      , 0     ] 
第三次 [1, 3(2+1), 3(3+0)        , 3(3+0)            , 3(3+0)    , 3(3+0) , 3(3+0)]  
```

```javascript
const uniquePaths = function(dp){
    //初始化长度为n的一维数组
    let dpArr = Array(n).fill(0)
    dpArr[0] = 1
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(dp[i][j]===1){
                dpArr[j] = 0
            }else if(j > 0){
                //当前位置=上一次的当前位置+当前位置前一列位置
                dpArr[j] += dpArr[j-1]
            }
        }
    }
    return dpArr[n-1]
}
```

<style>
.path-table tr,.path-table td{
width: 80px;
height: 80px;
text-align: center;
}
.path-table tr:nth-child(2n){
    background-color: unset;
}
</style>