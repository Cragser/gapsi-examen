# Instalación

Una vez descargado se puede instalar los paquetes con npm install

Dada a un requerimiento de usar CDN para bootstrap y para fontawesome el tiempo de carga puede ser bastante bajo


# Decisiones
1. Usamos vite para agilizar el desarrollo de nuestras aplicaciones
2. Utilizamos un repositorio de github: https://github.com/Cragser/gapsi-examen
3. Hicimos undeploy en vercel: https://gapsi-examen.vercel.app/

# Librerías CDN
Preacución, estas librerías agregan un tiempo extra, si es necesario otra iteración hay que eliminarlas
1. Bootstrap: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
Solo se utilizó para hacer un grid y justificar su uso, pero se podía usar grid en su lugar
2. Fontawesome: https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
En un proyecto de esta forma fontawesome no sugiere que se cargue así, sino a través de SVG, la misma librería los facilita

# Patrones
1. Seguimos las ideas del patrón flux a traves de una action en funciones, dispatcher como parametro y un store central para las acciones, para luego mostrar una vista
   1. Este patron se puede usar directamente con redux, pero nosotros usamos el context que provee react
2. HOC (Higher-Order Components) es una técnica o patrón que permite que los componentes conozcan elementos de uno superior, he intenado en el ejercicio utilizar prop-drilling para los componentes que llamo módulos y también el contexto ara los componentes de mas de un nivel.

# Refactorización
1. Antes de iniciar pensé en utilizar una arquitectura limpia para el proyecto, separando en módulos funcionales el carro y el listado de productos, pero consideré que era complejizar demasiado el proyecto, como un punto a calificar era la sencilles diviví el proyecto en funciones. 


# Todo
1. Virtual scroll
Aunque se inició con las pruebas he decidido no utilizarlo por cuestiones de tiempo.
La idea era utilizar infinite-scroll como componente y cada que llegara al final de sus componentes agregar los productos. En el código quedaron algunos elementos de esa funcionalidad.
2. GraphQL
El plan era usar @apollo/client para hacer la petición a la API. Hay una libreria que permite comunicarse con una API REST y transformar los elementos a GRAPHQL, eso nos hubiera dejado más control de los datos. Pero tampoco se implementó por el tiempo
