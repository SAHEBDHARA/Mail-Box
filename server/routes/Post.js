const router = require("express").Router();
const Email = require('../models/email');

router.post("/send", async (req, res) => {
  try {
    const { sender, recipientEmail, subject, body } = req.body;

    const email = new Email({
      sender,
      recipientEmail,
      subject,
      body,
    });

    await email.save();

    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/getemails", async (req, res) => {
    try {
      const emails = await Email.find(); 
  
      res.status(200).json(emails);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });
module.exports = router;
