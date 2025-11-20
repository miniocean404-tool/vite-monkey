import { GM_addElement, GM_log, GM_registerMenuCommand } from "$"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { logger } from "./utils/logger"
import { onMountedHotkeys, onMountedPanel } from "./pancel"

onMountedHotkeys("vite-monkey-app", "ctrl+shift+u", <App />, (isMoutend) => {
  console.log("✅ ~ isMoutend - :", isMoutend)
})
