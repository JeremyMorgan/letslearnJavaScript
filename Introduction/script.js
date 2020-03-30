
// current year
var year = 2017;

function calculateAge(){

    let yearBorn = document.getElementById("yearborn").value;

    let age = year - yearBorn;
    let age2 = (age - 1);

    document.getElementById("banner").innerHTML = "You are " + age + " or " + age2 + " years old";

    console.log("Current year is " + year);
    alert("Current year is " + year);

}