import * as fs from 'node:fs'

export function cleanDir(path: string) {
  if (fs.existsSync(path)) {
    fs.rmdirSync(path, { recursive: true })
  }
}
