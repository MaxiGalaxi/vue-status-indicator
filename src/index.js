import StatusIndicator from "./components/StatusIndicator.vue";
import "./styles/status-indicator.css";

export { StatusIndicator };

export const install = (app) => {
  app.component("StatusIndicator", StatusIndicator);
};
