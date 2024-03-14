export interface User{
    id?:number;
    name:string;
    firstName:string;
    address:string;
    email:string;
    password:string;
    role?:string;
    phoneNumber?:string;
    avatar?:string;
}

export interface Objet{
    id?:number;
    name:string;
    description:string;
    owner:number;
    image?:string;
    theOwner?:InfoUser;
}

export interface Annonce{
    id?:number;
    name:string;
    type:string;
    msg:string;
    owner:number;
    idObjet:number;
    status:string;
    theOwner:InfoUser;
    theObjet:InfoObjet;
}

export interface Emprunt{
    id?:number;
    status:string;
    dateDebut:string;
    dateFin:string;
    msgEmprunt:string;
    idAnnonce:number;
    borrower:number;
    theBorrower:InfoUser;
    theAnnonce:[];
}

export interface InfoObjet{
    id?:number;
    name:string;
    description:string;
    owner?:number;
    image?:string;
}

export interface InfoUser{
    id?:number;
    name:string;
    firstName:string;
    address:string;
    email:string;
    role?:string;
    phoneNumber?:string;
    avatar?:string;
}