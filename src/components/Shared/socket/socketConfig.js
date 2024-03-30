import { io } from "socket.io-client";
import { BASE_URL, PROD_BASE_URL } from "../../../services/api";
// https://social-media-api-production-6a0e.up.railway.app
export const socket = io(PROD_BASE_URL, { autoConnect: true });