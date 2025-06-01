#stage1
FROM node:18-alpine AS builder 

WORKDIR /app


COPY package*.json ./

RUN npm install --production=false
# RUN npm install -g serve --production=false

COPY . .

RUN npm run build 


#stage2  


FROM gcr.io/distroless/nodejs18-debian11

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules


EXPOSE 5173
CMD ["/app/node_modules/.bin/serve", "-s", "./dist", "-l", "5173"]
