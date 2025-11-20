import { consola } from "consola/browser"

// logger.withTag("")

export const logger = consola.create({
  defaults: {
    level: -999,
    // tag: "<vite-monkey>",
  },
  formatOptions: {
    colors: true,
    date: true,
  },
})
