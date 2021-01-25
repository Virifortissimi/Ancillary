document.addEventListener("DOMContentLoaded", function(){

    var waitListInput = document.querySelector('.waitlist-input'),
        waitListButton = document.querySelector('.waitlist-button'),
        fromStorage = sessionStorage.getItem("sessionpassword"),
        errorMessage = document.querySelector('.error-message'),
        drowssap = "Gabriel",
        lockScreen = document.querySelector('.lock-screen'),
        indexAccess = document.querySelector('.index-access');

        if (fromStorage === drowssap) {
            // console.log("yay");
            lockScreen.style.display = "none";
            indexAccess.style.display = "block";
        }

        var login = function(e) {
            // console.log(waitListInput.value)

            if (waitListInput.value === ""){
                errorMessage.textContent = "Please input a password";
                setTimeout(function(){ 
                    errorMessage.textContent = "";
                }, 2000);
            }else if (waitListInput.value === drowssap){
                // console.log("yay");
                sessionStorage.setItem("sessionpassword", waitListInput.value);
                lockScreen.style.display = "none";
                indexAccess.style.display = "block";
            }
            else if (waitListInput.value !== drowssap){
                errorMessage.textContent = "Password is incorrect";
                setTimeout(function(){ 
                    errorMessage.textContent = "";
                }, 2000);
            }

            e.preventDefault();
        }
        waitListButton.addEventListener("click", login);
});