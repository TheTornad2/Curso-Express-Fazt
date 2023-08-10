app.use((req, res, next) => {
  console.log(`Ruta: ${req.url} Método: ${req.method}`);
  next();
});

app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

// Middlewares  en orden

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Método: ${req.method}`);
  next();
});

app.use((req, res, next) => {
  if (req.query.login === "AyrtonCorniel@gmail.com") {
    next();
  } else {
    console.log("No autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard page");
});
