## Despliegue en VPS (Docker + Nginx + HTTPS)

### 1) Requisitos
- Ubuntu 22.04/24.04 con acceso sudo
- Docker y Docker Compose
- Dominio `ignacioaguirre.site` apuntando a la IP del VPS

### 2) Instalar Docker
```bash
sudo apt-get update && sudo apt-get install -y ca-certificates curl
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER && newgrp docker
```

### 3) Variables de entorno
Crear `.env.production` en la raíz del proyecto:
```env
NEXT_PUBLIC_SITE_URL=https://ignacioaguirre.site
PORT=3000
```

### 4) Levantar el contenedor
```bash
docker compose --env-file .env.production up -d --build
```
La app quedará en el puerto 3100 del host.

### 5) Nginx (reverse proxy)
Copiar `deploy/nginx.conf` a `/etc/nginx/sites-available/portfolio`:
```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/portfolio
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio
sudo nginx -t && sudo systemctl reload nginx
```

### 6) HTTPS con Certbot
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d ignacioaguirre.site --redirect -m TU_EMAIL -n
```

### 7) Logs y administración
```bash
docker compose logs -f
docker compose restart web
docker compose pull && docker compose up -d --build
```

### Notas
- El contenedor expone `3000` internamente y se publica en `3100` externamente.
- Ajusta `deploy/nginx.conf` si quieres servir detrás de otro proxy o cambiar puertos.

