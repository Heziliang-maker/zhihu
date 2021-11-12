<!--
 * @Date: 2021-11-12
 * @Description: 
-->
<template>
  <div class="layouts">
    <GlobalHeader :user-info="state.userInfo" />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";

import { reactive } from "@vue/reactivity";

const state = reactive({
    userInfo: {
        name: "zcx",
        age: 13,
        sex: "male"
    }
});
</script>

<style scoped>
.layouts {
    outline: 1px solid skyblue;
}
</style>