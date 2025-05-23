import { defineConfig } from "vite"
import monkey from "vite-plugin-monkey"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: "学习油猴插件",
        version: "1.0.0",
        author: "我是小海洋呀",
        description: "通过 vite 插件学习油猴插件",
        copyright: "我是版权语句",
        icon: "https://vitejs.dev/logo.svg",
        namespace: "miniocean404",
        // 插件匹配的网页（<protocol>://<domain><path>）或 *
        match: ["https://www.google.com"],
        // 脚本应该运行的页面。允许多个标签实例。 @include不支持URL哈希参数。您必须在没有哈希参数的情况下匹配路径并使用window.onurlchange
        // include:[],
        // 插件排除的具体地址，即使他们在 @include 或  @match 中
        exclude: [""],
        // 插件运行时允许使用的 api
        grant: "*",
        homepage: "https://github.com/MiniOcean404",
        // 引入 cdn 资源包
        // require:[]
        // 可以通过脚本通过gm_getresourceurl和gm_getResourcetext访问的资源预装资源。
        // resource: {}
        // 定义脚本注入的时刻。与其他脚本处理程序不同，@run-at 定义了脚本希望运行的最早可能时机。这意味着使用 @require 标签的脚本可能会在文档加载完成后才执行，因为获取所需脚本耗时较长。
        // 不过，在指定注入时刻之后触发的所有 DOMNodeInserted、DOMContentLoaded 和 load 事件都会被缓存，并通过沙盒的 window.addEventListener 方法传递给已注册的监听器
        // 默认： document-idle (DOMContentLoaded 事件触发时)
        "run-at": "document-idle",
        // 定义脚本注入的浏览器上下文类型。该元键（meta key）允许您控制脚本应在普通浏览标签页、隐身标签页，还是两者中运行。这样就能根据浏览会话的隐私上下文，灵活决定脚本的行为。
        "run-in": ["normal-tabs", "incognito-tabs"],
        // 默认 raw 模式
        sandbox: "raw",
        // 此标签使脚本在主页上运行，但不在iFrames上。
        // noframes: true,
        // 脚本更新的 URL。注意：需要一个@version标签才能使更新检查起作用。
        // updateURL:""
        // 定义URL检测到更新时将从脚本下载的URL。如果值不使用该值，则不会进行更新检查。
        // downloadURL:""
      },
    }),
  ],
})
