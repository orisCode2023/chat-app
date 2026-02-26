import express from 'express';
import {protectRoute} from '../middleware/protectRoute.js';
import { getUserFromSidebar} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUserFromSidebar)

export default router;