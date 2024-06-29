# Etapa de construcción
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production
RUN ls -la /app/dist/pymeexpress

# Etapa de Nginx
FROM nginx:1.24-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/pymeexpress/. /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html && chmod -R 755 /usr/share/nginx/html
EXPOSE 3006
CMD ["nginx", "-g", "daemon off;"]