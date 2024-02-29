document.getElementById('formulario').addEventListener('submit', async (e) => {
    e.preventDefault();

    const Folio = document.getElementById('Folio').value;


    // Actualizar la fecha después de la validación exitosa
    document.getElementById('Fecha').textContent = obtenerFechaActual();

    const respuesta = await fetch('https://sheetdb.io/api/v1/xrulyk95obu26', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            "Hora": obtenerFechaActual(),
            "Folio": document.getElementById('Folio').value,
            "Tipo": document.getElementById('Tipo').value,
            "Value1": document.getElementById('Value1').checked,
            "Accion": document.getElementById('Accion').value,
            "StatusB": document.getElementById('StatusB').checked,
            "Value2": document.getElementById('Value2').value,
            "StatusO": document.getElementById('StatusO').checked,

           
        })
    });

// Manejo de la respuesta...
});

function obtenerFechaActual() {
    const date = new Date();
    const day = agregarCeroAlPrincipio(date.getDate());
    const month = agregarCeroAlPrincipio(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = agregarCeroAlPrincipio(date.getHours());
    const minutes = agregarCeroAlPrincipio(date.getMinutes());

    // Formatear la fecha como "DD/MM/AAAA HH:MM"
    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function agregarCeroAlPrincipio(valor) {
    // Agrega un cero al principio si el valor es un solo dígito
    return valor < 10 ? `0${valor}` : valor;
}

// Mostrar la fecha actual en la consola (puedes adaptarlo según tus necesidades)
console.log(obtenerFechaActual());
