# Development image
FROM node:12.20.0 AS development

WORKDIR /app

COPY .babelrc ./
COPY package*.json ./

RUN npm install

EXPOSE 4000

CMD ["npm", "run", "start"]

# Builder image
FROM node:12.20.0 AS builder

WORKDIR /app

COPY --from=development /app/node_modules ./node_modules
COPY .babelrc ./
COPY package*.json ./
COPY src ./src

RUN npm run build

# Production image
FROM node:12.20.0-alpine as production

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 4000

CMD ["node", "dist/index.js"]