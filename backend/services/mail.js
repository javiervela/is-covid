
const nodemailer = require('nodemailer');

const sendEmail = async(client,subject,text) => {
    const user = process.env.USERMAIL
    const password = process.env.PASSWORD

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: user,
            pass: password
        }
    })

    const mailOptions = {
        from: user,
        to: client,
        subject: subject,
        text: text
    }
    
    /// TO DEVELOP quitar cbf
    transporter.sendMail(mailOptions, function(error,info)  {
        if (error){
            console.log(error);

        } else {
            console.log("Email sent");

        }
     })
}


module.exports = {sendEmail}