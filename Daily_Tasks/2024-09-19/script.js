function fetchCall(){
    fetch('https://dummyjson.com/carts')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    })
}