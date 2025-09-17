<template>
  <v-container fluid class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" xl="4" lg="6" md="8" sm="10">
        <v-card elevation="6" class="pa-6 rounded-lg">
          <v-card-title class="text-h6 text-center"
            >Select Files Required</v-card-title
          >
          <AddStagePreviewFileRequired />
          <AddStageModulesFileRequiredModal />
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              variant="outlined"
              block
              @click="submitFileRequired"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card></v-col
      >
    </v-row>
  </v-container>
</template>

<script setup>
const router = useRouter();
const submitFileRequired = () => {
  router.push("/add-stage/stage-status");
};
</script>
