import { GM_addElement, GM_log, GM_registerMenuCommand } from "$"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { logger } from "./utils/logger"

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div")
    app.id = "vite-monkey-app"
    document.body.append(app)
    return app
  })(),
).render(<App />)
