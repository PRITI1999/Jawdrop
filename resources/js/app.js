import axios from 'axios'
import Noty from 'noty'

let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')

function updateCart(dress) {
    axios.post('/update-cart', dress).then(res => {
        cartCounter.innerHTML = res.data.totalQty
        new Noty({
            type: 'success',
            timeout: 1000,
            text: 'Item added to cart!',
            progressBar: false,
            layout: "bottomRight"
        }).show()
    }).catch(err => {
        new Noty({
            type: 'error',
            timeout: 1000,
            text: 'Item not addded to cart!',
            progressBar: false,
            layout: "bottomRight"
        }).show()
    })
}

addToCart.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let dress = JSON.parse(btn.dataset.dress)
        updateCart(dress)
    })
})