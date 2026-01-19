# @gui-chat-plugin/map

Google Map location plugin for GUI Chat applications. Display locations on an interactive map.

## Features

- Show any location by name or address
- Google Maps embed integration
- Fallback link to open in Google Maps
- Support for coordinates (lat/lng)

## Installation

```bash
yarn add @gui-chat-plugin/map
```

## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import MapPlugin from "@gui-chat-plugin/map/vue";

const pluginList = [
  // ... other plugins
  MapPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/map/style.css";
```

### Core-only Usage

```typescript
import { executeMap, TOOL_DEFINITION } from "@gui-chat-plugin/map";

// Show a location
const result = await executeMap(context, {
  location: "Tokyo Tower, Japan",
});
```

## API

### MapArgs

```typescript
interface MapArgs {
  location: string; // Location name, address, or coordinates
}
```

### MapToolData

```typescript
interface MapToolData {
  location: string | { lat: number; lng: number };
}
```

## Configuration

The plugin requires a Google Maps API key to display embedded maps. Pass it via the `googleMapKey` prop to the view component, or configure it in your app's start response.

## Development

```bash
# Install dependencies
yarn install

# Run demo
yarn dev

# Build
yarn build

# Lint
yarn lint
```

## License

MIT
