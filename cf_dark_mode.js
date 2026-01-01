// ==UserScript==
// @name         Cloudflare Dark Mode
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  add dark mode to the cloudflare dashboard
// @author       kyle_A_10000 ChatGPT
// @match        https://dash.cloudflare.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=cloudflare.com
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  const STYLE_ID = 'cf-dark-style';
  const BTN_ID = 'cf-dark-toggle';
  const STORAGE_KEY = 'cf-dark-enabled';

  /* ========= Dark Theme CSS（Cloudflare 定向） ========= */
  const darkCSS = `
  /* 页面基础 */
  html, body {
    background: #0e1117 !important;
    color: #c9d1d9 !important;
  }

  /* Cloudflare App Root */
  #app, [data-testid="app-root"] {
    background: #0e1117 !important;
  }

  /* 顶栏 / 侧栏 */
  header, nav, aside {
    background: #010409 !important;
    border-color: #30363d !important;
  }

  /* 主内容区域 */
  main {
    background: #0e1117 !important;
  }

  /* 卡片 / Panel */
  [class*="Card"],
  [class*="Panel"],
  [class*="Box"] {
    background: #161b22 !important;
    border-color: #30363d !important;
    color: #c9d1d9 !important;
  }

  /* 表格 */
  table {
    background: #0e1117 !important;
    color: #c9d1d9 !important;
  }
  th {
    background: #161b22 !important;
    border-color: #30363d !important;
  }
  td {
    border-color: #30363d !important;
  }

  /* 输入组件 */
  input, textarea, select {
    background: #0d1117 !important;
    color: #c9d1d9 !important;
    border-color: #30363d !important;
  }
  input::placeholder, textarea::placeholder {
    color: #8b949e !important;
  }

  /* 按钮 */
  button {
    background: #21262d !important;
    color: #c9d1d9 !important;
    border-color: #30363d !important;
  }
  button:hover {
    background: #30363d !important;
  }

  /* 链接 */
  a {
    color: #58a6ff !important;
  }
  a:hover {
    color: #79c0ff !important;
  }

  /* 弹窗 */
  [role="dialog"],
  [class*="Modal"] {
    background: #161b22 !important;
    border-color: #30363d !important;
    color: #c9d1d9 !important;
  }
  `;

  /* ========= 状态 ========= */
  const enabled = () => localStorage.getItem(STORAGE_KEY) === '1';

  function enableDark() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = darkCSS;
    document.head.appendChild(style);
    localStorage.setItem(STORAGE_KEY, '1');
    updateButton();
  }

  function disableDark() {
    const style = document.getElementById(STYLE_ID);
    if (style) style.remove();
    localStorage.setItem(STORAGE_KEY, '0');
    updateButton();
  }

  /* ========= Toggle Button ========= */
  function updateButton() {
    const btn = document.getElementById(BTN_ID);
    if (!btn) return;
    btn.textContent = enabled() ? '🌙 Dark ON' : '☀️ Dark OFF';
  }

  function createButton() {
    if (document.getElementById(BTN_ID)) return;

    const btn = document.createElement('div');
    btn.id = BTN_ID;
    btn.style.cssText = `
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 99999;
      padding: 8px 14px;
      background: #161b22;
      color: #c9d1d9;
      border: 1px solid #30363d;
      border-radius: 999px;
      font-size: 12px;
      cursor: pointer;
      user-select: none;
      box-shadow: 0 6px 20px rgba(0,0,0,.35);
    `;

    btn.onclick = () => (enabled() ? disableDark() : enableDark());
    document.body.appendChild(btn);
    updateButton();
  }

  /* ========= Init（只执行一次） ========= */
  function init() {
    createButton();
    if (enabled()) enableDark();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();