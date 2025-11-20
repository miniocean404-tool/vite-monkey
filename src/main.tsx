import { GM_addElement, GM_log, GM_registerMenuCommand } from "$"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(
  (() => {
    const app = document.createElement("div")
    document.body.append(app)
    return app
  })(),
).render(<App />)
