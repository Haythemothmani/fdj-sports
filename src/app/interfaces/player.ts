export class Transfert {
    amount : Number;
    currency: String;
};

export class Player {
    _id: String;
    name: String;
    position: String;
    thumbnail: String;
    signin: Transfert;
    born: Date;
}