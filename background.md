---

title: Background Information
layout: default
include_nav: true
prev: index
next: feedback

---

<div>
  <label class="ds_label" for="organisation-name">What is the name of your organisation?</label>
  <input class="ds_input  ds_input--fluid-half" type="text" id="organisation-name" onchange="store('organisation-name');" />
</div>
<div>
  <label class="ds_label" for="website-name">What is the name of your website?</label>
  <input class="ds_input  ds_input--fluid-half" type="text" id="website-name" onchange="store('website-name');"/>
</div>
<div>
  <label class="ds_label" for="website-url">What is your website's URL?</label>
  <p id="website-url-hint" class="ds_hint-text">e.g. https://www.google.com</p>
  <input class="ds_input  ds_input--fluid-half" type="text" id="website-url" aria-describedby="website-url-hint" onchange="store('website-url');"/>
</div>
<div data-module="ds-datepicker" class="ds_datepicker">
  <label class="ds_label" for="prepared-date">When was this statement prepared?</label>
  <div class="ds_input__wrapper">
    <input id="prepared-date" placeholder="dd/mm/yyyy" type="text" class="ds_input  ds_input--fixed-10" onchange="store('prepared-date')"/>
  </div>
</div>
<div data-module="ds-datepicker" class="ds_datepicker">
  <label class="ds_label" for="reviewed-date">When was this statement last reviewed?</label>
  <div class="ds_input__wrapper">
    <input id="reviewed-date" placeholder="dd/mm/yyyy" type="text" class="ds_input  ds_input--fixed-10" onchange="store('reviewed-date');"/>
  </div>
</div>