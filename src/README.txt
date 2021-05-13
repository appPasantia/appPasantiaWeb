BIENVENIDO AL CÓDIGO DE APPPASANTÍAS.

En este docuemento encontrará la infomracion básica sobre nosotros.

@autores:
    - Vivian Loza               	( yukisaki1998@gmail.com )
    - Jürgen Ruegenberg         ( jurgenruegnberg@gmail.com )
    - Christhoper Medina         ( ch.rash37@gmail.com )
    - Jorge López               	( georgeilr99@gmail.com )


¿Quiénes Somos?
Somos una startup comprometida con la agilización de la inserción laboral universitaria. Donde las empresas podrán publicar ofertas de pasantías de la manera tradicional; así como también buscar al candidato ideal a través del MatchMaking. Y los estudiantes podrán crear su primer currículum estandarizado y tendrán la posibilidad de postular a ofertas de su interés, así como ser contactados directamente por reclutadores de empresas.

Misión
Brindar a los estudiantes que se encuentren egresados o en los últimos semestres de sus respectivas carreras, herramientas de búsqueda de pasantías para facilitar la transición de la etapa universitaria a la laboral.

Visión
Ser el mejor nexo entre los estudiantes y empresas en cuanto a pasantías. Alcanzar la atención de los estudiantes universitarios y empresas a nivel nacional.

Valores 
Confianza, Compromiso, Trabajo en equipo, Colaboración, Innovación, Aprendizaje continuo.

¿Cómo funciona nuetra Web App?

CI/CD 
appPasntías actualmente cuenta con dos integraciones "main.yml" e "Integration.yml". En ambos casos estas se ejecutan de manera automatica en Github Action. (ver link: https://docs.github.com/en/actions para más infomracion) 

main.yml (CI/CD)
Este es el docuemento principal que solo se ejecutara al hacer PUSH en la rama main de repositorio (ver link:   https://github.com/appPasantia/appPasantiaWeb para más infomracion), mismo que tiene dos ejecuciones "Build"  y "Deploy" (ver la carpeta: ./.github/main.yml).  En la ejecucion de build se ejecuta funciones para la instalación de las dependencias y su posterior compilación. Compilacion gurada en Artifacts para su posterior uso. En cuanto el Deploy se ejecuta funciones, principalmente de firebase, para hostear la página web con la siguiente URL: https://apppasantia-3d3db.web.app.

Integration.yml (Solo CI) 
Este docuemento está destinado a todo desarrollador que busca realizar un PUSH a cualquier rama. La misma, mediante funciones de instalacion de dependencias y compliacion de las mismas, indicará si dicho cambio no podruce errores. Mediante el docuemento se buscó que las diferentes versiones de las ramas siempre sean totalmente funcionales.
