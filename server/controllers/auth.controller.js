//procesar peticiones
import User from '../models/user.model.js'
export const register = async (req,res) => {
    const {name, email, password} = req.body

    try {
        const newUser = new User({
            name,
            email,
            password
        })
    
        const userSaved = await newUser.save()
        
        res.json(userSaved)
    } catch (error) {
        console.error(error)
    }


}

export const login = (req,res) => res.send('login')