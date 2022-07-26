# FROM node:16-alpine AS development
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE ${PORT}
# RUN chown -R node:node /app
# USER node
# CMD ["npm", "run", "dev"]

# FROM node:16-alpine AS production
# WORKDIR /app
# COPY package.json ./
# RUN npm install --only=prod
# COPY . .
# RUN npm run build
# EXPOSE ${PORT}
# RUN chown -R 1000:1000 /app
# USER 1000
# CMD ["npm", "start"]