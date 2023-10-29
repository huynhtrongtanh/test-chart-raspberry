const cors = require('cors');
const express = require('express')
const path = require('path');
const app = express()
const port = 42600

/*
Cấu hình CORS policy
 */
app.use(cors(
    {
        origin: [
            "http://localhost:3000",
            "http://127.0.0.1:3000",
            "http://113.161.240.83:3000",
            "http://mqtt.coder96.com:3000",
            "http://localhost:3001",
            "http://127.0.0.1:3001",
            "http://127.0.0.1:5500",
        ],
        // origin: '*',
        credentials: true,
        exposedHeaders: ["set-cookie"]
    }
));



/*
Cấu hình body parser
*/
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/build'));
/*
Các routers 
*/
require('./app/routers/logger.router')(app);

app.get('/', function(req, res) {
    res.render(path.join(__dirname, './build/index.html'));
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})