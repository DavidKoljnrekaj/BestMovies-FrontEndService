# frontend-service/Dockerfile
FROM node:18.14.0 as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

# Copy the entire application directory
COPY . .
RUN npm run build

FROM nginx:alpine

COPY default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
