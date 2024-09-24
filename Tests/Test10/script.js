// let userInput=document.getElementById("search");
let results=document.getElementById("results");
let errorContainer=document.getElementById("error");


function getProducts(array){
    console.log(array)

    array.slice(0,16).forEach(product=>{
        let productContainer=document.createElement("div")
        productContainer.classList.add("col-4",'mb-3')
        console.log(product.thumbnail)

        productContainer.innerHTML=`
        <div class="card">
            <img src=${product.thumbnail} class='card-img-top' alt='${product.title}'/>
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p><strong>Price:</strong> $${product.price}</p>
            </div>
        <div>
    `
    results.appendChild(productContainer);
    })

    
  
}

function searchProducts(){
    fetch('https://dummyjson.com/products/search?q=phone')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
        results.innerHTML=''
        errorContainer.innerHTML=''
        getProducts(data.products)
    }).catch(error=>{
        errorContainer.innerHTML=error
        errorContainer.classList.add("text-center","text-danger","col-12")
    })
}