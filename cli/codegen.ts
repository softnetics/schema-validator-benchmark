import {
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
} from '@tools/typebox-codegen'
import * as fs from 'node:fs'
import * as path from 'node:path'

const DATA_DIR_NAME = 'data'
const GENERATED_DIR_NAME = '__generated__'

function extractFileName(file: string) {
  const strings = file.split('.')
  const fileExtension = strings[strings.length - 1]
  const fileName = strings.slice(0, strings.length - 1).join('.')
  return [fileName, fileExtension]
}

const SchemaValidationLibrary = {
  ZOD: 'zod',
  YUP: 'yup',
  VALIBOT: 'valibot',
  ARKTYPE: 'arktype',
  EFFECT: 'effect',
  IO_TS: 'io-ts',
  TYPESCRIPT: 'typescript',
  TYPEBOX: 'typebox',
  VALUE: 'value',
} as const
type SchemaValidationLibrary =
  (typeof SchemaValidationLibrary)[keyof typeof SchemaValidationLibrary]

async function generateSchemaValidationLibrary(
  model: TypeBoxModel,
  type: SchemaValidationLibrary,
  file: string
) {
  const currentPath = process.cwd()
  const [fileName, fileExtension] = extractFileName(file)

  const outputPath = path.join(
    currentPath,
    DATA_DIR_NAME,
    GENERATED_DIR_NAME,
    `${type}.${fileName}.${fileExtension}`
  )

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
      case SchemaValidationLibrary.ARKTYPE: {
        content = await ModelToArkType.Generate(model)
        break
      }
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
        const modelPath = path.join(currentPath, DATA_DIR_NAME, file)
        content = TypeScriptToTypeBox.Generate(fs.readFileSync(modelPath).toString())
        break
      }
      default:
        throw new Error('Invalid schema validation library')
    }

    fs.writeFileSync(outputPath, content)
  } catch (err) {
    console.log(`Cannot generate ${outputPath}`, err)
  }
}

export async function codegen() {
  const currentPath = process.cwd()
  const directory = fs.readdirSync('data', 'utf-8')

  if (fs.existsSync(path.join(currentPath, DATA_DIR_NAME, GENERATED_DIR_NAME))) {
    fs.rmSync(path.join(currentPath, DATA_DIR_NAME, GENERATED_DIR_NAME), { recursive: true })
    fs.mkdirSync(path.join(currentPath, DATA_DIR_NAME, GENERATED_DIR_NAME))
  } else {
    fs.mkdirSync(path.join(currentPath, DATA_DIR_NAME, GENERATED_DIR_NAME))
  }

  for (const file of directory) {
    if (file === GENERATED_DIR_NAME) continue

    const modelPath = path.join(currentPath, DATA_DIR_NAME, file)

    const content = fs.readFileSync(modelPath)
    const model = TypeScriptToModel.Generate(content.toString())

    await Promise.allSettled([
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.ZOD, file),
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.YUP, file),
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.VALIBOT, file),
      // Generator is broken
      // generateSchemaValidationLibrary(model, SchemaValidationLibrary.ARKTYPE, file),
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.EFFECT, file),
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.IO_TS, file),
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.TYPESCRIPT, file),
      generateSchemaValidationLibrary(model, SchemaValidationLibrary.TYPEBOX, file),
    ])
  }
}

codegen()
