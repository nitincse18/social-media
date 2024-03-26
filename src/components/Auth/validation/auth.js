export const validateSignUpForm = ({email, password, retypePassword, first_name, last_name, mobile, dob, gender}) => {
    
    if(!first_name) {
     return 'First name is required'
   }
   else if(!last_name) {
     return 'Last name is required'
   }else if(!email) {
     return 'Email is required'
   }
   else if(!mobile) {
     return 'Mobile number is required'
   }
   else if(!password) {
     return 'Password is required'
   }else if (password !== retypePassword) {
     return 'Passwords do not match';
   }
   else if(!dob) {
     return 'DOB is required'
   }
   else if(!gender) {
     return 'Gender is required'
   }else{
     return ''
   }
 }

 export const loginForm = ({email, password}) => {
    if(!email) {
        return 'Email is required'
      }
      else if(!password) {
        return 'Password is required'
      }else{
        return ''
      }
 }