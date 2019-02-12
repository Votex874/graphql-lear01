import bcrypt from 'bcrypt'
import models from '../db/models'

const register = async (firstName, lastName, email, password) =>{
  const passwordHash = await bcrypt.hash(password, 10);
  return models.User.create({ firstName, lastName, email, passwordHash })
}