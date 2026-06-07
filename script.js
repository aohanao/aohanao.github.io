// 角色切换逻辑
function switchRole(role) {
    const body = document.body;
    const devBtn = document.querySelector('.btn-dev');
    const pmBtn = document.querySelector('.btn-pm');
    const roleText = document.querySelector('.role-text');

    if (role === 'dev') {
        body.classList.remove('pm-active');
        body.classList.add('dev-active');
        devBtn.classList.add('active');
        pmBtn.classList.remove('active');
        if (roleText) roleText.textContent = "AI应用开发工程师";
    } else {
        body.classList.remove('dev-active');
        body.classList.add('pm-active');
        pmBtn.classList.add('active');
        devBtn.classList.remove('active');
        if (roleText) roleText.textContent = "AI产品经理/项目管理";
    }
}

// CAE-Agent 运行图折叠
function toggleAccordion(btn) {
    btn.classList.toggle('active');
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
}

// --- 极客网页模拟终端 (Terminal Simulator) ---
const terminalInput = document.getElementById('terminal-input');
const terminalScreen = document.getElementById('terminal-screen');

if (terminalInput) {
    terminalInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            this.value = '';
            executeCommand(command);
        }
    });

    // 点击终端任意位置聚焦输入框
    document.querySelector('.terminal-section').addEventListener('click', () => {
        terminalInput.focus();
    });
}

function printToTerminal(text, className = '') {
    const line = document.createElement('div');
    line.className = 'terminal-line ' + className;
    line.innerHTML = text;
    terminalScreen.insertBefore(line, terminalScreen.lastElementChild);
    terminalScreen.scrollTop = terminalScreen.scrollHeight;
}

function executeCommand(cmd) {
    // 打印输入的命令
    printToTerminal(`<span class="terminal-prompt">Guest@MeiAohan:~$</span> ${cmd}`);

    if (cmd === '') return;

    const parts = cmd.split(' ');
    const mainCmd = parts[0];

    switch (mainCmd) {
        case 'help':
            printToTerminal('--- 可用命令列表 ---');
            printToTerminal('<span class="term-highlight">about</span>      - 了解梅傲寒的个人简介');
            printToTerminal('<span class="term-highlight">skills</span>     - 查询当前的核心技能图谱');
            printToTerminal('<span class="term-highlight">cae-agent</span>  - 查看基于 LangGraph 的 CAE 智能体架构细节');
            printToTerminal('<span class="term-highlight">agentops</span>   - 了解智能体全链路评测大盘的指标与构成');
            printToTerminal('<span class="term-highlight">contact</span>    - 打印联系方式（电话、邮箱、社交等）');
            printToTerminal('<span class="term-highlight">clear</span>      - 清空终端屏幕');
            break;
        case 'about':
            printToTerminal('>>> 梅傲寒 | AI交叉背景研发者 & 产品人');
            printToTerminal('西南交通大学桥梁与隧道工程硕士（推免），研究方向为大模型智慧基建应用。');
            printToTerminal('具备 0 到 1 架构 Agent、RAG 可观测性平台经验，熟悉运筹优化算法与 Python/FastAPI/SpringBoot 开发体系。');
            break;
        case 'skills':
            printToTerminal('>>> 当前视图核心技能：');
            if (document.body.classList.contains('dev-active')) {
                printToTerminal('[AI & Agent] LangChain, LangGraph, Reflexion, FastMCP/MCP, ChromaDB');
                printToTerminal('[后端开发] Python, FastAPI, SpringBoot, Docker, MySQL, Pytest E2E');
                printToTerminal('[运筹算法] NSGA-II 规划, A* 启发式剪枝, SVM, 随机森林, K-Means');
            } else {
                printToTerminal('[AI评测] RAGAS 指标, LLM-as-a-Judge 架构, Prompt 优化, A/B 测试');
                printToTerminal('[产品设计] Visio 业务流, Xmind 原型, Axure 脑图, 需求生命周期管理');
                printToTerminal('[项目管理] 跨团队沟通协调, 预算管理, 千人晚会全生命周期执行交付');
            }
            break;
        case 'cae-agent':
            printToTerminal('>>> CAE-Agent 仿真智能体架构核心参数：');
            printToTerminal('• 编排底座: LangGraph 有向有权图状态机');
            printToTerminal('• 记忆管理: 短期滑动 Compressor + 长期 ChromaDB 向量经验闪回');
            printToTerminal('• 通信协议: FastMCP Server 封装 + HTTP/SSE 异步双向通道');
            printToTerminal('• 自愈机制: Critic 物理准入阀门 + Reflection 循环迭代（仿真率 30% -> 85%）');
            break;
        case 'agentops':
            printToTerminal('>>> AgentOps 链路评测平台核心亮点：');
            printToTerminal('• 可观测性: 封装 Trace/Span 装饰器，透传 Trace ID 穿透 MCP 管道');
            printToTerminal('• 双轨评估: RAGAS 评估库（检索）+ DeepSeek 裁判大模型（决策）');
            printToTerminal('• 数据收益: 人工 Review 成本缩减 70%，问题排查缩短至 5 分钟内');
            break;
        case 'contact':
            printToTerminal('>>> 正在拉取联系人名片...');
            printToTerminal('📱 电话/微信: (+86) 183-8502-8811');
            printToTerminal('📧 电子邮件: mahm8811@163.com');
            printToTerminal('🐙 GitHub: github.com/YOUR_GITHUB_USERNAME');
            break;
        case 'clear':
            // 移除除最后输入行以外的所有子节点
            while (terminalScreen.childNodes.length > 2) {
                terminalScreen.removeChild(terminalScreen.firstChild);
            }
            break;
        default:
            printToTerminal(`Command not found: <span style="color: #f85149;">${cmd}</span>. Type <span class="term-highlight">help</span> for options.`);
    }
}

// --- 动态Canvas粒子效果背景 (Particle System) ---
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 65;
const connectionDistance = 100;
let mouse = { x: null, y: null, radius: 120 };

// 监听窗口尺寸
window.addEventListener('resize', resizeCanvas);
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

// 鼠标位置监听
window.addEventListener('mousemove', function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
});

window.addEventListener('mouseleave', function() {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        // 运动方向与速度
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
    }

    draw() {
        ctx.fillStyle = 'rgba(56, 139, 253, 0.45)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        // 自然漫步飘动
        this.x += this.vx;
        this.y += this.vy;

        // 碰撞边界反弹
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

        // 鼠标斥力微交互
        if (mouse.x != null && mouse.y != null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouse.radius) {
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let force = (mouse.radius - distance) / mouse.radius;
                let directionX = forceDirectionX * force * this.density * 0.15;
                let directionY = forceDirectionY * force * this.density * 0.15;
                this.x -= directionX;
                this.y -= directionY;
            }
        }
    }
}

// 初始化粒子群
function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}
initParticles();

// 连接附近的粒子
function connectParticles() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            let dx = particles[a].x - particles[b].x;
            let dy = particles[a].y - particles[b].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                let opacity = (1 - (distance / connectionDistance)) * 0.15;
                ctx.strokeStyle = `rgba(56, 139, 253, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

// 渲染循环
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
    }
    connectParticles();
    requestAnimationFrame(animate);
}
animate();
