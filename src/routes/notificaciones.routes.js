import { Router } from 'express';
import { getNoti } from '../controller/notificaciones.controller.js';

const notificationRoute = Router();
notificationRoute.get('/', getNoti);
