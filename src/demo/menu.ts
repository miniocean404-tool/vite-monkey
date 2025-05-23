import { GM_registerMenuCommand } from "$"

GM_registerMenuCommand("⚙ PC端设置", () => {}, {
  // 一个可选的字符串，指定菜单项的标题。当用户将鼠标悬停在菜单项上时，这将作为工具提示显示。
  title: "⚙ PC端设置1111",
  // 一个可选的 id，该号码由以前的 GM_registerMenuCommand 调用返回。如果指定，则将使用新的属性更新 GM_registerMenuCommand。如果未指定或找不到菜单项，将创建一个新的菜单项。
  id: "",
  // 菜单项的可选访问键。这可以用于为菜单项创建快捷键。例如，如果访问键是“s”，当打开Tampermonkey的弹出菜单时，用户可以按下“s”来选择菜单项
  accessKey: "",
  // 点击菜单按钮后是否字段关闭油猴插件展示
  autoClose: true,
})
