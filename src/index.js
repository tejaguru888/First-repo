const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8081
app.use(express.urlencoded());
const studentArray = require("./InitialData")

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
let duplicateOfStudentArr = studentArray.map(val => {
    return val
})
app.get("/api/student", (req, res) => {
    res.json(
        studentArray
    )

})

app.get("/api/student/:id", (req, res) => {
    console.log(req.params.id);
    let arr = studentArray.find(arr => arr.id == req.params.id)
    if (arr) {
        res.json(arr);
    }
    else {
        res.status(404).send("Student id is invalid")
    }

})
app.post("/api/student", (req, res) => {
    res.set({ 'content-type': 'application/x-www-form-urlencoded' })
    if (!req.body.name || !req.body.currentClass || !req.body.division) {
        return res.status(404).send("Error found 404")
    }
    let user = {
        id: studentArray.length + 1
    }
    res.json(user);
})
app.put("/api/student/:id", (req, res) => {
    res.set({ 'content-type': 'application/x-www-form-urlencoded' })
    let set = new Set(["name", "currentClass", "division"])
    const array = Object.keys(req.body)
    for (let i = 0; i < array.length; i++) {
        if (!set.has(array[i])) {
            return res.status(404).json({
                status: "Failed",
                message: "404 error invalid data"
            })
        }
    }
    let flag = false;
    let newArray = duplicateOfStudentArr.map(val => {
        if (val.id == req.params.id) {
            flag =true
            if (req.body.name) {
                val.name = req.body.name;
            }
            if (req.body.currentClass) {
                val.currentClass = req.body.currentClass;
            }
            if (req.body.division) {
                val.division = req.body.division;
            }
        }
        return val;
    })
    if(flag) {
    const data = newArray.filter(val => { return req.params.id == val.id })
    res.json(data);
    }
    else{
        return res.status(404).json({
            message: "404 error invalid User"
        })
    }
})

app.delete("/api/student/:id", (req, res)=>{
    let value = duplicateOfStudentArr.find(val=>{
        if(val.id==req.params.id){
           return val.id    
            }
        })
    if(value){
    const newArr = duplicateOfStudentArr.filter(val=>{return val.id!=req.params.id})
    res.send(newArr)
    }
    else{
        res.status(404).send("Error found Invalid Id")
    }
    
    })
   







app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;  