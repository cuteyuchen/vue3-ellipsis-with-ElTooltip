<script setup lang="ts">
// import vue3EllipsisWithElTooltip from "vue3-ellipsis-with-eltooltip";
import vue3EllipsisWithElTooltip from "../packages/vue3-ellipsis-with-eltooltip.vue";
</script>

<template>
  <div style="width: 50px">
    <vue3-ellipsis-with-el-tooltip :tool-tip-props="{placement: 'left'}">测试测试测试测试测试测试测试测试测试
      <template #content>
        1111111111111111
      </template>
    </vue3-ellipsis-with-el-tooltip>
  </div>
</template>

<style scoped>

</style>
