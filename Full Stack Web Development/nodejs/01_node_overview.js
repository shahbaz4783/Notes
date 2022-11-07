const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World this is a backend server');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Animation & Keyframes</title>
  
      <style>
          .container{
              background-color: rgb(50, 45, 107);
          }
  
          .box{
              background-color: rgb(22, 190, 213);
              padding: 50px;
              width: 10vw;
              height: 10vh;
              position: relative ;
  
              /* name of animation */
              animation-name: anim1;
              /* total time for animation to complete */
              animation-duration: 6s;
              /* no of loops for animation */
              animation-iteration-count: 1;
  
              animation-fill-mode: alternate;
              /* animation will stop at the place of end in 'forwards' */
              animation-fill-mode: forwards;
  
              /* start will pace, then slow in ease out, vice versa in ease in */
              animation-timing-function: ease-out;
   
              /* animation will start after that time */
              /* animation-delay: 3s; */
  
              /* animation will start from that direction */
              animation-direction: reverse;
          }
  
          @keyframes anim1{
              from{
                  width: 3vw;
              }
  
              to{
                  width: 70vw;
              }
          }
  
  
  
          .container2{
              background-color: rgb(18, 124, 107);
              margin: 20px 0px;
          }
  
          .box2{
              background-color: rgb(211, 167, 55);
              padding: 30px;
              width: 10vw;
              height: 10vh;
              position: relative;
              border-radius: 250px;
              box-shadow: 8px 8px 5px 3px rgb(25, 24, 19);
  
              animation-name: anim2;
              animation-duration: 3s;
              animation-iteration-count: infinite;
  
                      /* one line code for animation */
  
                      /* animation: name duration timing-function delay iteration-count direction fill-mode; */
                      
                      animation: anim2 3s ease-in 1s infinite forwards alternate;
  
          }
  
  
          @keyframes anim2 {
              0%{
                  top: 0vw;
                  left: 0vh;
              }
  
              25%{
                  top: 0vw;
                  left: 10vw;
              }
  
              75%{
                  top: 10vw;
                  left: 10vh;
              }
              
  
              100%{
                  top: 0vw;
                  left: 0vh;
              }
          }
  
      </style>
  
  </head>
  
  <body>
      <div class="container">
          <div class="box">
              BOX1
          </div>
      </div>
  
      <div class="container2">
          <div class="box2">
              BOX2
          </div>
      </div>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

