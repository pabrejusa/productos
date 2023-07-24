function getData() {
    let promesa = fetch("https://fakestoreapi.com/products/",{
        method: "GET"
    });
      promesa.then((response)=>{
        response.json()
        .then((data)=>{
           createCards(data);
     })
     .catch(
         (error)=>{console.error("Problemas en el Json",error);
        });
   }).catch((error)=>{
     console.error(error, "Ocurrió un error en la solicitud");
   });
}//getData
getData();
function createCards(data) {
    data.forEach(producto => {
        console.log(producto.id, producto.title);
    });
    
}//createCards