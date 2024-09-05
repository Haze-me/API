const express = require('express');
const app = express();

app.get('/time', (req, res) => {
    const currentTime = new Date().toISOString();
    res.json({ current_time: currentTime });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


