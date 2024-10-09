function generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols) {
    
    const lowerChars = `abcdefghijklmnopqrstuvwxyz`;
    const upperChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
    const numberChars = `1234567890`;
    const symbolChars = `!@#$`;
    
    let allowedChars = ``;
    let password = ``;

    allowedChars += includeLower ? lowerChars : ""; //concat if include lower case = true else empty string
    allowedChars += includeUpper ? upperChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(passwordLength <= 0) {
        return `password length must atleast be 1`;
    }
    if(allowedChars.length === 0) {
        return `Atleast 1 set of characters needs to be selected`;
    }
    for( let i = 0; i<passwordLength; i++) {
        const randomIndex = Math.floor(Math.random()*allowedChars.length); // chooses a random index from the allowedChars list of chars
        password += allowedChars[randomIndex];         
    }

    return password;
}
//Parameters for password
const passwordLength = 12;
const includeLower = true;
const includeUpper = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLower, 
                                  includeUpper,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated Password is: ${password}`)