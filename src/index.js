import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import path from "path";
import homeRoutes from "./routes/home.js";
import usersRoutes from "./routes/users.js";

// Express
const app = express();

// Dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

//Middlewares
app.use(express.text());
app.use(express.json());
// Extended false, es para especificar que es una URL bastante simple que solo debe interpretar textos
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(homeRoutes);
app.use(usersRoutes);

//Variables en Express o Settings/configuraciones
app.set("appName", "express Course");
app.set("port", 3000);
// Hace que se busque una ruta de forma estricta, justo como se escribe en la petición.
app.set("case sensitive routing", true);
//Activa el View Engine
app.set("view engine", "ejs");
//Hace que funcionen los templates engines, en este caso se utiliza EJS y está en la carpeta Views
app.set("views", path.join(__dirname, "views"));

// Rutas

// método POST envía datos desde el cliente a el servidor.
// método GET Pide un dato al servidor para el cliente.
// método PUT el cliente está actualizando algo o quiere actualizar algo, pero se actualiza todo por completo.
// método DELETE cuando el cliente trata de elimibar un dato desde el cliente en el servidor.
// método PATCH funciona parecido al PUT pero solo actualiza una parte de un dato, sea nombre o edad.

// Hace que express pueda utilizar los archivos de la carpeta public o static
//! Si se pone la ruta de algún archivo al principio lo va a leer primero y podrá modificarse si es llamado.
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(app.get("port"));
console.log(`Server ${app.get("appName")} on port ${app.get("port")}`);
