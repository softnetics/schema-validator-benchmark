import { ATTEMPT } from '@/constants/evaluate'
import { BENCHMARK_DIR_NAME, GENERATED_DIR_NAME } from '@/constants/path'
import { cleanDir } from '@/utils/clean-dir'
import { extractFileName } from '@/utils/extract-file-name'
import { writeFile } from '@/utils/write-file'
import { spawn } from 'child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'

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

  // 1. Clear the benchmark directory
  cleanDir(path.join(cwd, BENCHMARK_DIR_NAME))

  // 2. Generate the benchmark files
  for (const file of fs.readdirSync(path.join(cwd, GENERATED_DIR_NAME), 'utf-8').sort()) {
    const { testCaseName, library } = extractFileName(file)
    const fileName = `${testCaseName}.${library}`

    const srcPath = path.join(cwd, GENERATED_DIR_NAME, file)

    // 3. For each attempt, generate the benchmark file
    for (let i = 1; i <= attempt; i++) {
      const destPath = path.join(cwd, BENCHMARK_DIR_NAME, `${fileName}.attempt-${i}.txt`)
      const destTracePath = path.join(cwd, BENCHMARK_DIR_NAME, `${fileName}.attempt-${i}`)

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
