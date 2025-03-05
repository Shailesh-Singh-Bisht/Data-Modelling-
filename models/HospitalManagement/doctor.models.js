import { ObjectId } from 'bson';
import mongoose from 'mongoose';

const hospitalHours = new mongoose.Schema(
  {
    hospital: {
      type: mongoose.Schema.Types,
      ObjectId,
      ref: 'Hospital',
      required: true,
    },

    loggedHours: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    salary: {
      type: Number,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    experienceInYears: {
      type: Number,
      defualt: 0,
    },

    workIn: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hospital',
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model('Doctor', doctorSchema);
