const express = require('express');

// database access using knex
const db = require('../data/dbConfig');

const router = express.Router();

// Get accounts
router.get('/', async (req, res) => {
    try {
        const accounts = await db('accounts');
        console.log(accounts);
        res.status(200).json(accounts);
    } catch(err) {
        res.status(500).json({ message: "Failed to get accounts" })
    };
});

// Get account by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const account = await db('accounts').where('id', id);
        res.status(200).json(account)
    } catch(err) {
        res.status(500).json({ message: "Failed to get account" })
    };
});

// Post account
router.post('/', async (req, res) => {
    const postData = req.body;

    try {
        const post = await db('accounts').insert(postData);
        res.status(201).json(post);
    } catch(err) {
        res.status(500).json({ message: "Failed to post account" });
    };
});

// Update Account
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const update = req.body;

    try {
        const updatedRecord = await db('accounts').where('id', id).update(update);
        res.status(200).json({ updatedRecords: updatedRecord });
    } catch(err) {
        res.status(500).json({ message: "Failed to update account" })
    };
});

// Delete Account
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        rowsDeleted = await db('accounts').where('id', id).del();
        res.status(200).json({ deletedRecords: rowsDeleted });
    } catch(err) {
        res.status(500).json({ message: "Failed to delete account" });
    };
});

module.exports = router;