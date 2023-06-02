const { Router } = require('express');
const {cloudinaryDelete} = require("../controllers/cloudinary.controller");
const router = Router();

router.delete('/' , cloudinaryDelete  );


module.exports = router;