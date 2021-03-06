
## Descripcion
En base a los requerimientos cree una aplicacion FullStack conectada 
a la API de Spotify para consultar los datos y a una API local escrita
en NodeJs para guardar el historial de reproduccion. 

Como un plus y con el fin de demostrar conocimientos desarrolle un modulo de Favoritos
y un modulo de playlist (esta ultima solo en la api por falta de tiempo de implementacion).


El backend esta conectado a una base de datos postgres, usando TypeOrm y disenhada con una arquitectura
modular, el frontend esta disenhado con Servicios, Router (react-router-dom), Pages (basado en 
el framework Nextjs) y Redux como manejador de estados.

![ERD Image](./Diagrama%20ER%20de%20base%20de%20datos%20(pata%20de%20gallo)%20(1).png)

## Instalacion

Use el package manager [npm](https://www.npmjs.com/) para instalar el Client y el Server por separado.

```bash
npm install
```

## Uso
En primer lugar debemos conectar el servidor con una base de datos (en mi caso utilice una [Imagen postgres de docker]('https://hub.docker.com/_/postgres)) usando o editando las credenciales
del Datasource

Luego corremos el servidor ejecutando el comando 
```bash
npm run dev
```
Esto usara el puerto local 5000 y aplicara las migraciones en la Base de datos

Luego debe correr el Client con:
```bash
npm run start
```

Esto usara el puerto local 3000.

Luego de tener la aplicacion corriendo en su totalidad tendra que iniciar sesion con el boton del 
header, esto redirigira a la pagina de Autenticacion de Spotify donde iniciara sus datos, por siguente 
podra utilizar la barra de busqueda para encotrar el albun, artista o track que desee. Cada vez que reporduzca
un track esto guardara en el Historial persistentemente en la base de datos.

Tambien puede guardar como favoritos el track que desee y borrarlo si desea.

Los Test extras se pueden visualizar en la pagina /Tests (el Primer ejecicio en la consola y el segundo renderizado) y el codigo en src/pages/test.tsx


Espero que el proyecto este a la altura del desarrollo y aguardo con ansias la un feedback!!