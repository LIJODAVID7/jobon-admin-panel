import { defineStore } from "pinia";

export const fileRequiredStore = defineStore(
  "fileRequiredStore",
  () => {
    const fileRequired = ref([]);
    function addFileRequired(value) {
      fileRequired.value.push(value);
    }
    function removeFileRequired(index) {
      fileRequired.value.splice(index, 1);
    }

    function resetsFileRequired() {
      fileRequired.value = [];
    }
    function editFileRequired(index, newValue) {
      if (fileRequired.value[index] !== undefined) {
        fileRequired.value[index] = {
          ...fileRequired.value[index],
          ...newValue,
        };
      }
    }
    return {
      fileRequired,
      addFileRequired,
      removeFileRequired,
      resetsFileRequired,
      editFileRequired,
    };
  },

  { persist: true, storage: "localStorage" }
);
