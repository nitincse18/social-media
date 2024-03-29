import { io } from "socket.io-client";
// https://social-media-api-production-6a0e.up.railway.app
export const socket = io("https://social-media-api-production-6a0e.up.railway.app", { autoConnect: true });