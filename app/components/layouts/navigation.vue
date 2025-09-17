<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    color="primary"
    app
  >
    <v-btn
      icon
      color="white"
      size="x-small"
      class="drawer-fab"
      @click="rail = !rail"
      variant="flat"
    >
      <v-icon size="24" v-if="rail">mdi-chevron-right</v-icon>
      <v-icon size="24" v-else>mdi-chevron-left</v-icon>
    </v-btn>

    <v-list
      density="compact"
      class="sidebar_item d-flex flex-column fill-height"
      nav
    >
      <div>
        <v-list-item
          v-for="item in sidebarList"
          :key="item.title"
          :to="item.value"
          :title="item.title"
          :value="item.value"
          exact
          active-class="side_bar_active"
          ><template #prepend>
            <component :is="item.component" class="mr-5" /> </template
        ></v-list-item>
        <v-divider class="my-3"></v-divider>
        <v-list-item
          to="/settings"
          title="SETTINGS"
          value="/settings"
          exact
          active-class="side_bar_active bg-primary"
          ><template #prepend> <component :is="Cog" class="mr-5" /> </template
        ></v-list-item>
      </div>

      <div class="mt-auto">
        <v-list-item title="LOGOUT" value="logout"
          ><template #prepend>
            <component :is="LogOut" class="mr-5" />
          </template>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar elevation="0" rounded density="compact" height="30px">
    <v-app-bar-title>JobOn Admin</v-app-bar-title>

    <v-btn icon> <SunDim size="20" class="mr-2" /></v-btn>
    <v-btn icon> <Bell size="20" class="mr-2" /></v-btn>
    <template v-slot:append>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ props }">
          <v-btn
            icon
            v-bind="props"
            size="x-small"
            class="ma-1"
            variant="tonal"
          >
            <UserRound size="20" />
          </v-btn>
        </template>

        <v-list class="retro-menu">
          <v-list-item class="retro-user-info">
            <v-list-item-title class="text-secondary font-weight-medium">
              {{ user?.fullName }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-primary">
              {{ user?.email }}
            </v-list-item-subtitle>
          </v-list-item>

          <v-divider class="border-grey"></v-divider>

          <v-list-item>
            <v-list-item-title class="d-flex align-center ga-3"
              ><Cog size="18" />Profile</v-list-item-title
            >
          </v-list-item>

          <v-list-item>
            <v-list-item-title class="d-flex align-center ga-3"
              ><LogOut size="18" />Log Out</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  Users2,
  Handshake,
  Briefcase,
  KanbanSquare,
  Timer,
  Cog,
  LogOut,
  UserRound,
  Moon,
  SunDim,
  Bell,
} from "lucide-vue-next";
import { authStore } from "~/store/auth";
const auth = authStore();
const { user } = storeToRefs(auth);
const drawer = ref(true);
const rail = ref(true);
const detached = ref(false);
const position = ref({ top: 100, left: 20 });
const sidebarList = [
  {
    title: "DASHBOARD",
    value: "/",
    icon: "mdi-view-dashboard",
    component: LayoutDashboard,
  },
  {
    title: "USER MANAGEMENT",
    value: "/users",
    icon: "mdi-account-details",
    component: Users,
  },
  {
    title: "PROJECTS",
    value: "/projects",
    icon: "mdi-folder-multiple",
    component: FolderKanban,
  },
  {
    title: "TEAMS",
    value: "/teams",
    icon: "mdi-account-group",
    component: Users2,
  },
  {
    title: "CLIENTS",
    value: "/clients",
    icon: "mdi-handshake",
    component: Handshake,
  },
  {
    title: "JOBS",
    value: "/jobs",
    icon: "mdi-briefcase",
    component: Briefcase,
  },
  {
    title: "KANBAN",
    value: "/kanban",
    icon: "mdi-view-dashboard-variant",
    component: KanbanSquare,
  },
  {
    title: "TIME TRACKING",
    value: "/time-tracking",
    icon: "mdi-timer-sand-full",
    component: Timer,
  },
];
</script>
<style scoped>
.sidebar_item {
  box-shadow: none;
  transition: all 0.9s ease-in-out;
  transform: scale(1);
}
.sidebar_item:hover {
  border-radius: 10px !important;
}

.side_bar_active {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
  border-radius: 10px !important;
}
.drawer-fab {
  position: absolute;
  top: 50%;
  right: -16px;
  transform: translateY(-50%);
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}
.drawer-fab:hover {
  transform: translateY(-50%) scale(1.12);
}
</style>
