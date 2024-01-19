export const isValid = (email , password)=>{
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmail){
        return "Enter Valid Email"
    }
    if (!isPassword) {
        return "Enter Valid Password"
    }
    
    return null;
}