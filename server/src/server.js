const express = require('express');
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const app = express();

const linguagens = [
    { id: 1, nome: 'JavaScript' },
    { id: 2, nome: 'Java' },
    { id: 3, nome: 'PHP' },
]

app.get('/', async (req, res) => {
    const langs = await prisma.language.findMany()
    res.json(langs)
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});