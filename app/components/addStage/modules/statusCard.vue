<template>
  <v-card class="border rounded-lg" elevation="0">
    <div
      class="d-flex align-center justify-space-between px-5 py-2 text-white"
      :style="{ backgroundColor: item.color }"
    >
      <h4>STATUS - 0{{ id + 1 }}</h4>
      <div class="px-2 rounded text-caption">
        color: {{ item.color }}
      </div>
    </div>

    <v-row class="pa-3">
      <v-col cols="6" md="4" class="text-center">
        <div>{{ item.statusLabel }}</div>
        <div class="text-caption text-grey">Status label</div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <div>{{ item.statusKey }}</div>
        <div class="text-caption text-grey">Status Key</div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <div>{{ item.statusType }}</div>
        <div class="text-caption text-grey">Status Type</div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <div>{{ item.nextStage }}</div>
        <div class="text-caption text-grey">Next Stage</div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <div>{{ item.actionType }}</div>
        <div class="text-caption text-grey">Action Type</div>
        <v-divider></v-divider>
      </v-col>
      <v-col cols="6" md="4" class="text-center">
        <div>{{ item.requiresComment }}</div>
        <div class="text-caption text-grey">Requires Comment</div>
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <v-card-actions>
      <div class="d-flex ga-3 align-center justify-end w-100 px-3">
        <v-btn size="small" variant="outlined"  @click="editStatus(id)">
          <component :is="Pencil" size="20" />
        </v-btn>

        <v-btn
          size="small"
          color="error"
          variant="outlined"
          @click="deleteStatus(id)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>
<script setup>
import { Trash, Pencil } from "lucide-vue-next";
import { addStatusStore } from "~/store/addStatus";
const statusStore = addStatusStore();
const { removeStatus } = statusStore;
const { item, id } = defineProps({
  item: {
    type: Object,
    default: {},
  },
  id: {
    type: Number,
    default: 0,
  },
});

const deleteStatus = (id) => {
  removeStatus(id);
};
</script>
