import express from 'express';

import {searchPerson,searchMovie, searchTv, grtSearchHistory, removeItemFromSearchHistory} from '../controllers/search.controller.js'

const router = express.Router();

router.get('/person/:query', searchPerson);
router.get('/movie/:query', searchMovie);
router.get('/tv/:query', searchTv);
router.get('/history', grtSearchHistory);
router.delete('/history/:id', removeItemFromSearchHistory);

export default router;