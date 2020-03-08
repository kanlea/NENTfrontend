FROM node

WORKDIR /app

COPY db.js server.js package.json ./
RUN npm install

CMD ["npm", "start"]