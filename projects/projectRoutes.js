const express = require('express');

const projectDb = require('../data/helpers/projectModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    projectDb
        .get()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => { 
            res.status(500).json({ error: "The project information could not be found." });
        });
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    projectDb
        .get(id)
        .then(projects => {
            res.json(projects);
        })
        .catch(err => { 
            res.status(500).json({ error: "The project information could not be found." });
        });
})

router.get('/:id/actions', (req, res) => {
    const id = req.params.id;
    projectDb
        .getProjectActions(id)
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: "The project information could not be found." });
        })
})

router.post('/', (req, res) => {
    const { name, description } = req.body;
    const id = req.params.id;
    const newNew = { name, description, id };
    projectDb
        .insert(newNew)
        .then(response => {
            res.json(response);
        })
        .catch(err => { 
            res.status(500).json({ error: "The project information could not be created." });
        });
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    projectDb
       .remove(id)
       .then(projects => {
           res.json(projects);
       })
       .catch(err => { 
        res.status(500).json({ error: "The project could not be removed." });
    });
})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { name, description } = req.body;
    const updated = { name, description };
    projectDb
        .update( id, updated )
        .then(response => {
            res.json(response);
        })
        .catch(err => { 
            res.status(500).json({ error: "The project could not be updated." });
        });
})

module.exports = router;