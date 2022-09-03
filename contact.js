// --------------------------form validation---------------------------//
let formVal= document.getElementById("reg-form")

function nameValidation(input){
  let inputReg = input.value.trim()
  if(inputReg.length <= 3){
    error(input,"please enter more than 3 words")
  }else{
    error(input)
  }
}
function emailValidation(input) {
  let regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  if(!regExp.test(input.value)){
    error(input,"please enter a valid email")
  }else{
    error(input)
  }
}
function passwordValidation(input){
  let regExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
  if(!regExp.test(input.value)){
    error(input,"please enter at least 1 letter,1 number, 1 uppercase, 1 special character")
  }else{
    error(input)
  }
}
function error(element, message="") {
  element.nextElementSibling.innerText=message
}

formVal.addEventListener("input", function (e) {
  console.log(e.target.id)
  if(e.target.id == "user-name"){
    nameValidation(e.target)

  }
  else if(e.target.id == "user-email"){
    emailValidation(e.target)

  }else if(e.target.id == "user-password"){

    passwordValidation(e.target)
  }

})

formVal.addEventListener("submit", function(u){
  
 let newInp= u.target;
for(let i=0; i<newInp.length-2; i++){
  if(newInp[i].value.length == 0){
    u.preventDefault()
    error(newInp[i],"*required")
  }else{
    error(newInp[i])
  }
} 
})