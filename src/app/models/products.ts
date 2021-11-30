export class Products {
    categoriaid: number = 0;
    colores: string = '';
    desc: string = '';
    espec: string = '';
    idprod: number = 0;
    img: string = '';
    marcaid: number = 0;
    miniaturas: Miniatura[] = [];
    nombre: string = '';
    precio: string = '';
    raiting: number = 0;
    tallas: string = '';
}

export class Miniatura {
    url: string = '';
}