const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "fCwWwRJA#B75g6tUQdTNdlTWXKxZTHVl9YFBBsQZ8yQOJrevg9xA",
MONGODB: process.env.MONGODB || "mongodb+srv://suhail:suhail@clustere.tuhzpez.mongodb.net/?retryWrites=true&w=majority",
};
