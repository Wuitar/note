const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用npm包主题
  title: "w-notes",
  description: 'vdoing博客主题模板',
  base: '/w-notes/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,

  // vssue 评论插件
  plugins: [
    [
      "vuepress-plugin-vssue-global",
      {
        platform: "github",
        title: "[Comment]<%- frontmatter.title %>",
        needComments: true,
        // 其他的 Vssue 配置
        autoCreateIssue: true,
        clientId: "98a82fcf75f9ecde1a46",
        clientSecret: "b1e96fbf80d03fda52d22ec1b41fd0260481d143",
        owner: "eryajf",
        repo: "w-notes",
      },
    ],
    // 增强 markdown
    [
      "md-enhance", {
        // 启用 TeX 支持
        tex: true,
        // Enable mermaid
        mermaid: true,
        // 启用流程图
        flowchart: true,
      },
    ],
  ],
}