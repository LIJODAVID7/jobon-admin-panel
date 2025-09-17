<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" lg="4">
        <v-card elevation="6" class="pa-3 rounded-lg">
          <v-card-title class="text-h6 text-center"
            >Add Stage Status</v-card-title
          >
          <AddStageModulesStageStatus />
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="submitStatus"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card></v-col
      >
      <!-- <v-col cols="12" lg="4">
        <v-card elevation="6" class="pa-3 rounded-lg">
          <v-card-title class="text-h6 text-center"
            >Assignment Configuration</v-card-title
          >

          <v-card-actions class="justify-center">
            <v-btn color="primary" variant="outlined" block>Submit</v-btn>
          </v-card-actions>
        </v-card></v-col
      >
      <v-col cols="12" lg="4">
        <v-card elevation="6" class="pa-3 rounded-lg">
          <v-card-title class="text-h6 text-center">Meta Data </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn color="primary" variant="outlined" block>Submit</v-btn>
          </v-card-actions>
        </v-card></v-col
      > -->
    </v-row>
  </v-container>
</template>

<script setup>
const router = useRouter();
const submitStatus = () => {
  router.push("/add-stage/submit-stage")
};
</script>
