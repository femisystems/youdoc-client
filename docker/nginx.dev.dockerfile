FROM nginx:alpine
LABEL author="Femi Abolaji"
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
