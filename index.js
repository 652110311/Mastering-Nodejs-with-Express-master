const fs = require("fs"); //commonjs นิยมใช้กับ node
const http = require("http");
const os = require("os");

const { data } = require("./data");

// //print variable
console.log("Hello Node.js");
console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

// blocking แปปเดียว โค้ดอ่านง่ายกว่า

const content = fs.readFileSync("./data.js", "utf8"); //อ่านบนเสร็จก่อนแล้วมาล่าง
console.log(content);

// non blocking
fs.readFile("./data.js", "utf8", function (err, content) {
  console.log(content);
});
console.log("------next!--------");

// module.exports vs exports
console.log(data);

//creating a server ส่ง req คือการเข้า http://localhost:3000/ ใน browser
http
  .createServer(function (req, res) {
    res.writeHead(200);
    res.write(`time : ${os.uptime()} `);
    res.end();
  })
  .listen(3000);
console.log("listening on port 3000");
