# Tarea Docker

```text
.
├── client/                  # Frontend de la aplicación
│   ├── index.html           
│   ├── app.js                
│   ├── default.conf         
│   └── Dockerfile           
├── server/                  # Backend de la aplicación
│   ├── server.js            
│   ├── package.json         
│   ├── index.js             
│   └── Dockerfile           
├── .env                     
├── .gitignore   
├── docker-compose.yml            
```

## 1. Levantar contenedores

Si se necesita compilar las imagenes:

```bash
docker compose up --build -d
```

Si las imagenes ya están construidas:

```bash
docker compose up -d
```

## 2. Detener contenedores

```bash
docker compose down
```