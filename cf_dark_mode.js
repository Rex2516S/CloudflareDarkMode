// ==UserScript==
// @name         Cloudflare Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  add dark mode to the cloudflare dashboard
// @author       kyle_A_10000 ChatGPT
// @match        https://dash.cloudflare.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudflare.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  GM_addStyle(`
    /* ===== 全局背景 ===== */
    html, body {
      background-color: #0e1117 !important;
      color: #c9d1d9 !important;
    }

    /* 主容器 */
    [class*="AppShell"],
    [class*="Layout"],
    [class*="Page"],
    main {
      background-color: #0e1117 !important;
    }

    /* 卡片 / 面板 */
    div[class*="Card"],
    div[class*="Panel"],
    section,
    article {
      background-color: #161b22 !important;
      color: #c9d1d9 !important;
      border-color: #30363d !important;
    }

    /* 顶部导航栏 */
    header,
    nav {
      background-color: #010409 !important;
      border-bottom: 1px solid #30363d !important;
    }

    /* 侧边栏 */
    aside {
      background-color: #010409 !important;
      border-right: 1px solid #30363d !important;
    }

    /* 表格 */
    table {
      background-color: #0e1117 !important;
      color: #c9d1d9 !important;
    }

    th {
      background-color: #161b22 !important;
      border-color: #30363d !important;
    }

    td {
      border-color: #30363d !important;
    }

    tr:hover {
      background-color: #1f2933 !important;
    }

    /* 输入框 / 下拉框 */
    input,
    textarea,
    select {
      background-color: #0d1117 !important;
      color: #c9d1d9 !important;
      border: 1px solid #30363d !important;
    }

    input::placeholder,
    textarea::placeholder {
      color: #8b949e !important;
    }

    /* 按钮 */
    button {
      background-color: #21262d !important;
      color: #c9d1d9 !important;
      border: 1px solid #30363d !important;
    }

    button:hover {
      background-color: #30363d !important;
    }

    /* 链接 */
    a {
      color: #58a6ff !important;
    }

    a:hover {
      color: #79c0ff !important;
    }

    /* 弹窗 / Modal */
    [role="dialog"],
    [class*="Modal"] {
      background-color: #161b22 !important;
      color: #c9d1d9 !important;
      border-color: #30363d !important;
    }

    /* 滚动条（Chrome / Edge） */
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: #0e1117;
    }

    ::-webkit-scrollbar-thumb {
      background: #30363d;
      border-radius: 6px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #484f58;
    }
  `);
})();