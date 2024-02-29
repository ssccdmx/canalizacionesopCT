function abrirVentana(folio) {
    // Abrir una nueva ventana
    
    const nuevaVentana = window.open('');

    // Establecer el contenido de la nueva ventana
    nuevaVentana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap" rel="stylesheet">  
            <link rel="stylesheet" href="css/directorio.css">
            <link rel="icon" href="img/ico/UCS.png">
            <title>Registro Canalizaciones</title>
        </head>
        
        <body>

          
            <div class="contenedor">
        
                <form class="formulario" id="formulario">
        
                    <i Style="color: white;-webkit-user-select: none; -ms-user-select: none; user-select: none; /* Standard syntax */">
                        <script id="Fecha" name="Fecha">
                            function makeArray() {
                            for (i = 0; i < makeArray.arguments.length; i++) this[i + 1] = makeArray.arguments[i]
                            }
                            var months = new makeArray('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');
                            var date = new Date();
                            var day = date.getDate();
                            var month = date.getMonth() + 1;
                            var yy = date.getYear();
                            var year = (yy < 1000) ? yy + 1900 : yy;
                            var hours = date.getHours();
                            var minutes = date.getMinutes();
        
                            document.write( day + "/" + months[month] + "/" + year + "  " + hours + ":" + minutes);
                        </script>
                    </i>
        
                    <!-- Inicia Formulario -->


                        <script>

                        function validarFormulario() {
                            var StatusO = document.getElementById('StatusO').value;
                            var buttonForm = document.getElementById('buttonForm');
    
                            if (StatusO === '' ) {
                                buttonForm.disabled = true;
                            } else {
                                // Redirige a index después de 5 segundos
                                setTimeout(function() {
                                    window.location.href = 'index.html';
                                }, 5000);
                        }
    
                        
                        function limpiarFormulario() {
                            // Borra los datos del formulario
                            document.getElementById('StatusO').value = ''; // Coloca el valor del campo "Status" en vacío
                        }



                        </script>
        
                        <!-- Registro Formulario -->
        
                        <div class="title-form">Canalizaciones Operadores UCS</div>
                        <br>
        
                            <div class="contenedor-formulario" >
                                <label for="Folio">Folio:</label>
                                <label class="label-form2" for="Folio" id="Folio" name="Folio">${folio}</label>
                            </div>
        
                            <script>
                                // Realizar búsqueda en la base de datos
                                fetch("https://sheetdb.io/api/v1/nst88gzk7zy5i/search?folio=${folio}")
                                    .then(response => response.json())
                                    .then(data => {
                                        // Obtener el valor de tipo
                                        const valorTipo = data.length > 0 ? data[0]['tipo'] : 'No encontrado';

                                        // Actualizar el contenido del label para el tipo de solicitud
                                        const tipoLabel = document.getElementById('Tipo');
                                        tipoLabel.textContent = valorTipo;
                                    });
                            </script>

                            <div class="contenedor-formulario">
                                <label for="Tipo">Tipo de solicitud:</label>
                                <label  class="label-form2" for="Tipo" id="Tipo" name="Tipo">+tipoLabel.textContent</label>
                            </div>
        
                            
        
        
                        <!-- Captura Base -->
        
                            <script>
                                // Realizar búsqueda en la base de datos
                                fetch("https://sheetdb.io/api/v1/nst88gzk7zy5i/search?folio=${folio}")
                                    .then(response => response.json())
                                    .then(data => {
                                        // Obtener el valor de accion
                                        const valorAccion = data.length > 0 ? data[0]['acciones'] : 'No encontrado';

                                        // Actualizar el contenido del label para el tipo de solicitud
                                        const accionesLabel = document.getElementById('Accion');
                                        accionesLabel.textContent = valorAccion;
                                    });
                            </script>
        
                            <div class="contenedor-formulario">
                                <label for="Tipo">Acciones:</label>
                                <label class="label-form2" for="Accion" id="Accion" name="Accion">+accionesLabel.textContent</label>
                            </div>


                            <script>
                                // Realizar búsqueda en la base de datos
                                fetch("https://sheetdb.io/api/v1/nst88gzk7zy5i/search?folio=${folio}")
                                    .then(response => response.json())
                                    .then(data => {
                                        // Obtener el valor de accion
                                        const valorStatus = data.length > 0 ? data[0]['status'] : 'No encontrado';

                                        // Actualizar el contenido del label para el tipo de solicitud
                                        const statusLabel = document.getElementById('StatusB');
                                        statusLabel.textContent = valorStatus;
                                    });
                            </script>
        
                            <div class="contenedor-formulario">
                                <label for="Tipo">Status:</label>
                                <label class="label-form2" for="StatusB" id="StatusB" name="StatusB">+statusLabel.textContent</label>
                            </div>

      
        
                        <!-- Captura Operador -->
        
        
                            <div class="contenedor-formulario">
                                <label for="StatusO">Status:</label>
                                <select id="StatusO" name="StatusO">
                                    <option value="Pendiente">Pendiente</option>
                                    <option value="Concluido">Concluido</option>
                                </select>
                            </div>
                            
        
                    <!-- Termina Formulario -->


        
                    <br>
                    <div class="contenedor-boton">
                        <button class="buttonForm" onclick="javascript:validarFormulario()">
                            Registrar
                        </button>
                    </div>
        
        
        
                </form>
        
            </div>
        
            <script src="js/app.js"></script>
            <script src="JS/abrirVentana.js"></script>
            
        </body>
        </html>
    `);

}
