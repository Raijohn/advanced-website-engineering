const showWish = () => {
    let username = document.getElementById("name").value;

    if(username.trim() === ""){
        document.getElementById("message").innerHTML="Please enter your name."
    }
    else{
        document.getElementById("message").innerHTML=`Happy New Year, ${username}`;
    }
};