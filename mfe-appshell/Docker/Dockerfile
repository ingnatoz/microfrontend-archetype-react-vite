# App Shell image: builds with Node and serves the static files with nginx, without root.
# Build context: the project folder (see Docker/compose.yml).

# ---------- 1. Build ----------
FROM node:24-alpine AS build
WORKDIR /app

# Manifests first: if they do not change, Docker reuses the `npm ci` layer.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# Public URL of mfe-remote (the one the browser uses). Set at build time.
ARG MFE_REMOTE_URL=http://localhost:8081
RUN npm run build

# ---------- 2. Runtime ----------
FROM nginx:1.30-alpine

COPY Docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY Docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# nginx listens on 8080 and only writes to /tmp, so it does not need root.
USER nginx
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/status || exit 1
