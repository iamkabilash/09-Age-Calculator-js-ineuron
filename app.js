const dob = document.getElementById("dob");
const error = document.querySelector(".error");
const age = document.querySelector(".age");
const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");


function getAge(){
    dob_value = "";
    dob_value = dob.value;
    let birthDate = new Date(dob_value.slice(0,4), dob_value.slice(5,7) - 1, dob_value.slice(8,10));
    let today = new Date();

    if(dob_value.slice(0,4)>=today.getFullYear() && dob_value.slice(5,7)>today.getMonth() && dob_value.slice(8,10)>today.getDate()){
        error.style.display = "block";
        age.style.display = "none";
    } else{
        let diff = Math.floor(today.getTime() - birthDate.getTime());
        let day = 1000 * 60 * 60 * 24;

        let resultYear = Math.floor(diff/day/365) ? Math.floor(diff/day/365) : "0";
        let resultMonth = Math.floor((diff/day%365)/30) ? Math.floor((diff/day%365)/30) : "0";
        let resultDay = Math.floor((diff/day%365)%30) ? Math.floor((diff/day%365)%30) : "0";

        // let resultDay = Math.floor(diff/day) ? Math.floor(diff/day) : "0";
        // let resultMonth = Math.floor(resultDay/31) ? Math.floor(resultDay/31) : "0";
        // let resultYear = Math.floor(resultMonth/12) ? Math.floor(resultMonth/12) : "0";
        
        years.innerText = resultYear;
        months.innerText = resultMonth;
        days.innerText = resultDay;

        error.style.display = "none";
        age.style.display = "block";
    }
}