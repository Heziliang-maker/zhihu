<template>
  <div class="container-fluid">
    <router-view />
  </div>
</template>

<script  lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";

const testData: ColumnProps[] = [
    {
        id: 1,
        title: "test1的专栏",
        description: "这是test1的专栏,有一段非常有意思的简介,可以更新一下哦",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vZL7CjxvP8sAx4om8iYJ3nF0f3QzTWRBzw&usqp=CAU"
    },
    {
        id: 2,
        title: "test2的专栏",
        description: "这是test2的专栏,有一段非常有意思的简介,可以更新一下哦",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2vZL7CjxvP8sAx4om8iYJ3nF0f3QzTWRBzw&usqp=CAU"
    }
];
export default defineComponent({
    name: "App",
    components: { ColumnList },
    setup() {
        return {
            list: testData
        };
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
