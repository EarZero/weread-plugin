class WeReadPanel {
    constructor() {
        this.isDarkTheme = false;
        this.setupUI();
        this.bindEvents();
    }
    
    setupUI() {
        try {
            const status = document.getElementById('status');
            status.textContent = '✅ JavaScript环境已加载，扩展就绪！';
            
            const output = document.getElementById('output');
            output.innerHTML = `
            <h3>🎯 功能说明</h3>
            <ul>
                <li>📖 点击"加载微信读书"按钮嵌入微信读书页面</li>
                <li>🔄 使用"刷新内容"重新加载页面</li>
                <li>🌙 "切换主题"在明暗模式间切换</li>
                <li>⚡ 所有功能都由JavaScript代码驱动</li>
            </ul>
            <div id="js-info">
                <h4>🔧 JavaScript运行信息</h4>
                <p>当前时间: <span id="current-time"></span></p>
                <p>扩展状态: <span style="color: green;">运行中</span></p>
            </div>
            `;
            
            this.updateTime();
            console.log('✅ UI界面初始化完成');
            
        } catch (e) {
            console.error('设置UI时出错:', e);
            document.getElementById('status').textContent = `❌ UI设置错误: ${e.message}`;
        }
    }
    
    bindEvents() {
        try {
            const loadBtn = document.getElementById('load-weread');
            const refreshBtn = document.getElementById('refresh-content');
            const themeBtn = document.getElementById('toggle-theme');
            
            if (loadBtn) {
                loadBtn.addEventListener('click', (e) => this.loadWeread(e));
                console.log('✅ 加载按钮事件已绑定');
            } else {
                console.log('❌ 找不到加载按钮');
            }
            
            if (refreshBtn) {
                refreshBtn.addEventListener('click', (e) => this.refreshContent(e));
                console.log('✅ 刷新按钮事件已绑定');
            } else {
                console.log('❌ 找不到刷新按钮');
            }
            
            if (themeBtn) {
                themeBtn.addEventListener('click', (e) => this.toggleTheme(e));
                console.log('✅ 主题按钮事件已绑定');
            } else {
                console.log('❌ 找不到主题按钮');
            }
            
        } catch (e) {
            console.error('绑定事件时出错:', e);
            document.getElementById('status').textContent = `❌ 事件绑定错误: ${e.message}`;
        }
    }
    
    loadWeread(event) {
        try {
            const status = document.getElementById('status');
            status.textContent = '📚 正在加载微信读书...';
            
            const frame = document.getElementById('weread-frame');
            
            // 添加iframe加载事件监听
            const onLoad = () => {
                status.textContent = '✅ 微信读书已加载完成！可以登录和阅读';
            };
            
            const onError = () => {
                status.textContent = '❌ 加载失败，请检查网络连接';
            };
            
            frame.addEventListener('load', onLoad);
            frame.addEventListener('error', onError);
            
            // 设置iframe属性以支持登录
            frame.src = 'https://weread.qq.com/';
            frame.style.display = 'block';
            frame.allow = 'camera; microphone; geolocation';
            
            // 备用超时检查
            setTimeout(() => {
                if (frame.style.display === 'block' && !frame.src) {
                    status.textContent = '⚠️ 加载超时，请尝试刷新';
                }
            }, 10000);
            
        } catch (e) {
            document.getElementById('status').textContent = `❌ 错误: ${e.message}`;
            console.error('加载微信读书时出错:', e);
        }
    }
    
    refreshContent(event) {
        try {
            const frame = document.getElementById('weread-frame');
            const status = document.getElementById('status');
            
            if (frame.src && frame.src !== '') {
                status.textContent = '🔄 正在刷新内容...';
                // 先清空再重新设置src来强制刷新
                const currentSrc = frame.src;
                frame.src = '';
                
                setTimeout(() => {
                    frame.src = currentSrc;
                    status.textContent = '✅ 内容已刷新完成';
                }, 100);
            } else {
                status.textContent = '⚠️ 请先加载微信读书';
            }
            
        } catch (e) {
            document.getElementById('status').textContent = `❌ 刷新失败: ${e.message}`;
            console.error('刷新内容时出错:', e);
        }
    }
    
    toggleTheme(event) {
        const body = document.body;
        const status = document.getElementById('status');
        
        if (this.isDarkTheme) {
            body.style.backgroundColor = '#f5f5f5';
            body.style.color = '#333';
            status.textContent = '☀️ 已切换到明亮主题';
        } else {
            body.style.backgroundColor = '#2d3748';
            body.style.color = '#e2e8f0';
            status.textContent = '🌙 已切换到暗黑主题';
        }
        
        this.isDarkTheme = !this.isDarkTheme;
    }
    
    updateTime() {
        const now = new Date();
        const timeStr = now.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const timeElement = document.getElementById('current-time');
        if (timeElement) {
            timeElement.textContent = timeStr;
        }
        
        // 每秒更新一次时间
        setTimeout(() => this.updateTime(), 1000);
    }
}

// 等待DOM加载完成后初始化应用
document.addEventListener('DOMContentLoaded', function() {
    try {
        console.log('🚀 开始初始化WeRead Panel...');
        const app = new WeReadPanel();
        document.getElementById('status').textContent = '🚀 WeRead Panel 已启动！';
        console.log('✅ WeRead Panel 初始化完成');
        
        // 验证关键元素是否存在
        const elementsToCheck = ['load-weread', 'refresh-content', 'toggle-theme', 'weread-frame', 'status'];
        elementsToCheck.forEach(elementId => {
            const element = document.getElementById(elementId);
            if (element) {
                console.log(`✅ 元素 ${elementId} 找到`);
            } else {
                console.log(`❌ 元素 ${elementId} 未找到`);
            }
        });
        
    } catch (e) {
        console.error('❌ 初始化失败:', e);
        const statusElement = document.getElementById('status');
        if (statusElement) {
            statusElement.textContent = `❌ 初始化失败: ${e.message}`;
        }
    }
});