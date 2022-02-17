---
title: '模拟 3.2 渲染器'
author: Younglina
date: '2022-02-17'
categories:
 - 阅读
tags:
 - vue设计与实现读书记录
---
<div id="render"></div>

<script>
  export default {
    mounted(){
      const MyComponet = {
          render: () => {
            return {
              tag: 'div',
              props: {
                onClick: () => { alert('asdf') }
              },
              children: [{
                tag: 'span',
                children: 'hello'
              }]
            }
          }
        }
      const node = {
        tag: MyComponet
      }

      this.render(node, document.querySelector('#render'))
    },
    methods: {
      render(vnode, container) {
        if (typeof vnode.tag === 'string') {
          this.mountElement(vnode, container)
        } else if (typeof vnode.tag === 'object') {
          this.mountComponent(vnode, container)
        }
      },

      mountElement(vnode, container) {
        const el = document.createElement(vnode.tag)
        for(const key in vnode.props){
          if(/^on/.test(key)){
            el.addEventListener(
              key.substring(2).toLowerCase(),
              vnode.props[key]
            )
          }
        }
        if (typeof vnode.children === 'string') {
          el.appendChild(document.createTextNode(vnode.children))
        } else {
          vnode.children.forEach(child => this.render(child, el));
        }
        container.appendChild(el)
      },
      mountComponent(vnode, container) {
        const el = vnode.tag.render()
        this.render(el, container)
      }
    }
  }
</script>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <div id="render"></div>
</body>
<script>
  function render(vnode, container) {
    if (typeof vnode.tag === 'string') {
      mountElement(vnode, container)
    } else if (typeof vnode.tag === 'object') {
      mountComponent(vnode, container)
    }
  }

  function mountElement(vnode, container) {
    const el = document.createElement(vnode.tag)
    for(const key in vnode.props){
      if(/^on/.test(key)){
        el.addEventListener(
          key.substring(2).toLowerCase(),
          vnode.props[key]
        )
      }
    }
    if (typeof vnode.children === 'string') {
      el.appendChild(document.createTextNode(vnode.children))
    } else {
      vnode.children.forEach(child => render(child, el));
    }
    container.appendChild(el)
  }

  function mountComponent(vnode, container) {
    const el = vnode.tag.render()
    render(el, container)
  }

  const MyComponet = {
    render: () => {
      return {
        tag: 'div',
        props: {
          onClick: () => { alert('asdf') }
        },
        children: [{
          tag: 'span',
          children: 'hello'
        }]
      }
    }
  }
  const node = {
    tag: MyComponet
  }

  render(node, document.querySelector('#render'))
</script>

</html>
```