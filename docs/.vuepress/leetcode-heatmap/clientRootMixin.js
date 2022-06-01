import HeatMap from './leetcode-heatmap.vue'
import Vue from 'vue'

export default {
    updated() {
        // 防止阻塞
        setTimeout(() => {
            const el = document.querySelector('.home-blog')
            const xd = document.querySelector('.home-blog-wrapper')
            // 防止重复写入
            let ComponentClass = Vue.extend(HeatMap)
            let instance = new ComponentClass()
            instance.code = el.innerText
            instance.$mount()
            el.insertBefore(instance.$el, xd)
        }, 100)
    }
}