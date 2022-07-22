import mongoose from 'mongoose';

const{ Schema } = mongoose;

const schema = new Schema({
    name:{
        type: String,
        trim: true,
        required: 'El nombre es requerido',
    },
    surname: {
        type: String,
        trim: true,
        required: 'El apellido es requerido'
    },
    birthDate: {
        type: String,
        required: 'Se requiere fecha de nacimiento'
    },
    email:{
        type: String,
        trim: true,
        required: 'Se requiere email'
    },
    userName:{
        type: String,
        trim: true,
        required: 'Se requiere nombre de usuario'
    },
    userType:{
        type: Number,
    },
    avatar:{
        type: String,
        trim: true,
    },
})

const User = mongoose.model('User', schema);


export default User;
