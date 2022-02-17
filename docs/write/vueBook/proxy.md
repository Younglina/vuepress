---
title: '模拟 4.2 proxy'
author: Younglina
date: '2022-02-17'
categories:
 - 阅读
tags:
 - vue设计与实现读书记录
---
<div id="proxy"></div>

<script>
  export default {
    mounted(){
      const bucket = new Set();
      const data = { text: 'hello world' }
      // function effect() {
      //   document.querySelector('#proxy').innerText = obj.text
      // }

      // 1.1
      let activeEffect
      function effect(fn){
        activeEffect = fn
        fn()
      }
      const obj = new Proxy(data, {
        get(target, key) {
          // bucket.add(effect)
          //1.1
          if(activeEffect){
            bucket.add(activeEffect)
          }
          return target[key]
        },
        set(target, key, newVal) {
          target[key] = newVal
          bucket.forEach(fn => fn())
          return true
        }
      })
      // effect()
      // 1.1
      effect(()=>{
        console.log('effect run')
        document.querySelector('#proxy').innerText = obj.text
      })
      setTimeout(()=>{
        // obj.text = 'hello vue3'
        obj.notExist = 'hello vue3'
      },1000)
    }
  }
</script>
