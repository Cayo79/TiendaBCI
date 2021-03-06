// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  servicios: {
    urlservice: 'https://zay-shop-base-default-rtdb.firebaseio.com/',
    obtenerAbout: 'https://zay-shop-base-default-rtdb.firebaseio.com/about.json',
    obtenerBrands: 'https://zay-shop-base-default-rtdb.firebaseio.com/ecom/marcas.json',
    obtenerProductosTodos: 'https://zay-shop-base-default-rtdb.firebaseio.com/ecom/productos.json',
    obtenerProducto: 'https://zay-shop-base-default-rtdb.firebaseio.com/ecom/productos/',
    serverBackend: 'http://localhost:8181/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
