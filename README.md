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
```

## 1. Crear una red interna de docker

```bash
docker network create <nombre_de_red>
```

## 2. Servidor (`server`)

Primero compilamos la imagen:

```bash
docker build -t server ./server
```

Luego ejecutamos el contenedor:

```bash
docker run -d -p 3000:3000 --network <nombre_de_red> --name app-server server
```

## 3. Cliente (`client`)

Primero compilamos la imagen:

```bash
docker build -t client ./client
```

Luego ejecutamos el contenedor:

```bash
docker run -d -p 8080:80 --network <nombre_de_red> --name app-client client
```

## Docker Compose

Para una versión con docker compose revisar [esta rama.](https://github.com/jmontecinos-bsale/docker-tarea/tree/docker-compose)