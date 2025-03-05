import mongoose from 'mongoose';

const recordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedWith: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    bloodGroup: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      required: true,
    },

    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const Record = mongoose.model('Record', recordSchema);
