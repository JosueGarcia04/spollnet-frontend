import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
});

export const News = mongoose.model('News', newsletterSchema);
