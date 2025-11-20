import { GM_addElement, GM_log, GM_registerMenuCommand } from "$"
import App from "./App"
import "./index.css"
import { logger } from "./utils/logger"
import { onMountedHotkeys } from "./pancel"

onMountedHotkeys("vite-monkey-app", "ctrl+shift+u", <App />)
