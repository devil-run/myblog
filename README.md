# myblog
# 基于 Cloudflare Workers 构建博客
# 15天记录
# 2026/02/04
# 第一天是准备工作，了解Cloudflare工作情况，首先创建两个数据库
## 第一个是D1 DATABASE关系型数据库，用来存储文章内容这些东西
### CREATE TABLE posts (id TEXT PRIMARY KEY, title TEXT, content TEXT, category_id TEXT, created_at INTEGER, updated_at INTEGER);
### CREATE TABLE categories (id TEXT PRIMARY KEY, name TEXT);
### CREATE TABLE settings (key TEXT PRIMARY KEY, value TEXT);
### INSERT INTO categories VALUES ('1', '算法题解'), ('2', '项目开发'), ('3', '生活随笔');
## 第二个是KV 键值对存储，用来存全局设置、缓存等
<img width="2548" height="1242" alt="image" src="https://github.com/user-attachments/assets/e1744991-8f1b-4e39-8484-47e4f1e27b5a" />
## 建立 Cloudflare Worker 基本结构，定义 page 函数和基础 CSS 样式
<img width="2548" height="1242" alt="image" src="https://github.com/user-attachments/assets/f0805b94-bf14-41ed-a8fa-e2f4a0f1963f" />
# 2026/02/05
# D1 数据库接入与文章列表渲染
## 接入数据库，实现首页动态加载文章标题
<img width="2415" height="1285" alt="image" src="https://github.com/user-attachments/assets/4a9e1210-c475-41a9-aa08-e7e7d563a8f3" />
