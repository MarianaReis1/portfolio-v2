import type { App } from 'vue';
import VueClickAway from "vue3-click-away";

export default (app: App) => {
  app.use(VueClickAway);
}