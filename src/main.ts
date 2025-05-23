import { GM_cookie, unsafeWindow, monkeyWindow, GM_addElement, GM_notification } from "$"

console.log(unsafeWindow)

GM_notification({
  text: "Hello, world!",
})
