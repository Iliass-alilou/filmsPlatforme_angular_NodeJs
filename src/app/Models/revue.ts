export class Revue {
    idFilm: number;
    name: string;
    date: string;
    content: string;
    

    constructor(idFilm:number,name: string,date: string,content:string) {
        this.idFilm=idFilm;
        this.name=name;
        this.date=date;
        this.content=content;
    }
}