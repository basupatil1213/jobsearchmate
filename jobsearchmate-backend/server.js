import express from 'express';
import initialize from './app.js';

const app = express();

initialize(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
