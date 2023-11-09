const router = require("express").Router();
const Email = require('../models/email');

// For creating new Mails
router.post("/send", async (req, res) => {
  try {
    const { sender, username, recipientEmail, subject, body } = req.body;

    const email = new Email({
      sender,
      username,
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
// For getting mails 
router.get("/getemails", async (req, res) => {
    try {
      const emails = await Email.find(); 
  
      res.status(200).json(emails);
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

  router.delete("/delete/:id", async (req, res) => {
    try {
      const emailId = req.params.id;
  
      // Check if the email with the given ID exists
      const existingEmail = await Email.findById(emailId);
      if (!existingEmail) {
        return res.status(404).json({ message: "Email not found" });
      }
  
      // Delete the email
      await existingEmail.deleteOne();
  
      res.status(200).json({ message: "Email deleted successfully" });
    } catch (err) {
      res.status(500).json(err.message);
    }
  });

module.exports = router;
