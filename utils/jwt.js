/**npm i jsonwebtoken */
const jwt = require('jsonwebtoken');


const generateJWT = (id)=>{
    const payload={
        user :{
            username : id

        }
    }
    const token = jwt.sign(payload, process.env.JWT_TOKEN, {expiresIn:'1h'})
    return token
}
/**dotenv in app.js to read .env */
module.exports = generateJWT