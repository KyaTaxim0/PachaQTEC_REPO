import {Products} from './products.js';
import {CreateUser} from './user.js';
import {PayProducts} from './pay.js';

function main() {
    const products = new Products();
    products.init();

    let user;
    const name = document.querySelector('.js-name')
    const lastname = document.querySelector('.js-lastname')
    const email = document.querySelector('.js-email')
    const password = document.querySelector('.js-password')
    const form = document.querySelector('.js_user')

    const formPay = document.querySelector('.js_pay')

    form.onsubmit = function (event) {
        event.preventDefault()
        user = new CreateUser(
            name.value,
            lastname.value,
            email.value,
            password.value
        )

        this.classList.add('hidden')
        formPay.classList.remove('hidden')
    }

    formPay.onsubmit = function (event){
        event.preventDefault()
        const pay = new PayProducts()

        pay.bill(user,pay.takeAccount(products.getSelectedProducts()))
    }
}

main();