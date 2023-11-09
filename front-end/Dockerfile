FROM node:18

WORKDIR /app

COPY package.json package-lock.json /app/
COPY entrypoint.sh /entrypoint.sh

EXPOSE 5173

RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]