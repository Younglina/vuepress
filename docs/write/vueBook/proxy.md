---
title: '模拟 4.2 proxy'
author: Younglina
date: '2022-02-17'
categories:
 - 阅读
tags:
 - vue设计与实现读书记录
---
<div id="proxy1_0"></div>

<script>
  export default {
    mounted(){
      const bucket = new Set();
      const data = { text: 'hello world 1' }
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
        document.querySelector('#proxy1_0').innerText = obj.text
      })
      setTimeout(()=>{
        // obj.text = 'hello vue3'
        // 会导致上面的console输出两遍
        // 原因是，没有在副作用函数与被操作的目标字段之间建立明确的联系，导致只要操作了对象就会触发effect
        obj.notExist = 'hello vue3'
      },1000)
    }
  }
</script>

<div id="proxy2_0"></div>

<script>
  export default {
    mounted(){
      // WeakMap经常用于存储那些只有当key所引用的对象存在时才有价值的信息，在这里，如果当target对象没有任何引用时，
      // 表示用户侧不在需要它了，这时垃圾回收器会完成回收任务。如果是Map，target不会进行回收，最终可能导致内存溢出
      const bucket = new WeakMap()
      const data = {text: 'hello world 2'}
      let activeEffect
      function effect(fn){
        activeEffect = fn
        fn()
      }
      const obj = new Proxy(data, {
        get(target, key){
          track(target, key)
          return target[key]
        },
        set(target, key, newVal){
          target[key] = newVal
          trigger(target, key)
        }
      })

      function track(target, key){
          // 没有activeEffect直接返回
          if(!activeEffect) return;
          // 根据target从桶中获取 depsMap
          let depsMap = bucket.get(target)
          // 如果不存在，新建一个Map 并与 target 关联
          if(!depsMap){
            bucket.set(target, (depsMap = new Map()))
          }
          // 再根据key从depsMap中获取deps
          // 里面存储着与当前key相关联的所有副作用函数，effects
          let deps = depsMap.get(key)
          // 如果deps不存在，新建一个set 与 key 关联
          if(!deps){
            depsMap.set(key, (deps = new Set()))
          }
          // 最后将当前激活的副作用函数添加到"桶"里
          deps.add(activeEffect)
      }

      function trigger(target, key){
        // 根据target获取depsMap，它是 key => effects
        const depsMap = bucket.get(target)
        if(!depsMap) return
        // 根据 key 获取所有副作用函数 effects
        const effects = depsMap.get(key)
        // 执行相关副作用函数
        effects && effects.forEach(fn=>fn())
      }

      effect(()=>{
        console.log('proxy2_0 effect run')
        document.querySelector('#proxy2_0').innerText = obj.text
      })
      setTimeout(()=>{
        obj.notExist = 'hello vue3'
      },1000)
    }
  }
</script>
