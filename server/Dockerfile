#Imagen base
FROM node:22-alpine

#Etiquetas
LABEL dev="jmontecinos-bsale"
LABEL description="Tarea docker"

#Directorio de trabajo
WORKDIR /server

#Copiar archivos
COPY package*.json ./

#Ejecución de comandos durante el build, en este caso instalar dependencias
RUN npm i

#Se copia el resto del código al directorio source/destiny
COPY . . 

#Definir puerto
EXPOSE 3000

#Comando a ejecutar al iniciar el contenedor
CMD [ "npm", "start" ]
