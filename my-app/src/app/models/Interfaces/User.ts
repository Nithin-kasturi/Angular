export interface User{
    id:number,
    name:string,
    username:string,
    email:string,
    address:Address,
    phone:string,
    website:string,
    company:any
    
}

export interface Address{
    street:string,
    suite:string,
    city:string,
    zipcode:string,
    geo:Record<string,any>,
}

export class Post{
    userId:number;
    title:string;
    body:string;
    id:number;
    constructor(){
        this.userId=0;
        this.body='';
        this.title='';
        this.id=Math.floor(Math.random()*10)
    }
}
