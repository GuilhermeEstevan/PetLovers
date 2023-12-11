FROM node:18

WORKDIR /app

COPY package.json /app

RUN npm install --platform=linux

COPY . /app

ENV PORT=5173

CMD ["npm", "run", "dev"]
