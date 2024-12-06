# 使用 Node.js 22
FROM node:22-alpine

# 建立 app 資料夾
WORKDIR /app

# 複製 package.json 到工作目錄
COPY package*.json ./

# 安裝相依套件
RUN yarn install

# 複製所有檔案到工作目錄
COPY . .

# 開啟 8080 port
EXPOSE 8080

# 啟動 Vite 開發伺服器
CMD ["yarn", "dev"]