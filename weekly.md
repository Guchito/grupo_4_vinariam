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

- Week 1
Dividimos las tareas. Hice la logica del register. Estuve repasando express validator.

- Week 2
Nos trabamos con el login porque el objeto request no nos pasaba el body al controlador.
Hice el validador principal sobre el login y el register y pasé la logica de ambos por atrás, es decir, la saqué del controlador y la pasamos al middleware.

* Guchi
- week 1:
Divimos las tareas. vi con sofi algo unas cosas sobre el register.
me puse a repasar sobre sessions y cookies, porque no me acordaba mucho.

- week2:
Cree las sessions y las cookies con sus middlewares que te permiten o no el paso. hice el metodo recordame y de logout.
hice una session de admin y sus middlewares. Trabajamos con Vilu en unas cosas del diseño y de la experiencia de UX de la pagina.

* Vilu
- Week 1
Repasé las clases de session y middleweres antes de comenzar a hacer el formulario de Login

- Week 2 
Cree el formulario de login, para probarlo necesitaba utilizar el metodo register pero mi computadora no me dejaba pullear correctamente. Solucionado esto, avancé con el login. 
Tuvimos una complicación al ver que no se mostraba nada de lo que llegaba por el body y por ende no nos permitia loguear usuarios. 

Consultamos con otros compañeros y teníamos un par de lineas faltantes en el app.js que en teoría vienen con Express Generator, las debimos borrar accidentalmente. 

Luego cree la vista Conocenos, Perfil User y Perfil Admin. Si bien no están terminadas a lujo de detalle, quedamos muy conformes con los primeros acercamientos. Nos queda pendiente repensarlas un poco más