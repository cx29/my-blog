/**
 * 本文件是为文章读取逻辑
 */
import fs from 'fs/promises'; //读取文件,异步版本
import path from 'path'; //处理文件路径
import matter from 'gray-matter'; //解析Markdown文件头部

//定义markdown文章存放目录
const postsDirectory = path.join(process.cwd(), 'src', 'posts');

//获取所有的markdown文件,按时间排序
export async function getAllPosts() {
  const fileNames = await fs.readdir(postsDirectory); //读取文件夹下所有文件名

  const posts = await Promise.all(
    fileNames.map(async fileName => {
      const fullPath = path.join(postsDirectory, fileName); //得到每个文件的完整路径
      const fileContents = await fs.readFile(fullPath, 'utf8'); //读取markdown文件内容
      const { data } = matter(fileContents); //提取FrontMatter里面的metadata
      const slug = fileName.replace(/\.md$/, ''); //去掉文件后缀，生成slug（用于路由)
      return {
        slug, // 文章slug（用作路由）
        ...data, //展开Front Matter数据
      };
    })
  );

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1)); //根据日期降序排列
}

//根据Slug读取单篇文章
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`); //定位对应的Makrdown文件
  const fileContents = await fs.readFile(fullPath, 'utf8'); //读取文章内容

  const { data, content } = matter(fileContents); // 分离metadata和正文内容

  return {
    slug,
    metadata: data, //标题，日期等信息
    content, // 纯Markdown正文
  };
}
