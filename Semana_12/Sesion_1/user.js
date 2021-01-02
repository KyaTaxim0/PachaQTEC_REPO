export class CreateUser{

    element = document.getElementById('container');
    // Metodo que se ejecuta cuando se crea el objeto
    constructor(name,lastname,email,password){
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }

    editProfile = function(name,lastname){
        this.name = name;
        this.lastname = lastname;
    }

    changePassword = function(password){
        this.password = password;
    }

    showData = function(){
        return `${this.name} ${this.lastname}`
    }

    setBuy = function(totalBuy){
        this.totalBuy = totalBuy;
    }

    addDom = function(){
        console.log(this.element)
    }

}