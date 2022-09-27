const express = require("express");
const router = express.Router();




const Random_data = require("../Models/Data_model");

router.get("/:pages", async (req, res) => {
    try {
        let data = await Random_data.find().limit(req.params.pages);
    
        res.json(data);
      } catch (error) {
        console.error(error.message);
        res.status(500).send("server error");
      }
});

router.post("/",async(req, res) => {


    const {name,phone,email}=req.body;

    try {
        const newcontact=new Random_data({
            email:email,
            name:name,
            phone:phone
        })
        const contact=await newcontact.save()
        

        res.send(contact)

    } catch (error) {
        console.error(error.message)
        res.send("server error")
    }

  }
);

// router.put("/:id",auth, async(req, res) => {
  
//   try {

//     const contact_verify=await Contact.findById(req.params.id)

//     if(contact_verify.user.toString()!==req.another_field.id)
//     {
//       return res.send("Unauthorized Personnel-Access Denied")
//     }

//     let updated_contact=await Contact.findByIdAndUpdate(req.params.id,req.body,{
//       new:true
//     })
  
//     res.send(updated_contact)

//   } catch (error) {
//     console.log(error.message)
//     res.send("server error") 
//   }






// });

// router.delete("/:id",auth,async(req, res) => {


//   try {

//     const contact_verify=await Contact.findById(req.params.id)

//     if(contact_verify.user.toString()!==req.another_field.id)
//     {
//       return res.send("Unauthorized Personnel-Access Denied")
//     }

//     let delete_contact=await Contact.findByIdAndDelete(req.params.id)
  
//     res.send(delete_contact)

//   } catch (error) {
//     console.log(error.message)
//     res.send("server error") 
//   }




// });

module.exports = router;
