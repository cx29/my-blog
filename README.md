<pre><code>```
.
├── README.md                # 项目说明文档
├── eslint.config.mjs         # ESLint 配置（使用 Flat Config）
├── jsconfig.json             # JS 路径别名（比如 @/lib/posts）
├── next.config.mjs           # Next.js 配置文件
├── package.json              # 项目基本信息 + 依赖
├── postcss.config.mjs        # Tailwind CSS/PostCSS 配置（如果用的话）
├── public/                   # 静态资源 (图片、favicon等)
└── src/
    ├── app/                  # App Router 根目录
    │   ├── layout.js         # 整个应用的布局（全局布局）
    │   ├── page.js           # 首页页面，展示文章列表
    │   └── posts/            # 动态路由，单篇文章页
    ├── lib/                  # 封装逻辑（比如读 Markdown）
    │   └── posts.js          # Markdown 解析和数据处理
    ├── posts/                # 文章存放地 (Markdown 文件)
    │   └── hello-world.md
    └── styles/               # 全局样式文件
```
</code></pre>
