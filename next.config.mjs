/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/my-blog', //github仓库名称
  trailingSlash: true, //路径结尾都添加 ‘/’
  images:{
    unoptimized:true,
  }
};

export default nextConfig;
