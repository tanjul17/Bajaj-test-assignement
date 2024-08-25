const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
        ? [lowercaseAlphabets.sort().reverse()[0]]
        : [];

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy", // replace with actual details
        email: "your_email@domain.com",
        roll_number: "your_roll_number",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.listen(5000, () => console.log('Server is running on port 5000'));
