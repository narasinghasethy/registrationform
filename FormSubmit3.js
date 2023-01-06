function my(){

    var pic_file = document.getElementById('pic_file').value;
    var HSC_mark_file = document.getElementById('HSC_mark_file').value;
    var SSC_mark_file = document.getElementById('SSC_mark_file').value;
    var all_sem_file = document.getElementById('all_sem_file').value;

    // console.log(pic_file, HSC_mark_file, SSC_mark_file, all_sem_file);

    form3_obj = {
        "pic_file" : pic_file,
        "HSC_mark_file" : HSC_mark_file,
        "SSC_mark_file" : SSC_mark_file,
        "all_sem_file" : all_sem_file
    }

    localStorage.setItem('form3Data', JSON.stringify(form3_obj));
    
    var val = localStorage.getItem('form3Data');

    console.log("localstorage data : " + val);

};