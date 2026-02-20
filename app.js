// 应用逻辑 - 自动索引和搜索
(function() {
  const toolsGrid = document.getElementById('toolsGrid');
  const searchInput = document.getElementById('searchInput');
  
  // 渲染工具卡片
  function renderTools(toolsToRender) {
    toolsGrid.innerHTML = toolsToRender.map(tool => `
      <a href="${tool.path}" class="tool-card" data-id="${tool.id}" data-name="${tool.name}" data-desc="${tool.desc}">
        <div class="tool-icon">${tool.icon}</div>
        <div class="tool-name">${tool.name}</div>
        <div class="tool-desc">${tool.desc}</div>
        <span class="tool-tag">${tool.tag}</span>
      </a>
    `).join('');
  }
  
  // 搜索功能
  function searchTools(query) {
    const lowerQuery = query.toLowerCase().trim();
    if (!lowerQuery) {
      renderTools(tools);
      return;
    }
    
    const filtered = tools.filter(tool => 
      tool.name.toLowerCase().includes(lowerQuery) ||
      tool.desc.toLowerCase().includes(lowerQuery) ||
      tool.tag.toLowerCase().includes(lowerQuery)
    );
    
    renderTools(filtered);
  }
  
  // 初始化
  renderTools(tools);
  
  // 绑定搜索事件
  searchInput.addEventListener('input', (e) => {
    searchTools(e.target.value);
  });
  
  // 自动索引：扫描 tools 目录（如果有新工具添加）
  function autoIndex() {
    console.log('工具箱已加载，共', tools.length, '个工具');
    console.log('工具列表：', tools.map(t => t.name).join(', '));
  }
  
  autoIndex();
})();
