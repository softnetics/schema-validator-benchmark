export function extractFileName(fileName: string) {
  const strings = fileName.split('.')

  if (strings.length === 3) {
    const [testCaseName, library, fileExtension] = strings
    return {
      testCaseName,
      library,
      fileExtension,
    }
  }

  if (strings.length === 2) {
    const [testCaseName, fileExtension] = strings
    return {
      testCaseName,
      fileExtension,
    }
  }

  throw new Error(`Invalid file name ${fileName}`)
}
