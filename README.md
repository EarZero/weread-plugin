# WeRead Side Panel - 微信读书Chrome扩展

这是一个使用JavaScript开发的Chrome侧边栏扩展，专为微信读书设计。

## 🌟 特性

- ⚡ **JavaScript驱动**: 使用现代JavaScript开发，性能优异
- 📚 **微信读书集成**: 在侧边栏中嵌入微信读书页面
- 🎨 **现代UI**: 美观的渐变设计和响应式布局
- 🌙 **主题切换**: 支持明暗主题切换
- ⏰ **实时更新**: JavaScript驱动的实时时间显示
- 🔄 **动态交互**: 完全由JavaScript代码控制的用户界面
- 🛡️ **安全合规**: 符合Chrome Manifest V3和CSP安全策略

## 📁 项目结构

```
weread-plugin/
├── manifest.json          # Chrome扩展清单文件
├── background.js          # 后台服务脚本
├── sidepanel.html         # 侧边栏主页面
├── sidepanel.js           # 主要JavaScript逻辑
├── icon.svg              # 扩展图标
└── README.md             # 项目说明文档
```

## 🚀 安装方法

1. **下载项目文件**
   - 确保所有文件都在同一个文件夹中

2. **打开Chrome扩展管理页面**
   - 在Chrome浏览器中访问 `chrome://extensions/`
   - 或者通过菜单：更多工具 → 扩展程序

3. **启用开发者模式**
   - 在扩展管理页面右上角，打开"开发者模式"开关

4. **加载扩展**
   - 点击"加载已解压的扩展程序"
   - 选择包含项目文件的文件夹
   - 点击"选择文件夹"

5. **固定扩展**
   - 在Chrome工具栏中找到扩展图标
   - 点击拼图图标，然后点击WeRead扩展旁边的图钉图标

## 🎯 使用方法

1. **打开侧边栏**
   - 点击Chrome工具栏中的WeRead扩展图标
   - 侧边栏将自动打开

2. **加载微信读书**
   - 在侧边栏中点击"加载微信读书"按钮
   - 微信读书页面将在iframe中加载

3. **使用功能**
   - **刷新内容**: 重新加载微信读书页面
   - **切换主题**: 在明暗主题间切换
   - **查看状态**: 实时查看扩展运行状态和当前时间

## 🔧 技术实现

### JavaScript架构
- 使用现代ES6+ JavaScript开发
- 代码分离：HTML、CSS和JavaScript完全分离
- 符合Chrome扩展Content Security Policy要求

### 核心功能
```javascript
class WeReadPanel {
    constructor() {
        this.setupUI();        // 初始化界面
        this.bindEvents();     // 绑定事件
    }
    
    loadWeread(event) {
        // 加载微信读书页面
        const frame = document.getElementById('weread-frame');
        frame.src = 'https://weread.qq.com/';
    }
}
```

### Chrome扩展API
- 使用Manifest V3规范
- 支持侧边栏API（Side Panel API）
- 配置了必要的权限和CSP策略

## 🛠️ 开发说明

### 依赖项
- Chrome浏览器（版本114+）
- 无外部依赖，纯原生JavaScript实现

### 自定义开发
1. **修改JavaScript代码**: 编辑`sidepanel.js`中的脚本逻辑
2. **更新样式**: 修改`sidepanel.html`中的CSS样式
3. **添加功能**: 在`WeReadPanel`类中添加新方法
4. **更新权限**: 在`manifest.json`中添加所需权限

### 调试技巧
- 在侧边栏中右键点击 → 检查，打开开发者工具
- JavaScript错误会显示在控制台中
- 使用`console.log()`函数在控制台输出调试信息

## 📝 注意事项

1. **安全策略**: 严格遵循Chrome扩展CSP安全策略
2. **跨域限制**: 微信读书可能有跨域限制，某些功能可能受限
3. **性能优化**: 使用原生JavaScript，性能表现优异
4. **兼容性**: 仅支持Chrome浏览器的侧边栏功能

## 🔮 未来改进

- [ ] 添加书签管理功能
- [ ] 支持阅读进度同步
- [ ] 添加笔记和高亮功能
- [ ] 优化加载性能
- [ ] 支持离线模式
- [ ] 添加更多主题选项

## 📄 许可证

本项目仅供学习和研究使用。请遵守微信读书的使用条款。

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目！

---

**享受使用JavaScript开发Chrome扩展的乐趣！** ⚡✨