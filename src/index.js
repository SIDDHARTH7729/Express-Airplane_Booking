const express = require('express');
const { ServerConfig,Logger } = require('./config');
const apiRoute = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api',apiRoute);


app.listen(ServerConfig.PORT, () => {
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    console.log(`http://localhost:${ServerConfig.PORT}`);
    Logger.info("Successfully started the server","root",{});
});
