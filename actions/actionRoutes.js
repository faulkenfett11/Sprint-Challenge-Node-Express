const express = require('express');

const actionDb = require('../data/helpers/actionModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    actionDb
        .get()
        .then(actions => {
            res.json(actions);
        })
        .catch(err => { 
            res.status(500).json({ error: "The action information could not be found." });
        });
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    actionDb
        .get(id)
        .then(actions => {
            res.json(actions);
        })
        .catch(err => { 
            res.status(500).json({ error: "The action information could not be found." });
        });
})

router.post('/', (req, res) => {
    const postedAction = req.body;
    actionDb
        .insert(postedAction)
        .then(response => {
            res.json(response);
        })
        .catch(err => { 
            res.status(500).json({ error: "The action information could not be created." });
        });
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    actionDb
       .remove(id)
       .then(actions => {
           res.json(actions);
       })
       .catch(err => { 
        res.status(500).json({ error: "The action could not be removed." });
    });
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedAction = req.body;
    actionDb
        .update( id, updatedAction )
        .then(response => {
            res.json(response);
        })
        .catch(err => { 
            res.status(500).json({ error: "The action could not be updated." });
        });
})

module.exports = router;