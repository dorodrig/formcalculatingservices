const express = require('express');
const path = require('path');

const app = express();


let valorluz;
let valoragua;
let valorgas;
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'formcalculatingservices')));

app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/', (req, res) => {
  const html = ` 
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home FA</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
    
      <body>
        <div class="main_title">
          <h1 class="title">CALCULARO DE SERVICIOS PUBLICOS</h1>
        </div>
        <section class="seccion">
          <div class="containerluz">
            <div class="container1">
              <font size="10px" class="title1">Servicio de luz</font>
            </div>
            <div class="container2">
              <font size="5px" class="container1title1">Ingrese valor $</font>
              <!-- <label size="9px" for="CC_CAMPO1">Ingrese valor</label> -->
              <br /><input
                type="number"
                id="CC_CAMPO1"
                name="CC_CAMPO1"
                size="30 px"
              />
              <br />
              <font size="3px" class="container1title2"
                >*Nota: debe ingresar solo el valor numerico</font
              >
            </div>
            <div class="container3">
              <font size="5px" class="container1title1">Ingrese los kWh</font>
              <br /><input
                type="number"
                id="CC_CAMPO2"
                name="CC_CAMPO1"
                size="30 px"
              />
              <br />
              <font size="3px" class="container1title2"
                >*Nota: debe ingresar numeros
              </font>
              <br /><font size="3px" id="segundopisoluz202">Primer piso</font>
              <br /><input
                type="number"
                id="primerpisoluz"
                name="primerpisoluz"
                size="30 px"
              />
              <br /><font size="3px" id="segundopisoluz201">Segundo piso 201 </font>
              <br /><input
                type="number"
                id="segundopisoluz202"
                name="segundopisoluz202"
              />
              <br /><font size="3px" id="segundopisoluz202">Segundo piso 202</font>
              <br /><input
                type="number"
                id="segundopisoluz202"
                name="segundopisoluz202"
              />
              <br /><font size="3px" id="tercerpisoluz">Tercer piso</font>
              <br /><input type="number" id="tercerpisoluz" name="tercerpisoluz" />
            </div>
          </div>
          <div class="containergas">
            <div class="container4">
              <font size="10px" class="title1">Servicio de gas</font>
            </div>
            <div class="container5">
              <font size="5px" class="container1title1">Ingrese valor $</font>
              <br /><input
                type="number"
                id="CC_CAMPO1"
                name="CC_CAMPO1"
                size="30 px"
              />
              <br />
              <font size="3px" class="container1title2"
                >*Nota: debe ingresar solo el valor numerico</font
              >
            </div>
            <div class="container6">
              <font size="5px" class="container1title1"
                >Ingrese el volumen corregido</font
              >
              <br /><input
                type="number"
                id="CC_CAMPO1"
                name="CC_CAMPO1"
                size="30 px"
              />
              <br />
              <font size="3px" class="container1title2"
                >*Nota: debe ingresar numeros
              </font>
    
              <br /><font size="3px" id="segundopisogas201">Segundo piso 201 </font>
              <br /><input
                type="number"
                id="segundopisogas201"
                name="segundopisogas201"
              />
              <br /><font size="3px" id="segundopisogas202">Segundo piso 202</font>
              <br /><input
                type="number"
                id="segundopisogas202"
                name="segundopisogas202"
              />
              <br /><font size="3px" id="tercerpisogas">Tercer piso</font>
              <br /><input type="number" id="tercerpisoluz" name="tercerpisoluz" />
            </div>
          </div>
    
          <div class="containeragua">
            <div class="container7">
              <label for="cbox2">Por favor indique si llego servicio de agua</label>
              <input type="checkbox" id="cbox2" value="second_checkbox" />
            </div>
            <div class="container8">
              <font size="10px" class="title1">Servicio de agua</font>
            </div>
            <div class="container9">
              <font size="5px" class="container1title1">Ingrese valor $</font>
              <!-- <label size="9px" for="CC_CAMPO1">Ingrese valor</label> -->
              <br /><input
                type="number"
                id="CC_CAMPO1"
                name="CC_CAMPO1"
                size="30 px"
              />
              <br />
              <font size="3px" class="container1title2"
                >*Nota: debe ingresar solo el valor numerico</font
              >
            </div>
            <div class="container10">
              <font size="5px" class="container1title1"
                >Ingrese el volumen corregido</font
              >
              <br /><input
                type="number"
                id="CC_CAMPO1"
                name="CC_CAMPO1"
                size="30 px"
              />
              <br />
              <font size="3px" class="container1title2"
                >*Nota: debe ingresar numeros
              </font>
              <br /><font size="3px" id="segundopisoluz202">Primer piso</font>
              <br /><input
                type="number"
                id="primerpisoluz"
                name="primerpisoluz"
                size="30 px"
              />
              <br /><font size="3px" id="segundopisoluz201">Segundo piso 201 </font>
              <br /><input
                type="number"
                id="segundopisoluz202"
                name="segundopisoluz202"
              />
              <br /><font size="3px" id="segundopisoluz202">Segundo piso 202</font>
              <br /><input
                type="number"
                id="segundopisoluz202"
                name="segundopisoluz202"
              />
              <br /><font size="3px" id="tercerpisoluz">Tercer piso</font>
              <br /><input type="number" id="tercerpisoluz" name="tercerpisoluz" />
            </div>
          </div>
        </section>
        <div class="containerbutton">
          <input id="calcularbuttton" type="button" value="CALCULAR" />
        </div>
      </body>
    </html>
    `;
  res.send(html);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});