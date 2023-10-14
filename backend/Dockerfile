FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install cors
RUN npm install dotenv
COPY . .
CMD ["node", "app.js"]
