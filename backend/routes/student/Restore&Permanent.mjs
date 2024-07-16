import express from 'express';
import { Student } from '../../models/student.mjs';

const routerRestorePermanent = express.Router();

routerRestorePermanent.delete('/students/:id/permanent', async (req, res) => {
    try {
      const student = await Student.findByIdAndDelete(req.params.id);
      if (!student) {
        return res.status(404).send({ message: 'Student not found' });
      }
      res.send({ message: 'Student permanently deleted' });
    } catch (error) {
      res.status(500).send(error);
    }
  });

  routerRestorePermanent.patch('/students/:id/restore', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (!student) {
        return res.status(404).send({ message: 'Student not found' });
      }
      student.isDeleted = false;
      student.isBanned = false;
      await student.save();
      res.send({ message: 'Student restored' });
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  module.exports =  routerRestorePermanent;