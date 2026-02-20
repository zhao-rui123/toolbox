// 工具列表配置 - 添加新工具只需在这里添加对象
const tools = [
  {
    id: 'json-formatter',
    name: 'JSON 格式化',
    icon: '📋',
    desc: 'JSON 数据的格式化、压缩和验证工具',
    tag: '开发',
    path: './tools/json-formatter/index.html'
  },
  {
    id: 'base64',
    name: 'Base64 编解码',
    icon: '🔐',
    desc: 'Base64 编码和解码工具，支持文本和图片',
    tag: '编码',
    path: './tools/base64/index.html'
  },
  {
    id: 'timestamp',
    name: '时间戳转换',
    icon: '⏰',
    desc: 'Unix 时间戳与日期时间相互转换',
    tag: '时间',
    path: './tools/timestamp/index.html'
  },
  {
    id: 'color-picker',
    name: '颜色选择器',
    icon: '🎨',
    desc: '颜色选择、转换和调色板生成',
    tag: '设计',
    path: './tools/color-picker/index.html'
  },
  {
    id: 'qr-code',
    name: '二维码生成',
    icon: '▣',
    desc: '文本和链接转二维码，支持自定义样式',
    tag: '生成',
    path: './tools/qr-code/index.html'
  },
  {
    id: 'password',
    name: '密码生成器',
    icon: '🔑',
    desc: '生成安全随机密码，支持自定义规则',
    tag: '安全',
    path: './tools/password/index.html'
  }
];

// 导出工具列表
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tools;
}
