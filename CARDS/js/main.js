
// let img = document.querySelector(`image`);
// let text = document.querySelector(`description`);
// let title = document.querySelector(`title`);

let img = document.getElementById("img");
let title = document.getElementById("title");
let text = document.getElementById("text");
let btn= document.getElementById("btn");
let card = document.getElementById("card");





function getData(){

    let promesa= fetch("https://fakestoreapi.com/products/", {
        method: "GET"
    });
    promesa.then( (response)=> {
        response.json()//intentará convertir todo a un json
        .then((data)=>{
            createCards(data);
        })
        .catch((error)=>{
            console.log("Problema en el JSON", error);
        });
    })
    .catch((error)=> {
        console.log(error, "Ocurrió un error en la solicitud");
    });

} //getData
getData();

function createCards(data){
data.forEach(producto => {

    console.log(producto)

    
    card.insertAdjacentHTML("afterbegin",`<div class="card text-center" id= "card" style="width: 18rem;">
    <img src= ${producto.image} id= "img" class="card-img-top" alt="...">
    <div class="card-body" >
        <h5 class="card-title" id="title">${producto.title}</h5>
        <p class="card-text" id="price">$${producto.price} USD</p>
    </div>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Descripción
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">${producto.title}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">
            ${producto.description}
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary btn2" data-bs-dismiss="modal">Cerrar</button>
        </div>
        </div>
    </div>
    </div>
    </div>`);

    


    
    
});
}//create cards