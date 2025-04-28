/**@type{import('tailwindcss').Config}*/
import lineClamp from '@tailwindcss/line-clamp';
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', //扫描src目录
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};
