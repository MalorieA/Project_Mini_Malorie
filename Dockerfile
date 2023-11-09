# Build stage
FROM alpine:3.15 as builder

WORKDIR /project_mini_malorie
COPY package.json package-lock.json* ./
RUN apk add --update nodejs npm
RUN adduser -D Malorie
USER Malorie
COPY . /project_mini_malorie

USER root
RUN npm install -g typescript
RUN npm install
RUN mkdir -p /project_mini_malorie/dist && chown -R Malorie:Malorie /project_mini_malorie/dist


USER Malorie

RUN npm run build

# Runner stage
FROM alpine:3.15 as runner


RUN apk --no-cache add ca-certificates nodejs 
COPY --from=builder /project_mini_malorie/dist /app
COPY --from=builder /project_mini_malorie/node_modules /app/node_modules

CMD ["node", "/app/index.js"]
