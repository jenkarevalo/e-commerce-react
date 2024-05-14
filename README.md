
# E-commerce Belleza y Color con React

Este e-commerce ofrece solo productos de belleza, para el cuidado de la piel y el cabello.

Para el desarrollo de esta pagina se utilizo React, JavaScript y material UI.

## Installation

Este proyecto se inició con la aplicación Create React .

En el directorio del proyecto, puede ejecutar:

```bash
  npm start
```

Ejecuta la aplicación en modo de desarrollo.
Abra http://localhost:3000 para verlo en el navegador.

La página se recargará si realiza modificaciones.
También verá cualquier error de pelusa en la consola.
    
## Features

- Se utiliza Firebase para la autenticacion en el inicio de sesión.
- Se ingresa a la ruta base con "/".
- Se accede al carrito con la ruta "/checkout-page".
- El logo del menu esta enlazado a la ruta base
- El icono del carrito en el menú muestra con Numeros en rojo, la cantidad de artículos que contiene.
- Se hace uso de los componentes sugeridos: NavBar, products, Signin, Signup, PaymentForm, Review, etc.

## El simulador permite las siguientes interacciones:

- Navegar por el catálogo de productos.
- Desde la pagina principal se puede ver la descripción, imagen, precio y calificación del producto, ademas de ingresarlo al carrito.
- Se valida desde el contador la cantidad de productos ingresados al carrito de compras.
- En el carrito se pueden visualizar un listado de la orden que incluye cada artículo, cantidad de unidades y el precio total.
- Se pueden remover los productos del carrito de compras, por medio de la imagen de la caneca de basura.
- Al darle click al boton Comprar Ahora, nos envia al formato de verificacion de informacion para continuar con la compra
- Al ingresar nombre y apellido, teléfono e correo electrónico, se activa el botón de "Siguiente" y continua con el medio de pago.
- Al hacer clic en "Finalizar compra", se guarda la orden en la base de datos de Firebase que contiene los datos del comprador, todos los productos, el monto total y un código de orden.
- Se puede vaciar el carrito manualmente haciendo clic en "Vaciar carrito" y también se vacía una vez finalizada una compra.
- Se puede ingresar con el correo electronico y contraseña, estando registrados con anterioridad.
- si no esta registrado, se puede registrar con los datos que solicita el formulario, terminado esto la pagina regresa al formulario de ingreso.
- tambien permite el cambio de contraseña, si se ha olvidado de esta.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
