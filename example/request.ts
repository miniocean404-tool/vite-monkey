import { GM_xmlhttpRequest } from "$"

GM_xmlhttpRequest({
  method: "GET",
  url: "https://user-api.davincimotor.com/api/content/api/Product/vehicle-model",
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "json",
  onload: function (event) {
    console.log(event.response)
  },
})
