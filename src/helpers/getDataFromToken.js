import jwt from 'jsonwebtoken'

function getDataFromToken(request) {
  try {
    const token = request.cookies.get("token").value
    const decodedToken = jwt.verify(token,process.env.TOKEN_SECRET)
    return decodedToken.id

  } catch (error) {
    throw new error(error.message)
  }
}

export default getDataFromToken
