
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require("zod") ; 
const emailSchema = zod.string().email(); 
const passwordSchema = zod.string().min(6) ; 


/*
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

function signJwt(username, password) {
    const usernameResponse = emailSchema.safeParse(username) ; 
    const passwordResponse = passwordSchema.safeParse(password) ;

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({username},jwtPassword)
    return signature ;
}

//checking it manually -> return null
const ans = signJwt("harkiratad","dfasdfdgfva") ; 
console.log(ans) ; 

//return token 
const ans2 = signJwt("harkiratad@gmail.com","dfasdfdgfva") ; 
console.log(ans2) ; 

/*
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */

//RETURN I.E THROW EXCEPTION IF NOT ABLE TO VERIFY THEREFORE USING TRY CATCH
function verifyJwt(token) {
  let res = true;
   try{
      jwt.verify({token,jwtPassword});
   }
  catch(e){
    res = false;
  }
  return res ;
}
console.log(verifyJwt(ans2)) //return false 
console.log(verifyJwt(ans)) //return false 

/*
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */

//return NULL OR DECODED STRING
function decodeJwt(token) {
   //true or false 
  const decoded = jwt.decode(token) ;
  if(decoded){
    return true;
  }
  else{
    return false;
  }
}

console.log(decodeJwt(ans2)) //return true 
console.log(decodeJwt(ans)) //return false -> not valid token 
console.log(decodeJwt("dtg")) //return false 



module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
