import { Router } from "express";
import axios from "axios";

const router = Router();

//Axios se utiliza para comunicarse con otro servidor sin tener que utilizar Fetch.

router.get("/", (req, res) => {
  let isActive = true;

  const users = [
    {
      id: 1,
      name: "bryant",
      lastname: "Corniel García",
    },
    {
      id: 2,
      name: "Felix José",
      lastname: "Marte Balbuena",
    },
    {
      id: 3,
      name: "Arinson Junior",
      lastname: "Martinez",
    },
  ];

  res.render("index", {
    title: "Index Page",
    isActive,
    users,
  });
});

router.get("/about", (req, res) => {
  const title = "Acerca de";
  res.render("index", { title });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/post", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);

  res.render("post", {
    posts: response.data,
  });
});

export default router;
