interface TechObject {
  tech: string,
  experience: number,
}

interface CreateUserData {
  nome? : string,
  email: string,
  password: string,
  techs: Array< string | TechObject >,
}

export default function createUser({nome = '', email, password, techs }: CreateUserData ) {
  const user = { 
    nome,
    email,
    password, 
    techs,
  }

  return user
}

