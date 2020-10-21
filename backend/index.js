const express = require('express')
const app = express()

app.use(express.json())
app.listen(3000, process.env.IP, () => {
    console.log('Server successfully started!');
});

