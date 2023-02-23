const cursos = ["Javascript", "HTML", "CSS", "Python", "Java", "Arduino"];


const getTodosCursos=()=>{
    return cursos
}
function getCurso(i_curso){
    return cursos[i_curso]
}
export { cursos, getCurso }
export default getTodosCursos



// const carros = ["Polo", "Cross", "Fiat", "Argo", "Cruze"];


// export { carros }