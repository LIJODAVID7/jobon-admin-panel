import { defineStore } from "pinia";

export const userStore = defineStore(
  "userStore",
  () => {
    const users = ref([]);
    const loading = ref(false);
    const total = ref(0);
    const showCreateUserModal = ref(false);
    const showEditUserModal = ref(false);
    const currentUser = ref(null);

    function addUsers(value) {
      users.value = value;
    }
    function addtotal(value) {
      total.value = value;
    }
    function userLoading(value) {
      loading.value = value;
    }
    function updateCreateUserModal(value) {
      showCreateUserModal.value = value;
    }
    function updateEditUserModal(value) {
      showEditUserModal.value = value;
    }
    function updateCurrentUser(value) {
      currentUser.value = value;
    }

    return {
      addUsers,
      users,
      userLoading,
      loading,
      total,
      addtotal,
      showCreateUserModal,
      updateCreateUserModal,
      updateEditUserModal,
      showEditUserModal,
      updateCurrentUser,
      currentUser,
    };
  },

  // { persist: true, storage: "localStorage" }
);
