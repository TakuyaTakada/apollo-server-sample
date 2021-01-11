# Development image
FROM node:12.20.0 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./

EXPOSE 4000

CMD ["npm", "run", "start"]

# Builder image
FROM development AS builder

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