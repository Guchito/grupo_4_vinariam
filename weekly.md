Weeklys 

# Sprint 2
¿Que hicimos?
-Incorporamos el sistema de ruteo e hicimos la mudanza de nuestro proyecto a un proyecto completo del tipo express generator 
-Incorporamos motores de vista ejs. 
-Añadimos patrias en cada vista
-Unificamos el css

¿Tuvimos impedimentos?
-Se nos rompieron las imágenes en el 90% de las vistas


# Sprint 3

¿Que hicimos?
-Arreglamos las imágenes (teníamos un problema de rutas)
-Incorporamos la lógica de las rutas en los controllers
-Añadimos el listado de productos con la lógica de js
-Sumamos la vista “enter”, “error”, “carga de productos”
-Añadimos filtros a la vista de productos

¿Tuvimos impedimentos?
-Al hacer el primer controller, tuvimos un problema ya que node no encontraba los paquetes
-Tuvimos un error al levantar el servidor con el numero de puerto, ya que nos indicaba que el mismo estaba en uso

# Sprint 4

* Sofi 

Week 1

La primer semana arranqué con la ruta del delete y un pantallazo del metodo de array que iba a usar para iterarlo.

Me di cuenta que no habia instalado method override ni requerido, obviamente.

Luego de eso, también tuve un impedimento ya que no podía hacer que funcionara la ruta por delete. Me di cuenta que el button de eliminar producto debía ser de tipo submit.

Esta semana vamos a hacer con Guchi la lógica del método delete en el admin controller.

Week 2

Terminamos el delete. Tuve algunos errores que Guchi me ayudó a solucionar.

Con Vio terminamos el edit.

* Vio 

Week 1

Repasé las clases de subida de archivos y edición, para tenerlo fresco y poder hacer bien la ruta por post que edita los productos.

Me empecé a armar apuntes de las clases, tardo 6 horas en cada uno pero no me importa.

Con la herramienta que nos dieron subí el JSON de usuarios, aún no comprendo bien si es para tenerlo de demo o qué. También tomé el excel que me pasó el cliente y lo converí en un .json con una página web. Tenemos que emprolijar el tema categorías.

Week 2

Terminé de reever las clases de edición de producto para refrescar.

Hice mi parte de el edit por PUT, Sofi me ayudó a corregir algo de rutas que ponía mal y juntas lo terminamos.

* Guchi 

Week1
La semana que paso estuve trabajando con el middleware que te pregunta si sos mayor.
Estoy teniendo un impedimento, ya que no logro hacer que tome la originalURL y que se vuelva a la pagina a la que uno quería entrar. Lo voy a ver el miércoles en el colearning.
Esta semana voy a hacer la pagina de editar

Week2
Hice la vista de edición de productos con sus rutas y que levante los datos del producto a editar.
Ayude a sofi con dos lineas de codigo de la logica del edit porque crasheaba. Y despues pase toda la logica a un helper, para que este mas ordenado


# Sprint 5

* Sofi

Week 1:
Dividimos las tareas. Hice la logica del register. Estuve repasando express validator.

Week 2:
Nos trabamos con el login porque el objeto request no nos pasaba el body al controlador.
Hice el validador principal sobre el login y el register y pasé la logica de ambos por atrás, es decir, la saqué del controlador y la pasamos al middleware.

* Guchi

Week 1:
Divimos las tareas. vi con sofi algo unas cosas sobre el register.

me puse a repasar sobre sessions y cookies, porque no me acordaba mucho.

Week2:
Cree las sessions y las cookies con sus middlewares que te permiten o no el paso. hice el metodo recordame y de logout.

hice una session de admin y sus middlewares. Trabajamos con Vilu en unas cosas del diseño y de la experiencia de UX de la pagina.

Estuve buscando la forma de hacer que ciertos elementos se muestren en pantalla o no, dependiendo el tipo de usuario. Lo logre en el vista del producto, que si sos admin, te muestra un boton de edicion de producto.

Arregle con gonza en un colearning, los redireccionamientos del middleware que chequea si sos mayor o no. Funcionaba el middleware, pero tiraba un error por consola de headers.

* Vilu

Week 1:
Repasé las clases de session y middleweres antes de comenzar a hacer el formulario de Login

Week 2 
Cree el formulario de login, para probarlo necesitaba utilizar el metodo register pero mi computadora no me dejaba pullear correctamente. Solucionado esto, avancé con el login. 
Tuvimos una complicación al ver que no se mostraba nada de lo que llegaba por el body y por ende no nos permitia loguear usuarios. 

Consultamos con otros compañeros y teníamos un par de lineas faltantes en el app.js que en teoría vienen con Express Generator, las debimos borrar accidentalmente. 

Luego cree la vista Conocenos, Perfil User y Perfil Admin. Si bien no están terminadas a lujo de detalle, quedamos muy conformes con los primeros acercamientos. Nos queda pendiente repensarlas un poco más

# Sprint 6

* Vilu

Week 1:
Con Guchi nos conectamos y escribimos la base en MySQL a la par que repasábamos la última clase, 
nos tiraba error cuando queríamos crearla y la dejamos así. Luego Guchi consultó y lo corrigió. 

Week 2:
Mi aporte en este sprint no fue gran cosa, tuve que reever el CRUD en Playground a modo repaso 
para poder hacer mi parte. 

* Sofi

Week 1:
Hice la configuracion de sequelize e instalacion. 
Hice los modelos de forma temporal ya que no teniamos disponible aun el script de MySQL para hacer las columnas como correspondia. Tuve dudas en cuanto a ¿cuantas tablas deberiamos hacer, o deberiamos hacerlas todas? Luego Guchi me ayudó con esto y lo terminó. 

Week 2:
Tuvimos complicaciones con el tiempo. Con Guchi hicimos el crud de users. Mi conexion a la base de datos se rompió a ultimo momento asique no pude testear correctamente desde mi computadora. 

* Guchi 

Week 1:
Hice los schemas en MySQL. Agregue una base de productos minimos y un usuario admin para que el sitio funcione. 
Terminé y corregí los modelos en base a la modificación de schemas. 

Week 2:
Vimos con Sofi el crud de users. Luego hice el crud de productos, tuvimos algunos problemas con la conexion a la base de datos. 

# Sprint 7 

* Sofi 

Week 1:
-Hicimos correcciones de las validaciones del backend entre todos. Ya teniamos gran parte hecha de sprints pasados. Hice la validacion del front de Login. 

Week 2:
-Hice la validacion del front del register. Tambien la configuracion de nuestras apis de usuarios y de productos. Tuvimos algunas complicaciones con las promesas, corregimos las validaciones front con Guchi de edit users y tambien de edit products. 

* Guchi 
Week 1: 
-Hicimos correciones de validaciones del back entre todos. 

Week 2:
Corregimos y emprolijamos con sofi validaciones del front. Por suerte la mayoria ya estaba hecho del sprint pasado, y solo hubo que modificar algunas pocas cosas.


* Vilu 
Week 1:
-Hice la validación del front de Carga de Productos, salió bastante bien y rápido, pero me trabé con las burbujas
de colores y con el onclick, recibimos ayuda de profes acá. 

Week 2:
-La validación de Edición de Productos costó más, el script era muy parecido pero teníamos algunos errores de linkeo
entre el script y el ejs, terminamos esta parte a lo último. 

# Sprint 8 

* Guchi:
Week 1: 
- Estuve practicando react, sobretodo con la pagina de starwars. Pase el html del dashboard a react, por el momento estatico.

Week 2:
- Le di una mano a Sofi con algunos detalles de las apis de products. Agregue un par de cosas a las apis para mandarle los datos al Dashboard ya trabajados desde la api.
- Hicimos la logica del carrito, toda la parte de la base de datos ya la teniamos hecha de antes.
- Empezamos a darle forma a como hacer para guardar los items de alguien no logueado para el carrito. En un principio Lo quisimos hacer creandole un usuario momentaneo. 

Week 3:
- Hable con gonza y me tiro una punta de como hacer lo del carrito sin estar logueado, asi que me puse a jugar un poco con el codigo, hasta que salio, guardandolo en una session.
- Me traje las apis desde el dashboard.
- Samie me explico como habian resuelto con gonza el next para mostrar las distintas paginas de los productos, y con eso lo pude hacer adaptandolo a nuestras necesidades.
- Agregue el Router para tener distintas paginas en el Dashboard, e hice las paginas de usuarios y la de productos. 

* Sofi 
Week 1:
-Estuve haciendo apis de productos y de usuarios. Guchi me ayudó con los conteos de categorías y luego con lo que necesitaba para React

Week 2:
-Hice los métodos del carrito: showCart, buy, bought, delete. Guchi hizo la logica de rutas, y luego la parte de mantener al usuario en session 

* Vilu

Week 1 y 2:
-Me dediqué a emprolijar UI, especialmente las vistas relacionadas al Cart 
