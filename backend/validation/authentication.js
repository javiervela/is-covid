const bycript = require('bcrypt');


const { sendEmail } = require('../services/mail');
const { userValidation } = require('../validation/validation');


const SignUp = async(req,res) => {
/*
    const isValid = userValidation(req.body)  
*/
    const userExist = await User.findOne({email: req.body.email})
    if(userExist){
        return res.status(400).send('Bad Request')
    }

    const salt = await bycript.genSalt(14)
    const hashPassword = await bycript.hash(req.body.password,salt);
   
    const user = new User({
        name : req.body.name,
        surname: req.body.surname,
        password: hashPassword,
        birthdate: req.body.birthdate,
        email: req.body.email,
        sex: req.body.sex,
        location: req.body.location
    }) 
    const savedUser = await user.save()

    const token = jwt.sign({_id: savedUser._id},process.env.TOKEN,{expiresIn: 60});

    sendEmail(req.body.email,'norepy@user_authentication','Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + token.token + '.\n')

    return res.status(201)
}

const Confirmation = async(req,res) => {
    const token = req.params.token;
    const verified = jwt.verify(token,process.env.TOKEN);
    if(verified){
        const updatedUser = await User.updateOne({_id: req.user.id},{verificated: true})
        return res.status(200)
    }else{
        return res.status(400)
    }
}

const SignIn = async(req,res) => {
/*
    const isValid = userValidation(req.body) 
*/
    const user = await User.findOne({email: req.body.email})
    if(!user){
        return res.status(401).send('Unauthorized');
    }
    //Check the password
    const validPass = await bcrypt.compare(req.body.pass, user.pass);
    if(!validPass){
        return res.status(401).send('Unauthorized');
    }
    //Create token
    const token = jwt.sign({_id: user._id},process.env.TOKEN);
    return res.header('auth',token).send('OK').status(200);

}

module.exports = {SignIn,SignUp,Confirmation}