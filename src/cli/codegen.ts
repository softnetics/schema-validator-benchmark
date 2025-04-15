import { SchemaValidationLibrary } from '@/constants/library'
import {
  COMMON_DIR_NAME,
  CUSTOM_DIR_NAME,
  DATA_DIR_NAME,
  GENERATED_DIR_NAME,
} from '@/constants/path'
import {
  Formatter,
  ModelToArkType,
  ModelToEffect,
  ModelToIoTs,
  ModelToTypeScript,
  ModelToValibot,
  ModelToYup,
  ModelToZod,
  TypeBoxModel,
  TypeScriptToModel,
  TypeScriptToTypeBox,
} from '@/tools/typebox-codegen'
import { ModelToZod4 } from '@/tools/typebox-codegen/model/model-to-zod4'
import { cleanDir } from '@/utils/clean-dir'
import { extractFileName } from '@/utils/extract-file-name'
import { writeFile } from '@/utils/write-file'
import * as fs from 'node:fs'
import * as path from 'node:path'

async function generateSchemaValidationLibrary(
  model: TypeBoxModel,
  library: SchemaValidationLibrary,
  file: string
) {
  const cwd = process.cwd()
  const { fileExtension, testCaseName } = extractFileName(file)

  const outputPath = path.join(
    cwd,
    GENERATED_DIR_NAME,
    `${testCaseName}.${library}.${fileExtension}`
  )

  try {
    let content = ''
    switch (library) {
      case SchemaValidationLibrary.ZOD: {
        content = await ModelToZod.Generate(model)
        break
      }
      case SchemaValidationLibrary.ZOD4: {
        content = await ModelToZod4.Generate(model)
        break
      }
      case SchemaValidationLibrary.YUP: {
        content = await ModelToYup.Generate(model)
        break
      }
      case SchemaValidationLibrary.VALIBOT: {
        content = await ModelToValibot.Generate(model)
        break
      }
      // TODO: Generator is broken
      // case SchemaValidationLibrary.ARKTYPE: {
      //   content = await ModelToArkType.Generate(model)
      //   break
      // }
      case SchemaValidationLibrary.EFFECT: {
        content = await ModelToEffect.Generate(model)
        break
      }
      case SchemaValidationLibrary.IO_TS: {
        content = await ModelToIoTs.Generate(model)
        break
      }
      case SchemaValidationLibrary.TYPESCRIPT: {
        content = await ModelToTypeScript.Generate(model)
        break
      }
      case SchemaValidationLibrary.TYPEBOX: {
        const modelPath = path.join(cwd, COMMON_DIR_NAME, file)
        content = TypeScriptToTypeBox.Generate(
          await Formatter.Format(fs.readFileSync(modelPath).toString())
        )
        break
      }
      default:
        throw new Error('Invalid schema validation library')
    }

    writeFile(outputPath, content)
  } catch (err) {
    console.log(`Cannot generate ${outputPath}`, err)
  }
}

async function main() {
  const cwd = process.cwd()

  // 1. Clear the generated directory
  cleanDir(path.join(cwd, GENERATED_DIR_NAME))

  // 2. Read all files in the common directory
  for (const fileName of fs.readdirSync(COMMON_DIR_NAME, 'utf-8')) {
    const modelPath = path.join(cwd, COMMON_DIR_NAME, fileName)

    // 3. Convert TypeScript to TypeBox
    const content = fs.readFileSync(modelPath)
    const model = TypeScriptToModel.Generate(content.toString())

    // 4. Convert TypeBox to other schema validation libraries
    for (const type of Object.values(SchemaValidationLibrary)) {
      await generateSchemaValidationLibrary(model, type, fileName)
    }
  }

  // 5. Copy custom files to the generated directory
  for (const fileName of fs.readdirSync(CUSTOM_DIR_NAME, 'utf-8')) {
    const srcPath = path.join(cwd, CUSTOM_DIR_NAME, fileName)
    const destPath = path.join(cwd, GENERATED_DIR_NAME, fileName)
    fs.copyFileSync(srcPath, destPath)
  }
}

main()
