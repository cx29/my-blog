import { dirname } from 'path'; //用来获取当前文件的目录名
import { fileURLToPath } from 'url'; // 用来转换当前模块的URL转换成本地文件路径
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

//指定当前目录作为baseDirectory
const eslintConfig = [...compat.extends('next/core-web-vitals')];

export default eslintConfig;
