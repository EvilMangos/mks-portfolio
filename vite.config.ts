import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
	plugins: [react()],
	server: {
		port: 3000,
	},
	build: {
		sourcemap: process.env.VITE_SOURCEMAP === "true",
	},
}));
