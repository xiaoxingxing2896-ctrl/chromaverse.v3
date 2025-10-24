# 新春会 网站

响应式静态站点（Apple 风格），用于活动宣传与商品预售。

## 目录结构
- `index.html` — 首页
- `core.html` — 核心价值
- `dashboard.html` — 动态数据看板（占位）
- `about.html` — 关于我们
- `join.html` — 加入我们
- `support.html` — 支持我们（含12商品占位）
- `assets/css/style.css` — 样式
- `assets/js/main.js` — 交互脚本
- `assets/img/placeholder_1.png` ... `assets/img/placeholder_12.png` — 占位图（请替换为真实图）

## 本地预览
在文件夹中直接打开 `index.html`（或使用 `live server` 等插件预览）。

## 部署

### Cloudflare Pages（推荐）
1. 将项目推送到 GitHub 仓库。
2. 登录 Cloudflare → Pages → Create a project → Connect to Git.
3. 选择仓库，配置：
   - Framework preset: **None**
   - Build command: (留空)
   - Build output directory: `/`
4. Save & Deploy。

### GitHub Pages
1. 推送仓库到 GitHub。
2. 进入仓库 Settings → Pages，设置 Source 为 `main` 分支（root）。
3. 等待几分钟访问 `https://<用户名>.github.io/<仓库名>/`。

## 一键部署脚本
文件 `deploy.sh` 已包含在项目根目录。使用方式：
```bash
chmod +x deploy.sh
./deploy.sh
