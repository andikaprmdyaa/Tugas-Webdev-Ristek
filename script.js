var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["InputDate"] = document.getElementById("InputDate").value;
    formData["TransactionInfo"] = document.getElementById("TransactionInfo").value;
    formData["Expenditure"] = document.getElementById("Expenditure").value;
    formData["BeforeValue"] = document.getElementById("BeforeValue").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.InputDate;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.TransactionInfo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Expenditure;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.BeforeValue;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("InputDate").value = "";
    document.getElementById("TransactionInfo").value = "";
    document.getElementById("Expenditure").value = "";
    document.getElementById("BeforeValue").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("InputDate").value = selectedRow.cells[0].innerHTML;
    document.getElementById("TransactionInfo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Expenditure").value = selectedRow.cells[2].innerHTML;
    document.getElementById("BeforeValue").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.InputDate;
    selectedRow.cells[1].innerHTML = formData.TransactionInfo;
    selectedRow.cells[2].innerHTML = formData.Expenditure;
    selectedRow.cells[3].innerHTML = formData.BeforeValue;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
  


function validate() {
    isValid = true;
    if (document.getElementById("InputDate").value == "") {
        isValid = false;
        document.getElementById("InputDateValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("InputDateValidationError").classList.contains("hide"))
            document.getElementById("InputDateValidationError").classList.add("hide");
    }
    return isValid;
}