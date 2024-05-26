import { SchemaValidationLibrary } from '@/constants/libary'
import { DATA_DIR_NAME, GENERATED_DIR_NAME } from '@/constants/path'
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
import { cleanDir } from '@/utils/clean-dir'
import { writeFile } from '@/utils/write-file'
import * as fs from 'node:fs'
import * as path from 'node:path'

function extractFileName(file: string) {
  const strings = file.split('.')
  const fileExtension = strings[strings.length - 1]
  const fileName = strings.slice(0, strings.length - 1).join('.')
  return [fileName, fileExtension]
}

async function generateSchemaValidationLibrary(
  model: TypeBoxModel,
  type: SchemaValidationLibrary,
  file: string
) {
  const cwd = process.cwd()
  const [fileName, fileExtension] = extractFileName(file)

  const outputPath = path.join(cwd, GENERATED_DIR_NAME, `${type}.${fileName}.${fileExtension}`)

  try {
    let content = ''
    switch (type) {
      case SchemaValidationLibrary.ZOD: {
        content = await ModelToZod.Generate(model)
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
      // Generator is broken
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
        const modelPath = path.join(cwd, DATA_DIR_NAME, file)
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

export async function codegen() {
  const cwd = process.cwd()
  const directory = fs.readdirSync('data', 'utf-8').sort()

  cleanDir(path.join(cwd, GENERATED_DIR_NAME))

  for (const file of directory) {
    if (file.includes('__')) continue

    const modelPath = path.join(cwd, DATA_DIR_NAME, file)

    const content = fs.readFileSync(modelPath)
    const model = TypeScriptToModel.Generate(content.toString())

    for (const type of Object.values(SchemaValidationLibrary)) {
      await generateSchemaValidationLibrary(model, type, file)
    }
  }
}

codegen()
