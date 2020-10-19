console.log("This is the service worker: ");

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/styles.css",
    "/index.js",
    "/manifest.webmanifest",
    "/icons/icon-192x192.png",
    "/icons/icon-512x512.png",
];

