const http = require("node:http")

const server = http.createServer((req,res)=>{

    console.log(req.url)
    if(req.url === "/api/car"){
        res.end("this is api of car page")
    }
    else if(req.url === "/api/bike"){
        res.end("This is bike api page")
    }else{
        res.end("This is default page")
    }

})


server.listen(4000,(req,res)=>{
    console.log("Server is listen on Port Number 4000")
})


