<template>
  <h3 class="text-center">Preview</h3>

  <v-row v-for="(item, index) in formFields" :key="item.fieldName">
    <v-col
      cols="12"
      v-if="item.fieldType == 'text' || item.fieldType == 'email'"
    >
      <div class="d-flex ga-3 align-center">
        <AddStageModulesTextField
          :label="item.label"
          :placeholder="item.placeholder"
          :type="item.fieldType"
          :hint="item.helpText"
          :clearable="true"
          variant="outlined"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20" />
        </v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'textarea'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesTextArea
          :label="item.label"
          :placeholder="item.placeholder"
          :type="item.fieldType"
          variant="outlined"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'select'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesSelect
          :label="item.label"
          :placeholder="item.placeholder"
          variant="outlined"
          :items="item.options"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'multiselect'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesMultiSelect
          :label="item.label"
          :placeholder="item.placeholder"
          variant="outlined"
          :items="item.options"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'checkbox'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesCheckbox :label="item.label" />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'number'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesNumberInput
          :placeholder="item.placeholder"
          :type="item.fieldType"
          :hint="item.helpText"
          :label="item.label"
          variant="outlined"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'radio'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesRadio
          :label="item.label"
          :placeholder="item.placeholder"
          variant="outlined"
          :items="item.options"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
    <v-col cols="12" v-if="item.fieldType == 'date'">
      <div class="d-flex ga-3 align-center">
        <AddStageModulesDatePicker
          :placeholder="item.placeholder"
          :type="item.fieldType"
          :hint="item.helpText"
          :options="item.options"
          :label="item.label"
          variant="outlined"
        />
        <v-btn icon size="x-small" variant="flat" @click="editForm(index)">
          <component :is="Pencil" size="20" />
        </v-btn>
        <v-btn
          icon
          size="x-small"
          color="error"
          variant="flat"
          @click="deleteForm(index)"
        >
          <component :is="Trash" size="20"
        /></v-btn>
      </div>
    </v-col>
  </v-row>

  <AddStageModulesEditFormFieldsModal v-model="editModal" :id="currentId" />
</template>

<script setup>
import { Trash, Pencil } from "lucide-vue-next";
import { formStore } from "~/store/formFields";
const formStoreFields = formStore();
const { formFields } = storeToRefs(formStoreFields);
const { removeFormField, getFormField } = formStoreFields;
const editModal = ref(false);
const currentId = ref(null);
const deleteForm = (value) => {
  removeFormField(value);
};
const editForm = (val) => {
  currentId.value = val;
  editModal.value = true;
};
</script>
