import { Request } from "../midleware/res.get.js";

const notificaciones = [
    {
        id: 1,
        message: '🎉 ¡Gran noticia! Has sido seleccionado como el ganador de nuestro concurso. ¡Felicidades! 🏆✨'
    },
    {
        id: 2,
        message: '🚀 ¡Prepárate para una experiencia increíble! La cuenta regresiva ha comenzado. ⏳💥'
    },
    {
        id: 3,
        message: '💡 ¡Nuevas ideas están en camino! Mantén los ojos bien abiertos para emocionantes actualizaciones. 👀✨'
    },
    {
        id: 4,
        message: '📢 ¡Atención a todos! Una oportunidad única acaba de llegar a tu puerta. No te la pierdas. 🚪💼'
    }
];

export function getNoti(req, res) {
    Request(req);
}

export async function postNoti(req, res) {
    const newNotification = {
        id: notificaciones.length + 1,
        message: req.body.message
    }
    notificaciones.push(newNotification)
    res.status(200).json({ error: false, newNotification })
}
