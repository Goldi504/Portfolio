const Education = require("../models/Education");

// Get all education
const getEducations = async (req, res) => {
  try {
    const educations = await Education.find().sort({
      startYear: -1,
    });

    res.status(200).json({
      success: true,
      count: educations.length,
      data: educations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch education",
      error: error.message,
    });
  }
};

// Create education
const createEducation = async (req, res) => {
  try {
    const education = await Education.create(req.body);

    res.status(201).json({
      success: true,
      message: "Education created successfully",
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create education",
      error: error.message,
    });
  }
};

// Update education
const updateEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Education updated successfully",
      data: education,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update education",
      error: error.message,
    });
  }
};

// Delete education
const deleteEducation = async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(
      req.params.id
    );

    if (!education) {
      return res.status(404).json({
        success: false,
        message: "Education not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Education deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete education",
      error: error.message,
    });
  }
};

module.exports = {
  getEducations,
  createEducation,
  updateEducation,
  deleteEducation,
};