import express from 'express';

import image from './api/image';
const routes = express.Router();

routes.use('/img', image);

export default routes;
