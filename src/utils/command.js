
import Vue from "vue";

Vue.directive('xf',{
    bind:function(el,bingind,vnode){
        // console.log('1-bind')
    },
    inserted:function(){
        // console.log('2-inserted')
    },
    update:function(){
        // console.log('3-update')
    },
    componentUpdated:function(){
        // console.log('4-componentUpdated')
    },
    unbind:function(){
        // console.log('5-unbind')
    }
})
    