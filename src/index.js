const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/', (req, res) => {
    res.send("Hello World!");
});
//( addition post request )----------------------------------------------------------------------------------------------------------------------
app.post('/add' , (req , res) => {
    // console.log(req.body);
    // res.send("Ok");
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(num1 < 1000000 || num2 < 1000000){
        return res.status(400).json({
            message: "Underflow",
            sum: num1 + num2
        })
    }

    if(num1 > 1000000 || num2 > 1000000  || sum > 1000000){
        return res.status(400).json({
            message: "Overflow",
            sum: num1 + num2
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let sum = 0;
    res.status(200).json({
        status: "success",
        message: "the sum of given two numbers",
        sum: num1 + num2
    })
});

//( subtraction post request )-------------------------------------------------------------------------------------------------------------------
app.post('/sub' , (req , res) => {
    // console.log(req.body);
    // res.send("Ok");
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(num1 < 1000000 || num2 < 1000000){
        return res.status(400).json({
            message: "Underflow",
            sub: num1 - num1
        })
    }

    if(num1 > 1000000 || num2 > 1000000){
        return res.status(400).json({
            message: "Overflow",
            sub: num1 + num2
        })
    }
    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let sub = 0;
    res.status(200).json({
        status: "success",
        message: "the difference of given two numbers",
        sub: num1 - num2
    })
});

//( multiplication post request )------------------------------------------------------------------------------------------------------------------
app.post('/multiply' , (req , res) => {
    // console.log(req.body);
    // res.send("Ok");
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(num1 < 1000000 || num2 < 1000000){
        return res.status(400).json({
            message: "Underflow",
            multiply: num1 * num2
        })
    }

    if(num1 > 1000000 || num2 > 1000000){
        return res.status(400).json({
            message: "Overflow",
            multiply: num1 * num2
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let multiply = 0;
    res.status(200).json({
        status: "success",
        message: "The product of given numbers",
        multiply: num1 * num2
    })
});

//( divide post request )---------------------------------------------------------------------------------------------------------------------------
app.post('/divide' , (req , res) => {
    // console.log(req.body);
    // res.send("Ok");
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(num2 === 0){
        res.status(200).json ({
            message: "Cannot divide by zero"
        })
    }

    if(num1 < 1000000 || num2 < 1000000){
        return res.status(400).json({
            message: "Underflow",
            divide: num1 / num2
        })
    }

    if(num1 === "" || num2 === ""){
        return res.status(400).json({
            status: "error",
            message: "Invalid data types"
        })
    }
    let divide = 0;
    if(num2 > 0 ){
        res.status(200).json({
            status: "success",
            message: "The division of given numbers",
            divide: num1 / num2
        })
    }

    if(num1 > 1000000 || num2 > 1000000){
        return res.status(400).json({
            status:"error",
            message: "Overflow"
        })
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;