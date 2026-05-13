function calculateAge(){

    let dob = document.getElementById("dob").value;

    if(dob === ""){
        document.getElementById("result").innerHTML = "Please select date!";
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let month = today.getMonth() - birthDate.getMonth();

    if(month < 0 || (month === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }

    document.getElementById("result").innerHTML = "Your Age is: " + age + " years";
}
