FROM node:16-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
RUN chown -R node:node /app
USER node
CMD ["npm", "run", "dev"]
 
FROM development AS builder
RUN npm run build

FROM builder AS production
ENV NODE_ENV production
ENV PORT ${PORT}
RUN chown -R 1000:1000 /app
USER 1000
CMD ["npm", "start"]

# CMD node /app/dist/index.js
