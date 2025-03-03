let doctors=[];
function addDoctors(){
    let name = document.getElementById('name').value;
    let speciality = document.getElementById('speciality').value;
    let experience = document.getElementById('experience').value;

    if(!name || !speciality || !experience){
        alert("Fill All Fields");
        return;
    }
    let doctor = {
        name:name,
        speciality:speciality,
        experience:parseInt(experience)
    };
    doctors.push(doctor);
    console.table(doctor);
    displayDoctors();

}
function displayDoctors(){
    let output = document.getElementById('doctorlist');
    output.innerHTML='';
    doctors.forEach((doc,index)=>{
        output.innerHTML+=`<p><b>${index+1}</b>. <b>Dr</b>. ${doc.name}. <b>Speciality</b>: ${doc.speciality}. <b>Experience</b>: ${doc.experience}.`
    });
}
function testCases(){
    doctors=[];
    document.getElementById("doctorlist").innerHTML=" ";
    let testDoctor1 = {name:'ABC',speciality:'DEF',experience:1};
    let testDoctor2 = {name:'GHI',speciality:'JKL',experience:2};
    doctors.push(testDoctor1,testDoctor2);
    displayDoctors();
    console.assert(doctors.length==2,'Test Case 1 Failed');
    console.assert(doctors[0].name=='ABC','Test Case 2 Failed');
    console.assert(doctors[0].experience==1,'Test Case 3 Failed');
}