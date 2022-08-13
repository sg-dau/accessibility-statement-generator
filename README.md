## Accessibility Statement Generator

This is a tool to help those providing a web service produce accessibility statements for that service.

The tool is made with HTML, CSS, and javascript. It uses the Digital Scotland Design System Pattern 
Library for its components.

How to edit content: To edit text on the page find it in the html document and change the text. 

To add components to the page find the component you want to add in the pattern library and add it to the html document. Change the id's to suitable ones and double check to make sure that the chosen id is not already used elsewhere in the generator. Add the appropriate store function to the input in an onchange attribute. e.g. 

```html
  <div>
    <label class="ds_label" for="placeholder">placeholder</label>
    <input class="ds_input  ds_input--fluid-half" type="text" id="placeholder"/>
  </div>
```

becomes:

```html
  <div>
    <label class="ds_label" for="website-name">What is the name of your website?</label>
    <input class="ds_input  ds_input--fluid-half" type="text" id="website-name" onchange="store('website-name');"/>
  </div>
```

There are three store functions: store(id), storeCheckbox(id), and storeRadio(id, value). Radio buttons should have a common id within the group that the value of the group will be stored within, each radio button should have its own value. e.g.

```html
  <div class="ds_field-group  ds_field-group--inline">
      <div class="ds_radio">
          <input class="ds_radio__input" id="accessible-procurement-yes" name="accessible-procurement-query" type="radio" value="yes" onchange="storeRadio('accessible-procurement-query', 'yes');"/>
          <label class="ds_radio__label" for="accessible-procurement-yes">Yes</label>
      </div>

      <div class="ds_radio">
          <input class="ds_radio__input" id="accessible-procurement-no" name="accessible-procurement-query" type="radio" value="no" onchange="storeRadio('accessible-procurement-query', 'no');"/>
          <label class="ds_radio__label" for="accessible-procurement-no">No</label>
      </div>
  </div>
```

Add the id to the appropriate reload function in the opening <body> tag of each page. e.g.

```html
  <body onload="reload(['organisation-name'])>
```

to

```html         
  <body onload="reload(['organisation-name', 'website-name'])>
```

This will make sure that the information on the page always matches the information contained in local
storage. This is important as it is the information in local storage that will be used to generate the statement at the end of the process.

The statement is written by the contentHTML function in statement.js.