const jwt=require('jsonwebtoken')
//console.log(jwt)
// {
//     decode: [Function (anonymous)],
//     verify: [Function (anonymous)], >> Verfiy the token
//     sign: [Function (anonymous)],  >> Generate the token
//     JsonWebTokenError: [Function: JsonWebTokenError],
//     NotBeforeError: [Function: NotBeforeError],      
//     TokenExpiredError: [Function: TokenExpiredError] 
//   }

// payload,secret_key,expirationTime
const token=jwt.sign({_id:"abc67890"},"thisismycourse",{expiresIn:'7 days'})
console.log(token)

const data=jwt.verify(token,"thisismycourse")
console.log(data)

// Generate our token: when a user loggins