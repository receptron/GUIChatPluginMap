<template>
  <div class="w-full h-full p-4 bg-white">
    <div v-if="selectedResult?.data?.location" class="h-full flex flex-col">
      <div class="mb-4">
        <h2 class="text-xl font-bold text-gray-800">Map Location</h2>
        <p class="text-gray-600">{{ displayLocation }}</p>
      </div>

      <!-- Map iframe using Google Maps embed -->
      <div class="flex-1 min-h-0">
        <iframe
          v-if="googleMapKey"
          :src="mapEmbedUrl"
          class="w-full h-full border-0 rounded-lg"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div v-else class="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
          <div class="text-center p-8">
            <div class="text-gray-500 mb-4">Google Maps API key not configured</div>
            <a
              :href="googleMapsUrl"
              target="_blank"
              class="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-full flex items-center justify-center">
      <div class="text-gray-500">No location data available</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { ToolResult } from "gui-chat-protocol";
import type { MapToolData } from "../core/types";

const props = defineProps<{
  selectedResult: ToolResult<MapToolData> | null;
  googleMapKey?: string | null;
}>();

const displayLocation = computed(() => {
  const location = props.selectedResult?.data?.location;
  if (!location) return "";
  if (typeof location === "string") return location;
  return `${location.lat}, ${location.lng}`;
});

const mapEmbedUrl = computed(() => {
  if (!props.googleMapKey || !props.selectedResult?.data?.location) return "";
  const location = displayLocation.value;
  return `https://www.google.com/maps/embed/v1/place?key=${props.googleMapKey}&q=${encodeURIComponent(location)}`;
});

const googleMapsUrl = computed(() => {
  const location = displayLocation.value;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
});
</script>
