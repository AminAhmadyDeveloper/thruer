FROM node:22.18.0-alpine

RUN apk add --no-cache curl tar gzip bash \
    && curl -fsSL https://bun.sh/install | bash \
    && mv /root/.bun/bin/bun /usr/local/bin/

RUN bun --version

WORKDIR /app

COPY package.json bun.lock ./
COPY scripts ./scripts

RUN ls -l

RUN bun install

COPY . .

RUN bun run build

EXPOSE 3000

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

CMD ["bun", "run", "start"]