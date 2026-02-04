export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const settings = { name: "我的假期打卡博客" };
    
    // 页面基础布局函数
    const page = (s, main) => new Response(`
      <!doctype html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>${s.name}</title>
        <style>
          body { margin: 0; background: #2c3e50; font-family: sans-serif; color: #fff; }
          .container { max-width: 800px; margin: 60px auto; padding: 20px; }
          .glass { background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 15px; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container"><main class="glass">${main}</main></div>
      </body>
      </html>
    `, {headers: {'content-type': 'text/html;charset=utf-8'}});

    return page(settings, "<h1>Hello World!</h1>");
  }
};