function loadXML(){
    fetch('1.xml')
    .then(response=>response.text()) //converts the response to text
    .then(str=>{
        const xml = new DOMParser().parseFromString(str,'text/xml'); //parsing
        const people =xml.getElementsByTagName('person'); //elements from person tag
        const ListDiv = document.getElementById('list'); //div in html file where data is displayed
        Array.from(people).forEach(person=>{ //loop to get all data
            const name = person.getElementsByTagName('name')[0].textContent;
            const age = person.getElementsByTagName('age')[0].textContent;
            const personDiv = document.createElement('div'); //new div for each square of data of person
            personDiv.classList.add('person');
            const nameElement = document.createElement('h2');
            nameElement.textContent= name; //get name from xml and put in h2
            const ageElement = document.createElement('p');
            ageElement.textContent=`Age: ${age}`;

            personDiv.appendChild(nameElement); //puttting thing in thing
            personDiv.appendChild(ageElement);

            ListDiv.appendChild(personDiv); //append the whole thing into big thing

        });
    }).catch(console.error);

}
window.onload = loadXML;