# 202210-W1-ana-pedra

Week 1. Git & GitHub

En este ejercicio vas a crear un nuevo proyecto que albergará uno de tus ejercicios de HTML del precurso (elige el que quieras, a poder ser alguno que tenga más de un archivo).

Crea una nueva carpeta en tu disco duro para el nuevo proyecto, y abre esta carpeta en el VSCode.

b) Inicializa un proyecto con npm

Inicializa un repositorio Git npm init (-y para hacerlo todo default) git init
En el package.json creado por npm, modifica la configuración de prettier
"homepage": "https://github.com/XistriXostri/week-1#readme",
  "prettier": {
    "singleQuote": true
}
Junto a él, añade los archivos iniciales necesarios: .editorconfig, .gitignore y un readme.md inicial. .editorconfig → boton derecho en la carpeta y “generate .editorconfig” .gitignore → crear un nuevo archivo y llamarlo “.gitignore” readme → se puede crear automáticamente al crear el repositorio en GitHub
Crea un commit con estos archivos (Initial commit) en la rama main. Recuerda que deberá ser tu único commit en esta rama git add . git commit -m "Initial commit v3"
Crea un repositorio en tu cuenta de GitHub. El repo debe llamarse 202210-W1-tuNombre-tuApellido (p.e., 202210-W1-jose-gonzalez).

Vincula tu repositorio local con tu repositorio remoto de GitHub tal como te indican allí. De esta forma subes la rama master al repositorio remoto. git remote add origin https://github.com/XistriX git push origin main
Intenta proteger en GitHub la rama principal para que no se pueda volcar nada en ella sin hacer una Pull Request (PR). https://github.com/XistriXostri/week-1/settings/branch_protection_rules/new → [ ] Require a pull request before merging
Crea un nuevo site en Netlify y vincúlalo con el repo que has creado en GitHub para que se despliegue (deploy) automáticamente. Éste será tu entorno de producción. Ir a https://app.netlify.com/sites/willowy-marzipan-5de94c/overview
Instala husky con el método automático de instalación para disponer fácilmente de hooks en Git. npm install husky --save-dev npx husky install
Añade los dos hooks adjuntos commit-msg y pre-push.
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
Luego entrar en los ficheros y reemplazarlos por los hook adjuntos
"husky": {
        "hooks": {
            "pre-push": "echo \"[Husky] pre-push\"",
            "commit-msg": "echo \"[Husky] commit-msg\""
        }
    },
commit-msg establece la longitud válida de los mensajes de commit entre 10 and 72 caracteres
pre-push requiere que el nombre de las ramas comience por hotfix, bugfix o feature
En tu repo local, crea una rama auxiliar llamada feature/exercise-files y vete a ella Comprueba que husky te impide utilizar un nombre de rama inadecuado.
Añade los archivos de uno de los ejercicios del pre-curso, a ser posible de los que incluyen HTML.
Crea un commit o varios con todos los archivos. Si quieres puedes también modificar en algo los ejercicios que tenías y hacer commit con los cambios. Comprueba que husky te impide emplear un mensaje de commit de longitud inadecuada
git checkout -b "feature/exercise-files”

git push origin feature/exercise-files

git add .

git commit -m “hotfix/add node_modules to gitignore”

git push origin feature/exercise-files

git checkout main

git pull origin main

(ir a pull request)
Mediante una PR, mergea el trabajo de la rama auxiliar en la rama principal y borra la auxiliar.
Sube los cambios de master al repo y comprueba que se han desplegado los cambios a producción. Comprueba también si la web se ve bien en ese entorno.
Opción
Puedes repetir el proceso para otros ejercicios del pre-curso.
Crea para cara ejercicio una carpeta y añádelos al proyecto mediante su propia rama
Añade en la raíz del proyecto un index.html que de acceso a cada uno de los ejercicios añadidos.
