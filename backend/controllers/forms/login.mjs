import mongoose from 'mongoose'
import db from '../../index.mjs'
import {studentSchema} from '../../models/student.mjs'

export const creentials = async (req, res)=>{
    const {mail, password} = req.body
    await db();
    try{
        const email = await studentSchema.findOne(mail);
        if(email){
            console.log('correo encontrado');
        }else{
            res.status(400).json({ msg: 'correo no encontrado' });
        }
        const findPassword = await studentSchema.findOne(password);
        if(findPassword){
            console.log('contraseña encontrada');
        }else{
            res.status(400).json({ msg: 'contraseña no encontrado' });
        }
        return res.status(200).json({msg: 'logueado exitosamente'});
    }catch (err){
        console.error('error a encontrar el usuario:', err);
        return null;
    }finally{
        mongoose.connection.close();
    }
};