const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    degree: {
      type: String,
      required: true,
    },

    field: {
      type: String,
      required: true,
    },

    institution: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      default: "",
    },

    startYear: {
      type: String,
      required: true,
    },

    endYear: {
      type: String,
      default: "Present",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Education", educationSchema);