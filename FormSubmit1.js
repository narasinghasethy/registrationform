 function my(){

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var FFname = document.getElementById('FFname').value;
    var FLname = document.getElementById('FLname').value;
    var MFname = document.getElementById('MFname').value;
    var MLname = document.getElementById('MLname').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var nationality = document.getElementById('nationality').value;
    var Saddress = document.getElementById('Saddress').value;
    var city = document.getElementById('city').value;
    var country = document.getElementById('country').value;
    var Hteleno = document.getElementById('Hteleno').value;
    var Mteleno = document.getElementById('Mteleno').value;
    // console.log(firstname, lastname, dob, email, FFname, FLname, MFname, MLname, gender, nationality, Saddress, city, country, Hteleno, Mteleno );

    form1_obj = {
        "firstname" : firstname,
        "lastname" : lastname,
        "dob" : dob,
        "email" : email,
        "FFname" : FFname,
        "FLname" : FLname,
        "MFname" : MFname,
        "MLname" : MLname,
        "gender" : gender,
        "nationality" : nationality,
        "Saddress" : Saddress,
        "city" : city,
        "country" : country,
        "Hteleno" : Hteleno,
        "Mteleno" : Mteleno
    }

    // console.log(form1_obj);

    localStorage.setItem('form1Data', JSON.stringify(form1_obj));
    
    var val = localStorage.getItem('form1Data');

    console.log("localstorage data : " + val);
};
