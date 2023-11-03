//procesar peticiones
import User from '../models/user.model.js'
import bycypt from 'bcryptjs'
import { createAccesToken } from '../libs/jwt.js'
export const register = async (req,res) => {
    const {name, email, password} = req.body

    try {

        const passwordHas = await bycypt.hash(password, 10)

        const newUser = new User({
            name,
            email,
            password: passwordHas
        })
    
        const userSaved = await newUser.save()

        const token = await createAccesToken({id: userSaved._id})
        res.cookie('token',token)

        res.json({
            id: userSaved._id,
            name: userSaved.name,
            email: userSaved.email
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }


}

export const login = (req,res) => res.send('login')