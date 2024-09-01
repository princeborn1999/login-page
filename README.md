# 專案簡介

[專案網址](https://princeborn1999.github.io/login-page/)

登入頁面專案，使用 **React** 和 **TypeScript** 開發。專案包括一個簡單的登入表單，具有基本的輸入驗證功能。頁面樣式使用純 **CSS** 編寫，不依賴任何外部框架。

## 專案結構

- `src/`：

  - `components/`：包含各種 React 元件
    - `InputComponent.tsx`：輸入框元件
    - `CheckBoxComponent.tsx`：選取框元件
    - `CheckListComponent.tsx`：確認表單元件
    - `ErrorMessageComponent.tsx`：錯誤訊息元件
    - `SignUpFormComponent.tsx`：註冊元件
  - `styles/`：CSS 樣式資料夾
    - `InputComponent.css`：輸入框元件的樣式
    - `CheckBoxComponent.css`：選取框元件的樣式
    - `CheckListComponent.css`：確認表單元件的樣式
    - `ErrorMessageComponent.css`：錯誤信息元件的樣式
    - `SignUpFormComponent.css`：註冊元件的樣式

- `App.tsx`：主應用元件

## 安裝與運行

```bash
# Step 1: 複製專案到本地
git clone https://github.com/princeborn1999/login-page.git

# Step 2: 進入專案資料夾
cd login-page

# Step 3: 安裝所需的 npm 套件
npm install

# Step 4: 啟動專案
npm start

# Step 5: 打開瀏覽器並訪問 http://localhost:3000
```

## 專案部署

```bash
# Step 1: 構建專案
npm run predeploy

# Step 2: 部署至 GitHub Pages
npm run deploy
```
