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
  },
  {
    id: 'url-encode',
    name: 'URL 编解码',
    icon: '🔗',
    desc: 'URL 编码和解码，支持中文和特殊字符',
    tag: '编码',
    path: './tools/url-encode/index.html'
  },
  {
    id: 'html-encode',
    name: 'HTML 实体编解码',
    icon: '📝',
    desc: 'HTML 特殊字符转实体编码',
    tag: '编码',
    path: './tools/html-encode/index.html'
  },
  {
    id: 'md5',
    name: 'MD5 加密',
    icon: '🔒',
    desc: '文本的 MD5 哈希计算',
    tag: '加密',
    path: './tools/md5/index.html'
  },
  {
    id: 'text-diff',
    name: '文本对比',
    icon: '📊',
    desc: '对比两段文本的差异，高亮显示',
    tag: '文本',
    path: './tools/text-diff/index.html'
  },
  {
    id: 'regex',
    name: '正则表达式测试',
    icon: '🔍',
    desc: '正则表达式在线测试和调试',
    tag: '开发',
    path: './tools/regex/index.html'
  },
  {
    id: 'uuid',
    name: 'UUID 生成器',
    icon: '🆔',
    desc: '生成标准 UUID/GUID',
    tag: '生成',
    path: './tools/uuid/index.html'
  },
  {
    id: 'unit-convert',
    name: '单位换算',
    icon: '📏',
    desc: '长度、重量、温度、数据存储等单位换算',
    tag: '换算',
    path: './tools/unit-convert/index.html'
  },
  {
    id: 'calculator',
    name: '科学计算器',
    icon: '🧮',
    desc: '支持复杂数学运算的科学计算器',
    tag: '计算',
    path: './tools/calculator/index.html'
  },
  {
    id: 'ip-query',
    name: 'IP 地址查询',
    icon: '🌐',
    desc: '查询 IP 地址信息和归属地',
    tag: '网络',
    path: './tools/ip-query/index.html'
  },
  {
    id: 'cron',
    name: 'Cron 表达式解析',
    icon: '⏲️',
    desc: 'Cron 表达式生成和解析',
    tag: '开发',
    path: './tools/cron/index.html'
  },
  {
    id: 'image-compress',
    name: '图片压缩',
    icon: '🖼️',
    desc: '在线图片压缩，支持 JPG/PNG',
    tag: '图片',
    path: './tools/image-compress/index.html'
  },
  {
    id: 'countdown',
    name: '倒计时工具',
    icon: '⏳',
    desc: '设置倒计时，支持全屏显示',
    tag: '时间',
    path: './tools/countdown/index.html'
  }
];

// 导出工具列表
if (typeof module !== 'undefined' && module.exports) {
  module.exports = tools;
}
