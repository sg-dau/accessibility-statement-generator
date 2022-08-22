//add data to local storage when called(in an onchange="")
function store(id) {
  var valueToStore = document.getElementById(id).value;
  localStorage.setItem(id, valueToStore);
}

//store data of a checkbox field
function storeCheckbox(id) {
  var valueToStore = document.getElementById(id).checked;
  localStorage.setItem(id, valueToStore);
}

//function for radio buttons - only store one variable for each radio button group
//onchange only triggers on select not on deselect
function storeRadio(id, value) {
  localStorage.setItem(id, value);
}

//loops through the array of ids passed to it
//sets the value on the page equal to the value in local storage
function reload(ids) {
  let formElements = document.querySelectorAll("input, textarea, select, table");
  for (let formElement of formElements) {
    if(localStorage.getItem(formElement.id)) {
      if(localStorage.getItem(formElement.id) === 'true') {
        document.getElementById(formElement.id).checked = true;
      } else {
        document.getElementById(formElement.id).value = localStorage.getItem(formElement.id);
      }
    } else if(localStorage.getItem('counter-' + formElement.id.slice(6))){
      reloadTable(formElement.id.slice(6));
    } else if(localStorage.getItem(formElement.name)) {
      document.getElementById(formElement.name.slice(0, -5) + localStorage.getItem(formElement.name)).checked = true;
    }
  }
}

//used on the outside-scope and disproportionate-burden pages
//loops through local storage and refills tables on page
function reloadTable(id) {
  let table = document.getElementById("table-" + id);
  for (let i = 0; i < localStorage.getItem('counter-'+id); i++) {
    if(localStorage.getItem(id+"-"+i)) {
    let row = table.insertRow();
    row.setAttribute("id", id + "-" + i);

      let content = JSON.parse(localStorage.getItem(id+"-"+i));
      for(let contentKey of Object.keys(content)) {
        let newCell = row.insertCell();
        newCell.innerHTML = content[contentKey];
      }

      let actionsCell = row.insertCell();
      actionsCell.innerHTML = "<button class='ds_button ds_button--cancel ds_button--fixed ds_button--has-icon' onclick='removeFromTable(this);'>Remove<svg class='ds_icon' aria-hidden='true' role='img'><use href='public/images/icons.stack.svg#close'></use></svg></button>";
    }
  }
  if (table.rows.length > 1) {
    table.setAttribute("style", "display:block;");
  }
}

//add a div to the page with a label, textarea, and submit button
//id number is assigned using a counter in local storage
//prevents id collisions
function addOne(id) {
  const div = document.createElement('div');
  var addToPage = document.getElementById("addToPage");

  var idNumber;
  if (localStorage.getItem("counter-" + id) === null) {
    localStorage.setItem("counter-" + id, 0);
    idNumber = 0;
  } else {
    idNumber = localStorage.getItem("counter-" + id);
  }

  div.setAttribute("id", "div-" + id + "-" + idNumber);
  var label = "<label class='ds_label' for='" + id + "-" + idNumber + "'>Section:</label>";
  var textarea = "<textarea class='ds_input  ds_input--fluid-half' rows='3' id='" + id + "-" + idNumber + "' /></textarea>";
  var button = "<button class='ds_button  ds_button--secondary' onclick=\"submit('div-" + id + "-" + idNumber + "')\">Submit</button>";

  div.innerHTML = label + textarea + button;

  document.getElementById("addToPage").appendChild(div);
  localStorage.setItem("counter-" + id, ++idNumber);
}

//add data to local storage
//add section to table
//remove div from page
function submit(id) {
  var inputId = id.substring(4);
  var valueToStore = document.getElementById(inputId).value;
  localStorage.setItem(inputId, JSON.stringify({'value': valueToStore}));

  //regex matches a "-" then digits at the end of a string and replaces them with nothing
  //to get the correct table id
  var tableId = "table-" + id.substring(4).replace(/\-\d+$/, "");
  var table = document.getElementById(tableId);

  //show the table when content is added
  if (table.getAttribute("style") == "display:none;") {
    table.setAttribute("style", "display:block;");
  }

  var row = table.insertRow(-1);
  row.setAttribute("id", inputId);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = valueToStore;
  cell2.innerHTML = "<button class='ds_button ds_button--cancel ds_button--fixed ds_button--has-icon' onclick='removeFromTable(this);'>Remove<svg class='ds_icon' aria-hidden='true' role='img'><use href='public/images/icons.stack.svg#close'></use></svg></button>"

  const myNode = document.getElementById(id);
  myNode.remove();

}

//remove data from local storage
//remove row from table
function removeFromTable(button) {
  var index = button.parentNode.parentNode.rowIndex;
  table = button.parentNode.parentNode.parentNode.parentNode;
  table.deleteRow(index);

  var itemToRemove = button.parentNode.parentNode.id;
  localStorage.removeItem(itemToRemove);

  //hide table if it is empty
  if (table.rows.length === 1) {
    table.setAttribute("style", "display:none;");
  }
}

//used by the create new statement button on the front page
function emptyStorage() {
  localStorage.clear();
}

//For non compliant content page
function addOneNonCompliant(id) {
  const div = document.createElement('div');
  var addToPage = document.getElementById("addToPage");

  var idNumber;
  if (localStorage.getItem("counter-" + id) === null) {
    localStorage.setItem("counter-" + id, 0);
    idNumber = 0;
  } else {
    idNumber = localStorage.getItem("counter-" + id);
  }

  div.setAttribute("id", "div-" + id + "-" + idNumber);
  var issueLabel = "<label class='ds_label' for=\"issue-" + id + "-" + idNumber + "\">Issue:</label>";
  var issueTextarea = "<textarea class='ds_input  ds_input--fluid-half' rows='3' id=\"issue-" + id + "-" + idNumber + "\" /></textarea>";

  var workaroundsLabel = "<label class='ds_label' for=\"workarounds-" + id + "-" + idNumber + "\">What workarounds are available?</label>";
  var workaroundsTextarea = "<textarea class='ds_input  ds_input--fluid-half' rows='3' id=\"workarounds-" + id + "-" + idNumber + "\" /></textarea>";

  var datePickerDiv = "<div data-module='ds-datepicker' class='ds_datepicker'>";
  var datePickerLabel = "<label class='ds_label' for=\"resolved-by-" + id + "-" + idNumber + "\">When will the issue be resolved by?</label>";
  var datePickerHint = "<p class='ds_hint-text'>In dd/mm/yyyy format</p>"
  var inputWrapperDiv = "<div class='ds_input__wrapper'>";
  var datePickerInput = "<input id=\"resolved-by-" + id + "-" + idNumber + "\" placeholder='dd/mm/yyyy' type='text' class='ds_input  ds_input--fixed-10' />";
  var closeDivs = "</div></div><script type='module' src='public/scripts/pattern-library.js'></script>";

  var resolvedBy = datePickerDiv + datePickerLabel + datePickerHint + inputWrapperDiv + datePickerInput + closeDivs;

  var button = "<button class='ds_button  ds_button--secondary' onclick=\"submitNonCompliant('div-" + id + "-" + idNumber + "')\">Submit</button>";

  div.innerHTML = issueLabel + issueTextarea + workaroundsLabel + workaroundsTextarea + resolvedBy + button;

  document.getElementById("addToPage").appendChild(div);
  localStorage.setItem("counter-" + id, ++idNumber);
}

//add data to local storage
//add section to table
//remove div from page
function submitNonCompliant(id) {
  var inputId = id.substring(4);
  //var valueToStore = document.getElementById(inputId).value;
  var issueValue = document.getElementById("issue-" + inputId).value;
  var workaroundsValue = document.getElementById("workarounds-" + inputId).value;
  var resolvedByValue = document.getElementById("resolved-by-" + inputId).value;

  var issueObject = { 'issueValue': issueValue, 'workaroundsValue': workaroundsValue, 'resolvedByValue': resolvedByValue};

  localStorage.setItem(inputId, JSON.stringify(issueObject));

  //regex matches a "-" then digits at the end of a string and replaces them with nothing
  //to get the correct table id
  var tableId = "table-" + id.substring(4).replace(/\-\d+$/, "");
  var table = document.getElementById(tableId);

  //show the table when content is added
  if (table.getAttribute("style") == "display:none;") {
    table.setAttribute("style", "display:block;");
  }

  var row = table.insertRow(-1);
  row.setAttribute("id", inputId);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = issueValue;
  cell2.innerHTML = workaroundsValue;
  cell3.innerHTML = resolvedByValue;
  cell4.innerHTML = "<button class='ds_button ds_button--cancel ds_button--fixed ds_button--has-icon' onclick='removeFromTable(this);'>Remove<svg class='ds_icon' aria-hidden='true' role='img'><use href='public/images/icons.stack.svg#close'></use></svg></button>"

  const myNode = document.getElementById(id);
  myNode.remove();

}
