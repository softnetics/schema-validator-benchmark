import * as prettier_typescript from 'prettier/parser-typescript'
import * as prettier from 'prettier/standalone'

export namespace Formatter {
  export function Format(code: string) {
    const sortImportOptions: any = {
      importOrder: ['<THIRD_PARTY_MODULES>', '^[.]', '^[.][.]'],
      importOrderSeparation: true,
      importOrderSortSpecifiers: true,
      importOrderParserPlugins: ['decorators-legacy', 'jsx', 'typescript'],
    }

    return prettier.format(code, {
      parser: 'typescript',
      plugins: [prettier_typescript, '@trivago/prettier-plugin-sort-imports'],
      printWidth: 80,
      semi: false,
      singleQuote: true,
      trailingComma: 'none',
      ...sortImportOptions,
    })
  }
}
