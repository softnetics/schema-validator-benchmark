# Sample Data

All file in this directory are sample testcases for evaluate the performance of Typescript compiler.

## Structure

`common` folder - Generic testcases that can use [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen) to generate the typescript code in different schema validator libraries.

`custom` folder - In some use cases, we can not use the generated code from [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen) directly. We need to create it by ourself.

`__generated__` folder - The generated code from [typebox-codegen](https://github.com/sinclairzx81/typebox-codegen)

`__benchmark__` folder - The benchmark code to evaluate the performance of the generated code.

## File Naming Convention

`{number}.{name}.{library}.ts`
