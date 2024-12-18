const express = require("express")
const app = express()

const animalShelterData = {
    cats: [
        { name: "Whiskers", age: 2, shelter: "Happy Tails Shelter" },
        { name: "Mittens", age: 3, shelter: "Cozy Paws Sanctuary" },
        { name: "Shadow", age: 1, shelter: "Happy Tails Shelter" }
    ],
    shelters: [
        { name: "Happy Tails Shelter", location: "123 Main Street, Cityville" },
        { name: "Cozy Paws Sanctuary", location: "456 Oak Avenue, Townsburg" }
    ]
};

app.use((request, response, next) => {
    console.log(request.method + "/" + request.url)
    next()
})

app.get("/", (request, response) => {
    response.send("<h1>Welcome to the Animal Shelter Network </h1>")
})

app.get("/api/cat", (request, response) => {
    response.json(animalShelterData.cats)
})

app.get("/api//shelters", (request, response) => {
    response.json(animalShelterData.shelters)
})

app.get("/docs", (request, response) => {
    response.send("Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area")
})

app.get("/adopt/cat", (request, response) => {
    response.send("A cat you can adopt is " + animalShelterData.cats[0].name)
})

app.use((request, response, next) => {
    response.status(404).send("404 NOT FOUND")
})

app.listen(3000, () => {
    console.log("Server is running")
})
