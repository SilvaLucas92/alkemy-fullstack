import bcrypt from 'bcryptjs'
import User from '../models/Users.js'

export const register = async (req, res) => {
    try {
        const userEmail = await User.findOne({where: {email: req.body.email}})
        if(!userEmail) {
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
            })
            return res.status(202).json({msg: 'User Registered succesfully'})
        } else {
            res.status(404).json({msg: 'Upss! someone has logged with this email'})
        }
    } catch (e) {
        console.log(e)
    }
}

export  const login = async (req, res) => {
    try {
        const userEmail = await User.findOne({where: {email: req.body.email}})
        if(userEmail) {
            let userPassword = req.body.password;
            const passwordOk = bcrypt.compareSync(userPassword, userEmail.password);
            if(passwordOk) {
                delete userEmail.password;
                req.session.userLogged = userEmail;
                return res.status(202).json({msg: 'User Logged succesfully', user: req.session.userLogged})
            } else {
                return res.status(404).json({msg: 'Password does not match'})
            }
        } else {
            return res.status(404).json({ msg: 'Email not found' })
        }
    } catch (e) {
        console.log(e)
    }
}

export const logout = async (req, res) => {
    await req.session.destroy();
    return res.status(200).json({msg: 'user unlogged'})
}