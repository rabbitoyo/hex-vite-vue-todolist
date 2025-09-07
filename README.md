## Vue3 前端新手營 Vite & Vue - Todolist API 整合證書任務

此專案為六角學院 2025 Vue3 前端新手營 Vite & Vue 作業

- [GitHub Page Demo](https://rabbitoyo.github.io/hex-vite-vue-todolist/)
- [Figma Project](https://www.figma.com/design/MFSk8P5jmmC2ns9V9YeCzM/TodoList?node-id=0-1&t=j2ACFDnQScSBodiR-0)
- [Layout CodePen](https://codepen.io/hexschool/pen/qBzEMdm)

### 🛠 使用技術

- Bootstrap 5
- Vite
- Vue 3 Router

### 💻 安裝執行

- 將專案 clone 到本地端

```bash
git clone https://github.com/rabbitoyo/hex-vite-vue-todolist.git
```

- 安裝執行

```bash
npm install				// 安裝
npm run dev				// 執行
```

- 瀏覽器訪問

```bash
http://localhost:5173/
```

### 🗂 專案設置

```
todolist/
├── src/
│   ├── components/             # 可複用元件
│   │   ├── TodoForm.vue        # 新增待辦表單
│   │   ├── TodoList.vue        # 待辦列表
│   │   ├── TodoItem.vue        # 單個待辦項目
│   │   └── Notification.vue    # 通知系統
│   ├── views/                  # 頁面元件
│   │   ├── TodoListView.vue    # TodoList 主頁
│   │   ├── LoginView.vue       # 登入頁
│   │   └── RegisterView.vue    # 註冊頁
│   ├── router/                 # 路由設定
│   │   └── index.js
│   ├── utils/                  # 工具函式
│   │   └── api.js              # API 請求
│   ├── assets/                 # 靜態資源
│   │   └── styles/             # CSS 樣式
│   └── App.vue
└── package.json
```

```
TodoListView.vue
├── TodoForm.vue
│   └── Emit: add-todo (content) → TodoListView 接收後加入到 todos
│
└── TodoList.vue
    ├── Props: todos
    ├── Computed: filterTodos (根據 filterStatus 篩選)
    ├── Emit: remove-todo (id) → TodoListView 接收後從 todos 中刪除
    │
    └── TodoItem.vue
        ├── Props: todo
        ├── v-model: todo.status（完成狀態）
        └── Emit: remove-todo (id) → TodoList.vue 中轉給 TodoListView
```

### 🌟 未來規劃
