const FormData = require("../models/formData");

// Controller to handle form data submission
const submitFormData = async (req, res) => {
  try {
    const formData = req.body;
    const savedFormData = await FormData.create(formData);
    res.status(201).json(savedFormData);
  } catch (err) {
    console.error('Error saving form data:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { submitFormData };
