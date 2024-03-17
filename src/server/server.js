

// const express = require('express');
// const path = require('path');

// Forma ES6
import express from 'express';
import path from 'path';



export const startServer = (options) => {
    const { port, publicPath = 'public'} = options
   

    const app = express();
    
    // Para poder usar middleware se usa la palabra app.use
    app.use(express.static(publicPath));  // Contenida estatico para el servidor web

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + `../../../${publicPath}/index.html`));
    }); // Cualquier ruta que no sea estatica, se redirige al index.html

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    
}




// module.exports = startServer;
