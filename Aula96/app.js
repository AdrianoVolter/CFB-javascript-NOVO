class Cursos{
    static cursos = ["Javascript", "HTML", "CSS", "Python", "Java", "Arduino"]
    
    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    };

    static getCurso=(i_curso)=>{
        return this.cursos[i_curso]
    };

    static addCurso = (novoCurso)=>{
        this.cursos.push(novoCurso)
    }

    static apagarCursos = () => {
        this.cursos=[]
    }
    
}

// export { Cursos }
export default Cursos



// const carros = ["Polo", "Cross", "Fiat", "Argo", "Cruze"];


// export { carros }