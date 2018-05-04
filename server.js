const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const projectRoutes = require('./projects/projectRoutes');
const actionRoutes = require('./actions/actionRoutes');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());


server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.listen(8000, () => console.log('\n== server running on port 8000 ==\n'));