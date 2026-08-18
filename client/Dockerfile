FROM nginx:alpine

#Guardar configuración de nginx
COPY default.conf /etc/nginx/conf.d/default.conf

#Copiar archivos // directorio por defecto de nginx
COPY . /usr/share/nginx/html/

EXPOSE 80