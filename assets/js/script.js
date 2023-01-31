let form = document.getElementById("form");
let input = document.getElementById("input")
let data = [];
const DataKeys = 'data'
let DataList = document.getElementById("ListaDatos")
let Addbutton = document.querySelector("#add-button")
let BotonActualizar = document.querySelector('#Updatebutton')
let BotonEliminar = document.querySelector('#Deletebutton')


function CleanDataList() {
    get("#ListaDatos").innerHTML = '';
}

//Validador que usuario esta ingresando un contenido en el casillero. Si no es asi, deja un mensaje. 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
});


//Ingresar datos apretando Enter o el boton agregar
let PressEnter = () => {
    document.getElementById("form").addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("add-button").click();
        }
    })
};

//Validación que tiene contenido el input
let formValidation = () => {
    if (input.value === "") {
        aviso.innerHTML = "Favor ingrese una tarea";
    } else {

        aviso.innerHTML = "";
        AddData();

    }
};

//Agregar data al arreglo data

let AddData = () => {

    data.push(input.value);
    localStorage.setItem('data', JSON.stringify(data));
    input.value = '';
    UpdateDataList();
};


let UpdateData = (index) => {
    const newName = document.getElementById('input').value;
    data[index] = newName;
    localStorage.setItem(DataKeys, JSON.stringify(data))
    window.location.reload()


}


const DeleteData = (index) => {
    data.splice(index, 1)
    localStorage.setItem(DataKeys, JSON.stringify(data))
    window.location.reload()
}

let UpdateDataList = () => {
    //agregar clean datalist
    const DataListString = localStorage.getItem(DataKeys)
    data = JSON.parse(DataListString)
    console.log(data);
    ListaDatos.innerHTML = "";

    const DataList = document.getElementById('ListaDatos')

    data.forEach((data, index) => {

        const nodeName = document.createElement('p')
        const updateButton = document.createElement('button')


        updateButton.textContent = `Actualizar`
        updateButton.setAttribute('onclick', `UpdateData(${index})`)
        updateButton.setAttribute('id', "Updatebutton")


        const deleteButton = document.createElement('button')
        deleteButton.textContent = `Eliminar`
        deleteButton.setAttribute('onclick', `DeleteData(${index})`)
        deleteButton.setAttribute('id', "Deletebutton")

        nodeName.textContent = `${index + 1}: ${data}`

        DataList.appendChild(nodeName)
        DataList.appendChild(updateButton)
        DataList.appendChild(deleteButton)
    });
};


// Cargar los datos del localstorage

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('data') == null) {
        localStorage.setItem('data', JSON.stringify([]));
    } else {
        DataList = JSON.parse(localStorage.getItem('data'));
        UpdateDataList();
    }
});

Addbutton.addEventListener("mouseenter", () => {
    Addbutton.style.backgroundColor = "darkblue"
    Addbutton.style.color = "white"
}
)

Addbutton.addEventListener("mouseleave", () => {
    Addbutton.style.backgroundColor = "white"
    Addbutton.style.color = "darkblue"
}
)
