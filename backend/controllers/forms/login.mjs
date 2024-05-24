import mongoose from 'mongoose'
import db from '../../index.mjs'
import {Student} from '../../models/student.mjs'

export const credentials = async (req, res)=>{
    const {mail, password} = req.body;
    await db();
    try{
        const email = await Student.findOne(mail);
        if(email){
            console.log('correo encontrado', email);
        }else{
            res.status(400).json({ msg: 'correo no encontrado' });
        }
        const findPassword = await Student.findOne(password);
        if(findPassword){
            console.log('contraseña correcta');
        }else{
            res.status(400).json({ msg: 'contraseña no encontrada' });
        }
        return res.status(200).json({msg: 'logueado exitosamente'});
    }catch (err){
        console.error('error a encontrar el usuario:', err);
        return res.status(500).json({ msg: 'Error del servidor' });;
    }finally{
        mongoose.connection.close();
    }
};