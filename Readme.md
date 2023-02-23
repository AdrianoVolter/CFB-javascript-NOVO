## md *codigos no Readme*

Aula 94
```HTML
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Módulos em Javascript</title>
</head>
<body>
    <h1>Módulos em Javascript</h1>
    <script type="module" src="script.js"></script>
</body>
</html>
```




```js
const cursos = ["Javascript", "HTML", "CSS", "Python", "Java", "Arduino"];


const getTodosCursos=()=>{
    return cursos
}
function getCurso(i_curso){
    return cursos[i_curso]
}
export { cursos, getCurso }
export default getTodosCursos

```

### _________________

```js
// import { cursos,getCurso } from "./app.js";
import * as m_cursos from "./app.js";

console.log(m_cursos.cursos)

```