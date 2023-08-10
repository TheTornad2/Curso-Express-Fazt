// EJEMPLO DE RUTAS

app.all("/info", (req, res) => {
  res.send("Server Info");
});

//! el método All hace que reconozca todos los tipos de parametros HTTP Put,Delete,Post, get, patch

app.get("/search", (req, res) => {
  if (req.query.q === "javascript books") {
    res.send("Lista de libros de JavaScript");
  } else {
    res.send("Página Normal");
  }
});

app.get("/:username", (req, res) => {
  console.log(req.query.user);
  console.log(req.query.age);
  const username = req.params.username.toUpperCase();
  res.send(`<h1>Bienvenido a nuestra página ${username}</h1>`);
});

app.get("/add/:x/:y", (req, res) => {
  const { x, y } = req.params;
  const result = parseInt(req.params.x) + parseInt(req.params.y);
  res.send(`Result: ${result}`);
});

app.get("/hello/:username", (req, res) => {
  const username = req.params.username.toUpperCase();
  res.send(`Hello ${username}`);
});

app.get("/users/:username/photo", (req, res) => {
  if (req.params.username === "Bryant" || "bryant") {
    return res.sendFile("./JavaScript-logo.png", {
      root: __dirname,
    });
  }

  res.send("Este usuario no tiene acceso, Ingrese un usuario valido.");
});

app.get("/name/:name/age/:age", (req, res) => {
  res.send(`El Usuario ${req.params.name} Tiene ${req.params.age} años.`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/About", (req, res) => {
  res.send("Acerca de ");
});

app.get("/Weather", (req, res) => {
  res.send("The current weather is nice");
});

//! Se utiliza App.use para hacer que cuando no se encuentre ninguna ruta muestre el siguiente mensaje.
app.use((req, res) => {
  res.status(404).send("No sé encontró tu página");
});

//MÉTODOS HTTP

app.get("/products", (req, res) => {
  //validate data
  //query a database
  //process data

  res.send("Lista de productos");
});

app.post("/products", (req, res) => {
  res.send("Creando productos");
});

app.put("/products", (req, res) => {
  res.send("Actualizando productos");
});

app.delete("/products", (req, res) => {
  res.send("Eliminando productos");
});

app.patch("/products", (req, res) => {
  res.send("Actualizando una parte del productos");
});

// método POST envía datos desde el cliente a el servidor
// método GET Pide un dato al servidor para el cliente
// método PUT el cliente está actualizando algo o quiere actualizar algo, pero se actualiza todo por completo.
// método DELETE cuando el cliente trata de elimibar un dato desde el cliente en el servidor.
// método PATCH funciona parecido al PUT pero solo actualiza una parte de un dato, sea nombre o edad

// Ejemplos de HTTP RESPONSES

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./JavaScript-logo.png", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "bryant",
    familyname: "Corniel",
    age: 18,
    points: [1, 2, 3, 4, 5],
    adress: {
      city: "Puerto Plata",
      street: "Calle Codetel #2",
    },
  });
});

app.get("/isAlive", (req, res) => {
  res.sendStatus(204);
});
