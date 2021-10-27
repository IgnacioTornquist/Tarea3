export interface Categorias {
    id:number;
    titulo:string;
    color:string;
}
export let ListaCategorias:Array<Categorias>=[
    { id:1,
      titulo: "Entretenimiento",
      color: "Verde"
    },
    { id:2,
        titulo: "Mundo",
        color: "Azul"
    },
    { id:3,
        titulo: "Economia",
        color: "Violeta"
    },
    { id:4,
        titulo: "Salud",
        color: "Azul Oscuro"
    },
    { id:5,
        titulo: "Tecnologia",
        color: "Rojo"
    },
    { id:6,
        titulo: "Deporte",
        color: "Rojo Oscuro"
    }
];