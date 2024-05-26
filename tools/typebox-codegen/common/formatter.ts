import * as prettierEstree from 'prettier/plugins/estree'
import * as prettierTypescript from 'prettier/plugins/typescript'
import * as prettier from 'prettier/standalone'

export namespace Formatter {
  export async function Format(code: string) {
    return await prettier.format(code, {
      parser: 'typescript',
      plugins: [prettierTypescript, prettierEstree],
      printWidth: 80,
      semi: false,
      singleQuote: true,
      trailingComma: 'none',
    })
  }
}
