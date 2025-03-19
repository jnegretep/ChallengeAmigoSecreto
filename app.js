// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los nombres
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada
    actualizarLista();
}

// Función para actualizar la lista en la pantalla
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Agregar botón para eliminar nombres
        let btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.onclick = function () {
            eliminarAmigo(index);
        };

        li.appendChild(btnEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];

    // Mostrar resultado en la pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${ganador}</strong>! 🎉</p>`;
}
