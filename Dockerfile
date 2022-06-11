FROM node:16-alpine
ADD . ./
ENV DATABASE_URL=$DATABASE_URL
RUN npm install -ci
CMD ["npm", "start"]
