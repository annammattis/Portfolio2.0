// const express = require('express');
// const path = require('path');
// const PORT = process.env.PORT || 5000;
// const http = require('http');
// const fs = require('fs');

// express()
//   .use(express.static(path.join(__dirname, 'parallax-template')))
//   .set('js', path.join(__dirname, 'js'))
//   .set('js')
//   .get('/', (req, res) => res.render('parallax-template/server'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  // function onRequest(req, res) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   fs.readFile('parallax-template/index.html', null, function(error, data) {
  //     if (error) {
  //       res.writeHead(404);
  //       res.write('file not found');
  //     } else {
  //       res.write(data);
  //     }
  //     res.end();
  //   });
  // }

  // http.createServer(onRequest).listen(5000);
const express = require('express');
const app = express();

//set port
const port = process.env.PORT || 5000

app.use(express.static(__dirname));

//routes

app.get("/", function(req, res) {
  res.render("index");
})

app.listen(port, function() {
  console.log('app running');
})


  console.log('Server running on localhost:5000')