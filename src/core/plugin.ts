import type { ToolContext, ToolResult, ToolPluginCore } from "gui-chat-protocol";
import type { MapToolData, MapArgs } from "./types";
import { TOOL_NAME, TOOL_DEFINITION } from "./definition";

export const showMap = async (
  _context: ToolContext,
  args: MapArgs,
): Promise<ToolResult<MapToolData>> => {
  const { location } = args;

  if (!location || typeof location !== "string") {
    throw new Error("Location parameter is required and must be a string");
  }

  return {
    message: `Showing ${location} on the map`,
    data: { location },
  };
};

export const pluginCore: ToolPluginCore<MapToolData, unknown, MapArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: showMap,
  generatingMessage: "Loading map...",
  isEnabled: (startResponse) => !!startResponse?.googleMapKey,
  backends: ["map"],
};

export { TOOL_NAME, TOOL_DEFINITION };
export const executeMap = showMap;
