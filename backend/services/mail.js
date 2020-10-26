
const nodemailer = require('nodemailer');

const user = process.env.USERMAIL
const password = process.env.PASSWORD

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: user,
        pass: password
    }
})

const sendEmail = async(client,subject,text) => {
    console.log(user,password)
    const mailOptions = {
        from: user,
        to: client,
        subject: subject,
        text: text
    };
     transporter.sendMail(mailOptions, function(error,info)  {
        if (error){
            console.log(error);

        } else {
            console.log("Email sent");

        }
     })

    //console.log(res);
}


module.exports = {sendEmail}