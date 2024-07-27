FROM node:20-alpine

ENV DATABASE_URL="file:./dev.db"

WORKDIR /app

COPY package*.json ./
COPY ./prisma/schema.prisma ./prisma/schema.prisma
RUN npm ci --omit=dev
RUN npx prisma generate
RUN npx prisma db push

COPY ./dist/src ./

EXPOSE 3000

CMD ["node", "server.js"]