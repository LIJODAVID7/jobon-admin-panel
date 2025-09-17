import { defineStore } from "pinia";

export const authStore = defineStore(
  "authStore",
  () => {
    const user = ref({});
    const token = ref("");
    const loading = ref(false);

    function addUser(payload) {
      user.value = payload.user;
      token.value = payload.token;
    }
    function loginLoading(value) {
      loading.value = value;
    }

    return { addUser, user, token, loginLoading, loading };
  },

  { persist: true, storage: "localStorage" }
);
