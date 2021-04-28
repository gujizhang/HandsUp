import Vue from 'vue'
import List from './list'
const list = new Vue(List)
wx.cloud.init({
    traceUser: true
})


list.$mount()