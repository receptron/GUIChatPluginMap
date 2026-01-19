import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { MapToolData, MapArgs } from "../core/types";
import { pluginCore } from "../core/plugin";
import { samples } from "../core/samples";
import View from "./View.vue";
import Preview from "./Preview.vue";

export const plugin: ToolPlugin<MapToolData, unknown, MapArgs> = {
  ...pluginCore,
  viewComponent: View,
  previewComponent: Preview,
  samples,
};

export type { MapToolData, MapArgs } from "../core/types";

export {
  TOOL_NAME,
  TOOL_DEFINITION,
  executeMap,
  pluginCore,
} from "../core/plugin";

export { samples } from "../core/samples";

export { View, Preview };

export default { plugin };
