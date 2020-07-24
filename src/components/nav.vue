<template>
    <div id="nav">
        {{ title}}
        <br>
        <hr>
        <ul>
            <li v-for="route in routes" :key="route.path">
                <router-link :to="route.to" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
              </li>
        </ul>

    </div>

</template>

<script>
    import { ref,computed } from 'vue'
    import { useRouter } from 'vue-router'
    export default {
        name: "pageList",
        setup() {
            const title = ref("")
            title.value = "路由器"
            const routes = [
                { to: "/ref", text: "ref" },
                { to: "/reactive", text: "reactive" },
                { to: "/Fragment", text: "Fragment" },
                { to: "/Teleport", text: "Teleport" },
                { to: "/TodoMvc", text: "TodoMvc" },
                { to: "/demo6", text: "demo6" }
            ]
            const router = useRouter();
            const activeRoute = computed(() => router.currentRoute.value.path);
            const isActive = path => path === activeRoute.value
            console.log(router.currentRoute.value.path);
            
            path => path === activeRoute.value
            return {
                isActive,
                routes,
                title
            };
            
        },
    };
</script>
<style lang="less">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    .active{
        color: red;
        font-weight: 800;
    }
    #nav {
        a {
            color: #2c3e50;
            text-decoration:none;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    #nav ul{
        margin-block-start: 0;
    padding-inline-start: 0;
    }
    #nav ul li{
        list-style: none;
        width: 100%;
        padding: 10px 0;
  
    border-bottom: 1px rgb(14, 14, 11) solid;
    }
</style>