document.querySelector(".form").addEventListener("click", function(){
    document.querySelector(".form").classList.add("border");
})

document.querySelector(".btn").addEventListener("click", function(){
    var email = ["@"];
    var input = document.querySelector(".input").value ;
    if(input.includes(email)){
        clear();
    }else{
        document.querySelector(".erro-icon").setAttribute("src", "images/icon-error.svg")
    document.querySelector(".erro").innerHTML = "Please provide a valid email"
    }
});


function clear(){
    location.reload();
    return false;
}





