## STAGE 1 -- ANGULAR BUILD STAGE
FROM node:latest AS NODE_BUILD
LABEL author="Femi Abolaji"
WORKDIR /app
COPY ./package.json package.json
RUN npm install
COPY . .
RUN npm run build -- --prod

## STAGE 2 -- NGINX BUILD STAGE
FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=NODE_BUILD /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
