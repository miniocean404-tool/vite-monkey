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

  // 激活 scope 作用域
  hotkeys.setScope("global")

  hotkeys(
    keys,
    {
      // 自定义热键的作用域
      scope: "global",
      // 是否使用事件捕获阶段, true 为使用, 默认 false, 冒泡阶段
      capture: false,
      // 是否在按键释放时触发
      keyup: false,
      // 是否在按键按下时触发
      keydown: true,
      // 定义组合键的分隔符
      splitKey: "+",
      // 是否只响应单键（非组合键）
      single: false,
    },
    (event, handler) => {
      event.preventDefault()

      if (handler.scope === "global") {
        if (!isMoutend) {
          isMoutend = true
          root = onMountedPanel(id, children)
        } else {
          isMoutend = false
          if (root) onUnmountedPanel(id, root)
          root = null
        }

        callback?.(isMoutend)
      }
    },
  )
}
