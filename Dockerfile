FROM node:alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install -g @nestjs/cli
RUN npm install --production
COPY . .
EXPOSE 80
ENTRYPOINT ["npm", "start"]