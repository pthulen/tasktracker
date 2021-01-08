const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    id: Number,
    text: String,
    completed: Boolean,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});

mongoose.model('todos', todoSchema);