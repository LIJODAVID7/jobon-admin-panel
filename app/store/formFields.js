import { defineStore } from "pinia";

export const formStore = defineStore(
  "formStore",
  () => {
    const formFields = ref([]);

    function addFormFields(value) {
      formFields.value.push(value);
    }
    function removeFormField(index) {
      formFields.value.splice(index, 1);
    }

    function resetFormFields() {
      formFields.value = [];
    }
    function editFormField(index, newValue) {
      if (formFields.value[index] !== undefined) {
        formFields.value[index] = { ...formFields.value[index], ...newValue };
      }
    }
    function removeCurrentFormField() {
      currentFormField.value = {};
    }

    return {
      addFormFields,
      formFields,
      removeFormField,
      resetFormFields,
      editFormField,
      removeCurrentFormField,
    };
  },

  { persist: true, storage: "localStorage" }
);
