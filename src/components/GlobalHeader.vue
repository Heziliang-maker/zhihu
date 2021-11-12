<!--
 * @Date: 2021-11-12
 * @Description: 
-->

<template>
  <div>
    <h1>GlLOBAL HEADER</h1>
  </div>
</template>

<script setup lang='ts'>
import { defineProps } from "vue";
interface UserInfo {
    name: string;
    sex: "male" | "female";
    age: number;
}
const props = defineProps<{
    userInfo: UserInfo;
}>();
console.log("props.userInfo=>", props.userInfo);
</script>

<style lang="scss" scoped>
</style>