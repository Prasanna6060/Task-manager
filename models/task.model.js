import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'task name is required'],
        maxlength: [20, 'max length is 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
    description : {
        type: String,
        required: true,
    }
})

export default mongoose.model('Task', taskSchema);