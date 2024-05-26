import * as fs from 'node:fs'

export function writeFile(path: string, content: string) {
  const dir = path.split('/').slice(0, -1).join('/')

  if (!fs.existsSync(dir)) fs.mkdirSync(dir)

  fs.writeFileSync(path, content, 'utf-8')
}
