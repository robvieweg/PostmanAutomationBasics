const express = require('express');
const router = express.Router();
const spells = require('../spells.json');
const spellController = require('../controllers/spellsController.js')
module.exports = router;
const authChecker = require('../middleware/header.js')

router.get('/', spellController.spells_list);

router.post('/', authChecker.checkHeader, spellController.new_spell);

router.get('/:spellId', spellController.specific_spell)

router.delete('/:spellId', spellController.delete_spell)

router.delete('/actions/deleteAll', spellController.delete_all)

router.get('/actions/reset', spellController.reset)

router.put('/:spellId', authChecker.checkHeader, spellController.update_spell)



