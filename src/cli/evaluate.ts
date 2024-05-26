import { ATTEMPT } from '@/constants/evaluate'
import { BENCHMARK_DIR_NAME, GENERATED_DIR_NAME } from '@/constants/path'
import { cleanDir } from '@/utils/clean-dir'
import { writeFile } from '@/utils/write-file'
import { spawn } from 'child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'

function extractFileName(file: string) {
  const strings = file.split('.')
  const fileExtension = strings[strings.length - 1]
  const fileName = strings.slice(0, strings.length - 1).join('.')
  const type = fileName[0]
  return [type, fileName, fileExtension]
}

async function spawnProcess(command: string, args: string[], onStdout?: (chunk: Buffer) => void) {
  console.log('Running command:', '\x1b[36m%s\x1b[0m', command, args.join(' '))

  return new Promise<void>((resolve, reject) => {
    const proc = spawn(command, args)
    if (onStdout) proc.stdout.on('data', onStdout)
    else proc.stdout.pipe(process.stdout)

    proc.stderr.pipe(process.stderr)
    proc.on('close', (code) => {
      if (code === 0) {
        resolve()
      } else {
        reject(code)
      }
    })
  })
}

async function evaluate(attempt: number, options?: { enableTracing?: boolean }) {
  const cwd = process.cwd()
  const directory = fs.readdirSync(path.join(cwd, GENERATED_DIR_NAME), 'utf-8').sort()

  cleanDir(path.join(cwd, BENCHMARK_DIR_NAME))

  for (const file of directory) {
    const [type, fileName, fileExtension] = extractFileName(file)
    const srcPath = path.join(cwd, GENERATED_DIR_NAME, file)

    for (let i = 0; i < attempt; i++) {
      const destPath = path.join(cwd, BENCHMARK_DIR_NAME, `${fileName}-${i + 1}.txt`)
      const destTracePath = path.join(cwd, BENCHMARK_DIR_NAME, `${fileName}-${i + 1}`)

      const traceOptions = options?.enableTracing ? ['--generateTrace', destTracePath] : []

      await spawnProcess(
        `pnpm`,
        ['tsc', '--noEmit', '--skipLibCheck', '--extendedDiagnostics', ...traceOptions, srcPath],
        (content) => {
          const contentString = content.toString()

          writeFile(destPath, contentString)
        }
      )
    }
  }
}

evaluate(ATTEMPT)
