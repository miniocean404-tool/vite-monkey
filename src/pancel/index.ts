import ReactDOM from "react-dom/client"
import hotkeys from "hotkeys-js"

export function onMountedPanel(id: string, children: React.ReactNode) {
  const panel = document.createElement("div")
  panel.id = id
  document.body.append(panel)

  const root = ReactDOM.createRoot(panel)
  root.render(children)
  return root
}

export function onUnmountedPanel(id: string, root: ReactDOM.Root) {
  root.unmount()
  document.getElementById(id)?.remove()
}

export function onMountedHotkeys(
  id: string,
  keys: string,
  children: React.ReactNode,
  callback?: (isMoutend: boolean) => void,
) {
  let isMoutend = false
  let root: ReactDOM.Root | null = null

  hotkeys(keys, function (event, handler) {
    console.log("✅ ~ hotkeys - :", event, handler, isMoutend)

    event.preventDefault()

    if (!isMoutend) {
      isMoutend = true
      root = onMountedPanel(id, children)
    } else {
      isMoutend = false
      if (root) onUnmountedPanel(id, root)
      root = null
    }

    callback?.(isMoutend)
  })
}
