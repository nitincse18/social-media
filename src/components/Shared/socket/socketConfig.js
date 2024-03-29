import { io } from "socket.io-client";
// https://social-media-api-production-6a0e.up.railway.app
export const socket = io("http://localhost:4000", { autoConnect: true });