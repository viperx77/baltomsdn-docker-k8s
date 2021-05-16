FROM node:12.13-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=development
COPY . .
RUN npm run build && npm run pretypeorm
EXPOSE 3000
CMD ["node", "dist/src/main"]