<template>
  <h3 class="text-center">Preview</h3>
  <div class="pa-2" v-for="(item, index) in addStatus" :key="item.statusKey">
    <AddStageModulesStatusCard :item="item" :id="index" />
  </div>
</template>
<script setup>
import { addStatusStore } from "~/store/addStatus";
const statusStore = addStatusStore();
const { addStatus } = storeToRefs(statusStore);
</script>
