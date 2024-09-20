let userInput=document.getElementById("search");
let results=document.getElementById("results");



function getProducts(array){
    console.log(array)
    let phone=userInput.value
    array.forEach(product=>{
        if (product.title.includes(phone)){
            // document.write(product.title+"<br>")
            results.append(product.title)
        }
    })
}

function searchProducts(){
    fetch('https://dummyjson.com/products/search?q=phone')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        getProducts(data.products)
    })
}