export class Products{
    stockProduct = [
        {id:1,
        name:'Sandia',
        price: 2.00,
        selected:false},
        {id:2,
        name:'Melon',
        price: 1.00,
        selected:false},
        {id:3,
        name:'Naranja',
        price: 4.00,
        selected:false}
    ];
    containerProducts = document.getElementById('products')

    constructor(){
        //this.init()
    }

    init(){
        this.stockProduct.forEach((product)=>{
            this.addProductDom(this.makeHtmlProduct(product))
        })
    }


    getProduct(id){
        return this.stockProduct.find(product => product.nid == id)
    }

    setProduct(product){
        this.stockProduct.push(product)
    }

    makeHtmlProduct(product){
        const wrapperProduct = document.createElement('label')
        wrapperProduct.textContent = product.name
        const productCheckbox = document.createElement('input')
        productCheckbox.setAttribute('type','checkbox')
        productCheckbox.setAttribute('name','product')
        productCheckbox.setAttribute('value',product.name)
        productCheckbox.onchange = (e) => {
            const index = this.stockProduct.findIndex(product => product.name == e.target.value)
            console.log(index)
            this.stockProduct[index].selected = !this.stockProduct[index].selected
        }

        wrapperProduct.appendChild(productCheckbox)

        return wrapperProduct
    }

    addProductDom(productNode){
        this.containerProducts.appendChild(productNode)
    }

    getSelectedProducts(){
        return this.stockProduct.filter((product) => product.selected)
    }
}