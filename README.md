## Cloudinary Microservice 
Este es un microservicio el cual interactua con la plataforma de cloudinary , en esta primera version se a añadido la funcionalidad de eliminar imagenes o videos 

## Instalación
Si deseas tomar este codigo he implementar nuevas funcionalidades puedes hacer uso  y tomar como base  este repositorio.
El microservicio esta construido con [Node js](https://nodejs.org/es) , por lo cual es necesario tenerlo instalado de manera local en nuestra maquina de desarrollo 

- con Node js  instalado , podremos realizar la clonacion de este repositorio :

HTTPS:

```bash
git clone https://github.com/Davidgraja/cloudinary-microservice.git

```

SSH :
```bash
git clone git@github.com:Davidgraja/cloudinary-microservice.git

```

Github CLI :
```bash
git clone gh repo clone Davidgraja/cloudinary-microservice

```

- Navega hacia la carpeta cloudinary-microservice y instala sus dependencias:

```bash
cd cloudinary-microservice
npm install 

```
- configura tus variables de entorno dentro de un archivo __.env__ : 

`PORT` : puerto en cual quieres que corra de manera local tu servicio 

`CLOUDINARY_URL` : Variable de entorno  de cloudinary , para esta necesitar tener una cuenta en cloudinary

- Levanta tu servicio :

```bash
npm start   
```

o puedes ejecutar el archivo `app.js` :
```bash
node app.js   
```

Con estos pasos ya deberías de tener tu servicio funcionando en modo local 😊