<template>
  <div class="text-center pa-4">
    <v-btn @click="formDialog = true"> +Add Form Field </v-btn>

    <v-dialog v-model="formDialog" max-width="500px">
      <v-card title="Form Field" class="pa-3">
        <v-form>
          <v-row>
            <v-col cols="6">
              <AddStageModulesTextField
                label="Label"
                placeholder="Label"
                type="text"
                v-model="formData.label"
                :clearable="true"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <AddStageModulesSelect
                label="Field Type"
                placeholder="Field Type"
                v-model="formData.fieldType"
                :clearable="true"
                variant="outlined"
                :items="[
                  'text',
                  'email',
                  'number',
                  'date',
                  'select',
                  'multiselect',
                  'textarea',
                  'checkbox',
                  'radio',
                  'file',
                ]"
              />
            </v-col>
            <v-col cols="6">
              <AddStageModulesTextField
                label="Field Name"
                placeholder="Field Name"
                type="text"
                v-model="formData.fieldName"
                :clearable="true"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <AddStageModulesTextField
                label="Placeholder"
                placeholder="Placeholder"
                type="text"
                v-model="formData.placeholder"
                :clearable="true"
                variant="outlined"
              />
            </v-col>
            <v-col cols="6">
              <AddStageModulesComboBox
                label="Options"
                placeholder="Options"
                type="text"
                v-model="formData.options"
                :clearable="true"
                variant="outlined"
                hint="For select, multiselect, radio fields"
              />
            </v-col>
            <v-col cols="6">
              <AddStageModulesTextField
                label="Help text"
                placeholder="help Text"
                type="text"
                v-model="formData.helpText"
                :clearable="true"
                variant="outlined"
              />
            </v-col>
            <v-col cols="12">
              <AddStageModulesCheckbox
                label="Is Field Required"
                placeholder="Is Required"
                v-model="formData.isRequired"
                variant="outlined"
                :items="[true, false]"
            /></v-col>
            <v-col cols="12">
              <AddStageModulesSwitch
                label="Add Validations"
                v-model="validations"
                variant="outlined"
              />
            </v-col>

            <v-col cols="6" v-if="validations">
              <AddStageModulesNumberInput
                label="Min Length"
                placeholder="Min Length"
                v-model="formData.validations.minLength"
                :clearable="true"
                variant="outlined"
            /></v-col>
            <v-col cols="6" v-if="validations">
              <AddStageModulesNumberInput
                label="Max Length"
                placeholder="Max Length"
                v-model="formData.validations.maxLength"
                :clearable="true"
                variant="outlined"
            /></v-col>

            <v-col cols="6" v-if="validations">
              <AddStageModulesNumberInput
                label="Min"
                placeholder="Min"
                v-model="formData.validations.min"
                :clearable="true"
                variant="outlined"
            /></v-col>
            <v-col cols="6" v-if="validations">
              <AddStageModulesNumberInput
                label="Max"
                placeholder="Max"
                v-model="formData.validations.max"
                :clearable="true"
                variant="outlined"
            /></v-col>

            <v-col cols="12" v-if="validations">
              <AddStageModulesTextField
                label="Pattern"
                placeholder="Pattern"
                type="text"
                v-model="formData.validations.pattern"
                :clearable="true"
                variant="outlined"
              />
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions class="my-3">
          <v-row>
            <v-col class="px-1">
              <v-btn
                color="primary"
                variant="outlined"
                block
                @click="formDialog = false"
                >Cancel</v-btn
              >
            </v-col>
            <v-col class="px-1">
              <v-btn color="primary" variant="flat" block @click="addForm"
                >Submit</v-btn
              ></v-col
            >
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { formStore } from "~/store/formFields";
const formFieldStore = formStore();
const { addFormFields } = formFieldStore;
const formData = ref({
  fieldName: "",
  fieldType: "",
  label: "",
  placeholder: "",
  helpText: "",
  options: [],
  isRequired: true,
  validations: {
    minLength: null,
    maxLength: null,
    min: null,
    max: null,
    pattern: "",
  },
});

const validations = ref(false);
const formDialog = ref(false);

const addForm = () => {
  addFormFields(formData.value);
  formData.value = {
    fieldName: "",
    fieldType: "",
    label: "",
    placeholder: "",
    helpText: "",
    isRequired: false,
    options: [],
    validations: {
      minLength: null,
      maxLength: null,
      min: null,
      max: null,
      pattern: "",
    },
  };
  validations.value = false;
  formDialog.value = false;
};
</script>
