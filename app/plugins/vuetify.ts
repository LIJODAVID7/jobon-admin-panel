import "@mdi/font/css/materialdesignicons.css";
import { VFileUpload } from 'vuetify/labs/VFileUpload'
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { VVideo } from "vuetify/labs/VVideo";
// Define custom themes
const customLightTheme = {
  dark: false, // Light theme
  colors: {
    primary: "#262626", // Blue
    secondary: "#EBDFCF", // Grey
    accent: "#EBDFCF", // Light Blue
    error: "#FF5252", // Red
    info: "#2196F3", // Info Blue
    success: "#4CAF50", // Green
    warning: "#FFC107", // Yellow
  },
  text: {
    primary: "#262626", // Set primary text color to your primary color
    secondary: "#EBDFCF", // Set secondary text color to secondary color
    disabled: "#B0BEC5", // Disabled text color
  },
};

const customDarkTheme = {
  dark: true, // Dark theme
  colors: {
    primary: "#90CAF9", // Lighter blue for dark mode
    secondary: "#757575", // Grey
    accent: "#FF4081", // Pink
    error: "#EF5350", // Light Red
    info: "#29B6F6", // Info Blue
    success: "#66BB6A", // Green
    warning: "#FFA726", // Orange
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "customLightTheme",
      themes: {
        customLightTheme,
        customDarkTheme,
      },
    },
    icons: {
      defaultSet: "mdi",
    },
    components: {
      VVideo,
      VFileUpload
    },
  });
  app.vueApp.use(vuetify);
});
