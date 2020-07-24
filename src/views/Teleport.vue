<template>
    <div class="confirm-modal">
        <button @click="isOpen = true">打开{{isOpen}}</button>
        <!-- 注意这一块代码 -->
        <Teleport to="#foot-container" >
            <div v-if="isOpen" class="footZegai"></div>
            <div v-if="isOpen" class="footMain">
              <p>底部信息底部信息底部信息底部信息底部信息底部信息</p>
              <button @click="isOpen = false">取消</button>
            </div>
        </Teleport>
    </div>
    
    
    </template>
    
    <script>
    import {ref} from 'vue'
    export default {
        setup(){
            const isOpen = ref(false)
    
            return {isOpen}
        }
    }
    </script>
    <style scoped >
.footMain{
    position: fixed;
    width: 600px;
    height: 250px;
    background-color: #fff;
    top: 35%;
    left: 35%;
    z-index: 20;
}
.footZegai{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0,0.5);
    top: 0;
    left: 0;
    z-index: 10;
}
    </style>