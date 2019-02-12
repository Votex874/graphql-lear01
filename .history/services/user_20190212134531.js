import bcrypt from 'bcrypt'
import models from '../db/models'

const register = async (firstName, lastName, email, pass) =>{
  const passwordHash = await bcrypt.hash(pass, 10);
  return models.User.create({ firstName, lastName, email, passwordHash })
}

export default register

