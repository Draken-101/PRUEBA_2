const express = require('express');
const cors = require('cors');
import { notificationRoute } from './src/routes/notificaciones.routes.js';
const app = express()
app.use(express.json());
app.use(cors())

app.listen(3000, () => {
    console.log('¡Atento al puerto 3000! 🎧🔥');
    console.log('¡Preparado para despegar hacia nuevas aventuras! 🚀✨');
});
 
app.use('/notificaciones', notificationRoute)