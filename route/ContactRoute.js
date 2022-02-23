const router = require('express').Router()
const nodemailer = require('nodemailer')

//To implement the nodemailer 
//stages:
// 1: we have to create the transporter object
//2: we have to set the mailing options object
//3: we have to deliver the message with the sendmail method

router.post('/contact', (req, res) => {
    let data = req.body
    if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0){
        return res.json({msg:"please fill all the fields"})
    }
        //step1:
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port:465,
            auth:{
                user: 'chidindustephen0@gmail.com',
                pass: '08033836437'
            }

        })

        //step 2:
        let mailOptions = {
            from:data.email,
            to:'chidindustephen0@gmail.com',
            subject: `message from ${data.name}`,
            html: `
            <h3>Informations</h3> 
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
            </ul>  
            <h3>Message</h3>
            <p>${data.message}</p> 
            `
        }
        //step3:
        smtpTransporter.sendMail(mailOptions, (error) =>{
            try {
                if(error) return res.status(400).json({msg:'please fill all the field'})
                res.status(200).json({msg:"Thank you for contacting Steeve"})
            } catch (error) {
                if(error) return res.status(500).json({msg: "There is server error"})
            }
        })

})
module.exports=router