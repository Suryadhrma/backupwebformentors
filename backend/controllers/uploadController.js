const multer = require('multer');
const Mentor = require('../models/Mentor');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

exports.uploadFiles = upload.fields([
  { name: 'cvFile', maxCount: 1 },
  { name: 'ktpFile', maxCount: 1 },
  { name: 'photoFile', maxCount: 1 },
]);

exports.saveFiles = async (req, res) => {
  try {
    const { portfolioLink, roles } = req.body;

    const mentor = await Mentor.findById(req.user.id);
    if (!mentor) return res.status(404).json({ message: 'Mentor not found' });

    mentor.cvFile = req.files['cvFile'][0].path;
    mentor.ktpFile = req.files['ktpFile'][0].path;
    mentor.photoFile = req.files['photoFile'][0].path;
    mentor.portfolioLink = portfolioLink;
    mentor.roles = roles.split(',');

    await mentor.save();
    res.json({ message: 'Files uploaded successfully', mentor });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
