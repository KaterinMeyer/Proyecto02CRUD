let form = document.getElementById("form");
let input = document.getElementById("input")
let data = [];
const DataKeys = 'data'
let DataList = document.getElementById("lista-datos")
let CrearBotonUpdateData = document.createElement('button')


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
        AddData();

    }
};

//Agregar data al arreglo data

let AddData = () => {

    data.push(input.value);
    localStorage.setItem('data', JSON.stringify(data));
    GetData();
};

let UpdateData = (index) => {
    let newName = document.getElementById('lista-datos').value
    data[index] = newName
    localStorage.setItem(DataKeys, JSON.stringify(data))
    //window.location.reload()
}
const deleteContact = ( index ) => {
  data.splice( index, 1 )
  localStorage.setItem( DataKeys, JSON.stringify(data))
  window.location.reload()
}

let GetData = () => {
    const DataListString = localStorage.getItem(DataKeys)
    data = JSON.parse(DataListString)
    console.log(data);
    //DataList.innerHTML = "";

    data.forEach((data, index) => {
        const nodeName = document.createElement('p')
        const updateButton = document.createElement('button')
        updateButton.textContent = `Actualizar ${index + 1}`
        updateButton.setAttribute('onclick', `UpdateData(${index})`)


        const deleteButton = document.createElement('button')
        deleteButton.textContent = `Eliminar ${index + 1}`

        deleteButton.setAttribute('onclick', `deleteContact(${index})`)
        nodeName.textContent = `${index + 1}: ${data}`
        DataList.appendChild(nodeName)
        DataList.appendChild(updateButton)
        DataList.appendChild(deleteButton)
    });
};


// Cargar los datos del localstorage



