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
        type: Date,
        required: 'Se requiere fecha de nacimiento'
    },
    email:{
        type: String,
        trim: true,
        required: 'Se requiere email',
        match: [/.+\@.+\..+/, 'Por favor introduzca una direccion de email valida'],
        unique: true,
    },
    userName:{
        type: String,
        trim: true,
        required: 'Se requiere nombre de usuario',
        unique: true
    },
    password:{
        type: String,
        trim: true,
        required: 'Se requiere contraseña'
    },
    userType : {
        type: String,
        default: 'comprador',
        enum: ['comprador' , 'empleado', 'manager']
    },
    avatar:{
        type: String,
        trim: true,
    },
})


const User = mongoose.model('User', schema);


export default User;
