const access_registrationform = () => {
const Psur = document.registrationform.surname;
const Pgiven = document.registrationform.givenname;
const Pbirth = document.registrationform.birthdate;
const Presidence = document.registrationform.residenceplace;
const Pocc = document. registrationform.job;
const Pnat = document.registrationform.country;



const Patientsur = /^[a-zA-Z]{1,16}$/;
if (Psur.value.match(Patientsur)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
       alert("surname must be between 1-16 characters");
        Psur.style.border = "2px solid red";
        return false;
    };

const Patientgiven = /^[a-zA-Z]{1,16}$/;
if (Pgiven.value.match(Patientgiven)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
       alert("givenname must be between 1-16 characters");
        Pgiven.style.border = "2px solid red";
        return false;
    };

//validation for date of birth
if (Pbirth.value==''){
    alert('date must be filled in')
    Pbirth.style.border = "2px solid red";
    return false;
};

const Patientresidence = /^[a-zA-Z]{1,20}$/;
if (Presidence.value.match(Patientresidence)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
        alert("residence must be between 1-20 characters");
        Presidence.style.border = "2px solid red";
        return false;
    };

const Patientocc = /^[a-zA-Z]{5,50}$/;
if (Pocc.value.match(Patientocc)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
        alert("occupation must be between 5-50 characters");
        Pocc.style.border = "2px solid red";
        return false;
    };

const Patientnat = /^[a-zA-Z]{5,20}$/;
if (Pnat.value.match(Patientnat)){
    //    alert("right input");
    //     fName.style.border = "2px solid green";
    } else {
        alert("nationality must be between 5-20 characters");
        Pnat.style.border = "2px solid red";
        return false;
    };

    let genderInput =document.getElementById('gender')
    let radioarray = genderInput.querySelectorAll("input[type='radio']")
    for(let i=0; i<radioarray.length;i++){
        if(radioarray[i].checked){
            break;
           }else if(i+1==radioarray.length){
               alert("gender should be selected")
               genderInput.style.border ="2px solid red";
           }
   
   }

  
};