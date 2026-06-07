# 🌌 梅傲寒的个人动态简历主页 (Mei Aohan's Cyber Portfolio)

欢迎访问我的个人动态网页简历仓库！本项目是一个面向 **AI应用开发** 与 **AI产品经理** 双重视角的交互式个人网页，专为展示工业级多智能体协同（CAE-Agent）、RAG全链路评测（AgentOps）以及智慧基建算法调度等跨界项目而打造。

👉 **在线演示地址**：[https://aohanao.github.io/](https://aohanao.github.io/)

---

## 🎨 网页设计与交互亮点

1. **双视角一键切换 (Developer & Product Manager Views)**
   * **AI 开发视角**：重点展示 LangGraph 编排、MCP 规范、ChromaDB 经验闪回、Docker 仿真沙箱等后端与智能体架构硬实力。
   * **AI 产品视角**：重点展示用户痛点洞察、0 到 1 产品路径规划、RAGAS 与裁判大模型量化评估指标、以及项目生命周期管理等软实力与商业思维。
2. **多项目深层选项卡 (Project Detailed Tabs)**
   * 采用顶部置顶的科技感选项卡设计，可以在 `个人简历`、`CAE-Agent 项目`、`AgentOps 平台`、`智能调度系统` 之间丝滑过渡。每个项目单独配有详尽的背景背景、架构设计图、技术细节说明与可量化指标看板。
3. **极客网页交互式终端 (Interactive Terminal Simulator)**
   * 自主研发了轻量级的前端命令行终端。支持 `help`、`about`、`skills`、`cae-agent`、`agentops`、`contact` 等命令行交互，支持随时清屏 (`clear`)，为招聘官带来纯粹的程序员极客互动体验。
4. **炫光深蓝流光背景 (Neon Aurora Theme)**
   * 采用前沿的深邃蓝靛色（`#081a3e` ~ `#020713`）渐变，搭配 3D 浮动的三色炫彩极光微风特效。
   * 基于 HTML5 Canvas 构建了自适应粒子物理连线系统，鼠标移动时会产生引力排斥的微互动微动画，给网页带来极富层次的立体流动质感。
5. **毛玻璃一键复制微信 (Toast Notification)**
   * 侧边栏的微信图标支持悬浮提示与一键复制功能。点击后，系统会将微信号 `18385028811` 自动提取并复制到剪切板，同时在屏幕中下方弹起炫光毛玻璃气泡提示，友好且高效。

---

## 🛠️ 项目技术栈

* **核心结构**：HTML5 语义化标签
* **视觉样式**：CSS3 (Vanilla CSS)，全局响应式网格布局 (Grid & Flexbox)，三通道极光 Keyframes 帧动画，毛玻璃缩略图滤镜效果 (`backdrop-filter`)
* **交互逻辑**：原生 JavaScript (ES6+)，Canvas 2D 粒子系统，Web Clipboard API，DOM 事件驱动

---

## 📬 欢迎联系与技术交流

* **电子邮箱**：[mahm8811@163.com](mailto:mahm8811@163.com)
* **联系电话/微信**：(+86) 183-8502-8811 (微信同号)
* **GitHub 个人主页**：[https://github.com/aohanao](https://github.com/aohanao)

---

## 🚀 本地运行与部署指南

### 本地运行
您可以直接双击 `index.html` 离线预览；或者在项目根目录下通过 Python 快速拉起本地 HTTP 服务：
```bash
python -m http.server 8000
```
然后在浏览器中输入 `http://localhost:8000` 即可访问。

### 部署到您的 GitHub Pages
如果您修改了本简历，只需将其推送至您个人仓库的 `main` 分支，GitHub Pages 即可在一分钟内自动重新打包并完成全球部署！
```bash
git add .
git commit -m "feat: 优化项目介绍细节与仓库链接"
git push origin main
```
