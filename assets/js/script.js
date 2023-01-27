let form = document.getElementById("form");
let input = document.getElementById("input")
let data = [];


//Validador que usuario esta ingresando un contenido en el casillero. Si no es asi, deja un mensaje. 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        aviso.innerHTML = "Favor ingrese una tarea";
        console.log("failure");
    } else {
        console.log("successs");
        aviso.innerHTML = "";
        AgregarData();
    }
};

//Agregar data

let AgregarData = () => {
    data.push(input.value);

    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
};


