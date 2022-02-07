const http = require("http");
const fs = require("fs");
const PORT = 2000;

let database = [
  {
    username: "Lisa",
    password: "lisa123",
    email: "lisa@gmail.com",
  },
  {
    username: "Jennie",
    password: "jennie123",
    email: "jennie@gmail.com",
  },
  {
    username: "Rose",
    password: "rose123",
    email: "rose@gmail.com",
  },
];

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    let home = fs.readFileSync("home.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(home);
  } else if (req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(database));
  } else if (req.url === "/login") {
    let input = "";
    req.on("data", (chunk) => {
      input = chunk.toString();
    });
    req.on("end", () => {
      let obj = JSON.parse(input);

      let index = database.findIndex(
        (item) =>
          item.username === obj.username && item.password === obj.password
      );

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(database[index]));
    });
  } else if (req.url === "/register") {
    // tempat menampung data dari body
    let input = "";

    // req.on data, untuk ketika proses pengambilan data dari body
    req.on("data", (chunk) => {
      // kalau mau lihat chunk, bukka console.log nya
      // console.log(chunk);
      // chunk nya diubah ke string, lalu dimasukan ke input
      input = chunk.toString();
    });

    // req.on end, untuk ketika proses pengambilan data selesai
    req.on("end", () => {
      // mengubah variabel input yang tadinya bentuk string, kita akan ubah menjadi object javascript
      let newData = JSON.parse(input);

      // data user yang bentuknya sudah object, kita push ke dalam database
      database.push(newData);

      // buat headers untuk responnya
      res.writeHead(200, { "Content-Type": "application/json" });

      // kita tampilkan database yang telah di push data terbaru
      res.end(JSON.stringify(database));
    });
  }
});

server.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
