function my(){

    var HSCinstitute = document.getElementById('HSCinstitute').value;
    var HSCboard = document.getElementById('HSCboard').value;
    var hscmark = document.getElementById('hscmark').value;
    var SSCinstitute = document.getElementById('SSCinstitute').value;
    var e = document.getElementById("SSCboard");
    var SSCboard = e.options[e.selectedIndex].text;
    var sscmark = document.getElementById('sscmark').value;
    var curCourse = document.getElementById('curCourse').value;
    var curInstitute = document.getElementById('curInstitute').value;
    var overAllMark = document.getElementById('overAllMark').value;
    var backlogs = document.getElementById('backlogs').value;

    // console.log(HSCinstitute, HSCboard, hscmark, SSCinstitute, SSCboard, sscmark, curCourse, curInstitute, overAllMark, backlogs);

    form2_obj = {
        "HSCinstitute" : HSCinstitute,
        "HSCboard": HSCboard,
        "hscmark" : hscmark,
        "SSCinstitute" : SSCinstitute,
        "SSCboard" : SSCboard,
        "sscmark" : sscmark,
        "curCourse" : curCourse,
        "curInstitute" : curInstitute,
        "overAllMark" : overAllMark,
        "backlogs" : backlogs
    }

    localStorage.setItem('form2Data', JSON.stringify(form2_obj));
    
    var val = localStorage.getItem('form2Data');

    console.log("localstorage data : " + val);

};