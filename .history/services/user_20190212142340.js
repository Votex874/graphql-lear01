import bcrypt from 'bcrypt'
import models from '../db/models'

export const register = async (firstName, lastName, email, pass) =>{
  const passwordHash = await bcrypt.hash(pass, 10);
  return models.User.create({ firstName, lastName, email, passwordHash })
}

export const login = async (email, pass) => {
  const user = await models.User.findOne({ where: { email }})
  if(!user){ throw new Error('User not found') }

  const valid = await bcrypt.compare(pass, user.passwordHash)
  if(!valid) { throw new Error('Wrong password') }

  return { token: '123', user }
}

