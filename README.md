# ProyectoRegresionS6

Pruebas de regresion visual Grupo 28

## Descripción

Se realizan pruebas de regresion visual sobre la aplicación Ghost de la version 3 y version 5 con dos tipos de herramientas, Kraken y Cypress. Se detallan las incidencias obtenidas, el resultado de las pruebas, código fuente con el que se ejecutaron las pruebas,  ventajas y desventajas de cada una de las herramientas. 

## Funcionalidades y Escenarios de Prueba

1. **Funcionalidad Iniciar Sesión**
  - Campo vacío
  - Ingresar mal los datos
  - Login Exitoso
2. **Funcionalidad Crear Post**
  - Post vacio
  - Post solo con título
  - Posto solo con body y sin título
  - Post solo con body y título etiquetas
3. **Funcionalidad Creación de páginas**
  - Página vacía
  - Post solo con título
  - Post solo con body y sin título
  - Post solo con body y título etiquetas
4. **Funcionalidad Creación de tags**
  - Tag vacío
  - Tag con solo título
  - Tag con solo título, color y descripción
  - Tag con solo titulo y descripción
5. **Funcionalidad Cambiar información de perfil**
  - Campos vacíos
  - Cambiar solo nombre
  - Cambiar nombre y correo
  - Cambiar nombre y slug
  - Cambiar facebook profile
  
## Instrucciones de ejecución Kraken

Prerrequisitos:
 1. Ghost-CLI version: 1.24.0
 2. NodeJS version: v14.21.1
 3. Kraken: última versión
 
 En la carpeta Escenarios se encuentran los archivos .feature donde cada archivo corresponde a una de las funcionalidades probadas.
##
### Como Ejecutar las pruebas:

### Cypress

Instalar ghost version 3.41.1 `ghost install --version 3.41.1 --local --force` y se ejecuta con el comando `ghost start`, crear una cuenta en ghost correo e.tijaro@uniandes.edu.co y contraseña Contrasena_123.

Posteriormente clonar este repositorio, instalar las dependencias con `npm install`, Luego ejecutar el comando `cypress open`, ya en la interfaz, cargar la carpeta del proyecto con puebas e2e. y ejecutar las pruebas que se encuentre en el a carpeta cypress\e2e\testGhost V3 para que el sistema tome los pantallazos y los guarde respectivamente.

A continuacion, desistalar la herramienta ghost version 3.41.1 `npm uninstall ghost` e instalar la version mas reciente 5.45.1, con el comando `ghost install --version 5.42.1 --local --force` y crear una cuenta con las mismas credenciales e.tijaro@uniandes.edu.co y contraseña Contrasena_123.

Seguido a esto, volver a la interfaz de cypress y ejecutar las pruebas de la version 5 en que se encuentra en la carpeta cypress\e2e\testGhost V5 

posteriormente correr el comando `node Regresion.js`, este va generar un reporte en html que se llama `comparison-reporte.html` abrir con el navegador. este reporte compara las siguientes funsionalidades.
1. **Funcionalidad Iniciar Sesión**
  - Campo vacío
2. **Funcionalidad Crear Post**
  - Post solo con título
3. **Funcionalidad Crear pagina**
  - pagina solo con título
4. **Funcionalidad Crear Tag**
  - Tag vacío
5. **Funcionalidad Cambiar información de perfil**
  - Cambiar nombre y correo



### Kraken
 Para ejecutar cada uno de los escenarios es necesario copiar el contenido .feature a probar y pegarlo en el archivo my_first.feature. Luego en el archivo properties.json modificar las propiedades de USERNAME1 y PASSWORD1 con un usuario y password válidos de la aplicación ghost, igualmente la propiedad USERNAME1UPDATE modificarlo con el mismo valor de USERNAME1. Finalmente ir por consola a la carpeta raíz, ejecutar el comando `npm install` y una vez se instalen los módulos, ejecutar `npx kraken-node run o ./node_modules/kraken-node/bin/kraken-node run`.
