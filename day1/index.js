const http = require("http");
const url=require("url")

const server = http.createServer((req, res) => {
    
    const pathname= url.parse(req.url).pathname;

    if (req.method === "GET"){
        if (pathname === "/user"){
            res.statusCode = 200;
        res.end(
            JSON.stringify({
            name:"sanjay",
            email:"sanjay88y2k1@gmail.com",
            city:"chennai,tamilnadu",
        })
        )
        }else{
            res.statuscode = 200;
            res.end("hello world")
        }
     }
    
});



server.listen(4000, ()=>{
    console.log("app is running at port 4000")
});