import { defineConfig } from "vite"
import monkey from "vite-plugin-monkey"
import pkg from "./package.json"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    tailwindcss(),
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        name: "学习油猴插件",
        // 可以是 data:image/png;base64,xxxx 格式的图片
        icon: `data:image/png;base64,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`,
        copyright: "我是版权语句",
        version: pkg.version,
        author: pkg.author.name,
        description: pkg.description,
        license: pkg.license,
        // 命名空间
        namespace: pkg.repository.url,
        // 反馈地址
        supportURL: `${pkg.repository.url}/issues`,
        // 插件匹配的网页（<protocol>://<domain><path>）或 * 例如（"*://*.csdn.net/*"）
        match: ["*://*/*"],
        // 脚本应该运行的页面(可以配置具体运行的页面 path 路径)。允许多个标签实例。 @include不支持URL哈希参数。您必须在没有哈希参数的情况下匹配路径并使用window.onurlchange
        // include:[],
        // 插件排除的具体地址，即使他们在 @include 或  @match 中
        exclude: [""],
        // 插件运行时允许使用的 api --- @grant不用管，使用import GM_xxx from "ViteGM"会自动添加
        // grant: "*",
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
        // GM_xmlhttpRequest 允许访问的域
        // connect:[]
        // 此标签使脚本在主页上运行，但不在iFrames上。
        // noframes: true,
        // 脚本更新的 URL。注意：需要一个@version标签才能使更新检查起作用。
        // updateURL:""
        // 定义URL检测到更新时将从脚本下载的URL。如果值不使用该值，则不会进行更新检查。
        // downloadURL:""
      },
      // import { GM_xxx } from "$" 中 $ 的别名
      clientAlias: "$",
      server: {
        // 把GM api 挂载到unsafeWindow上
        mountGmApi: false,
        // dev时浏览器自动访问地址从而触发脚本管理器安装本脚本
        open: true,
      },
      build: {
        // 输出的文件名
        fileName: "monkey.user.js",
        // 输出.meta.js
        metaFileName: true,
        // 自动申请权限，可以不用填上面的grant
        autoGrant: true,
      },
    }),
  ],
})
