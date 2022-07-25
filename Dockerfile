FROM node:16-alpine AS development
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]
 
FROM development AS builder
RUN npm run build

FROM builder AS production
# ENV NODE_ENV production
# ENV PORT ${PORT}
CMD ["npm", "start"]

# CMD node /app/dist/index.js
