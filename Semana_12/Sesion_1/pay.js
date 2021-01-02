export class PayProducts{
    constructor(){

    }

    takeAccount(products){
        return products.reduce((acc,current) => acc + current.price,0)
    }

    bill(user,total){
        console.log('user',user);
        console.log('total',total);
    }


}