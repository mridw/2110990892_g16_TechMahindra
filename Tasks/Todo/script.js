let jsonDatabase = [
    
  ];
  
  const form = document.getElementById("crudForm");
  const jsonTable = document.getElementById("jsonTable").getElementsByTagName("tbody")[0];
  const clearButton = document.getElementById("clearButton");
  
  function renderTable() {
    jsonTable.innerHTML = ""; 
    jsonDatabase.forEach(item => {
        const row = jsonTable.insertRow();
        
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);
        
        cell1.textContent = item.id;
        cell2.textContent = item.name;
        cell3.textContent = item.age;
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteRecord(item.id);
        cell4.appendChild(deleteButton);
    });
  }
  
  
  function deleteRecord(id) {
    jsonDatabase = jsonDatabase.filter(item => item.id !== id);
    renderTable();
  }
  
  clearButton.addEventListener("click", () => {
    jsonDatabase = [];
    renderTable();
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const id = document.getElementById("id").value;
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    
    if (!id || !name || !age) {
        alert("Please fill out all fields.");
        return;
    }
    
    const existingRecordIndex = jsonDatabase.findIndex(item => item.id == id);
    if (existingRecordIndex === -1) {
        jsonDatabase.push({ id: parseInt(id), name, age: parseInt(age) });
    } else {
        jsonDatabase[existingRecordIndex] = { id: parseInt(id), name, age: parseInt(age) };
    }
    
    form.reset();
    
    renderTable();
  });
  
  renderTable();