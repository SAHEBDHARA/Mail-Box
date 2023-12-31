const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

// resister rout  
 router.post("/resister", async (req,res)=>{

  try
  {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt); // making the password bycript and adding salt

      const newUser = new User ({
        username:req.body.username,
        email:req.body.email,
        password:hashedPassword,
      });


      const user = await newUser.save() // saveing the data to mongodb
      res.status(200).json(user) // send the json data to 
  } 
  catch(err){
    res.status(500).json(err)
  }
   
});

// loging 

router.post("/login", async (req,res)=>{

    try{
        const user = await User.findOne({email:req.body.email}) 
        if (!user) { return res.status(404).json("user not found"); }
         
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (!validPassword) { return res.status(404).json("wornd password"); }

       res.status(200).json(user);

    }catch(err){
        res.status(500).json(err)
    }

   
})

router.get('/',async (req, res) => {
    res.json("auth is working properly")
})



// export the module
module.exports = router;