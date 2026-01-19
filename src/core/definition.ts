export const TOOL_NAME = "presentMap";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description:
    "Show a location on a map by providing a location name or address",
  parameters: {
    type: "object" as const,
    properties: {
      location: {
        type: "string",
        description:
          "The location name, address, or place to show on the map (e.g., 'Seattle', 'Paris, France', '123 Main St, New York')",
      },
    },
    required: ["location"],
  },
};
