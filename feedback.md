---

title: Feedback
layout: default
include_nav: true
prev: background
next: improving-accessibility

---

<form>
  <fieldset>
    <legend>Do you have an accessibility officer?</legend>

    <div class="ds_field-group  ds_field-group--inline">
      <div class="ds_radio">
        <input class="ds_radio__input" id="accessibility-officer-yes" name="accessibility-officer-query" type="radio" value="yes" onchange="storeRadio('accessibility-officer-query', 'yes');"/>
        <label class="ds_radio__label" for="accessibility-officer-yes">Yes</label>
      </div>

      <div class="ds_radio">
        <input class="ds_radio__input" id="accessibility-officer-no" name="accessibility-officer-query" type="radio" value="no" onchange="storeRadio('accessibility-officer-query', 'no');"/>
        <label class="ds_radio__label" for="accessibility-officer-no">No</label>
      </div>
    </div>
  </fieldset>
</form>

It is important to give users a way to provide feedback.

<div>
  <label class="ds_label" for="feedback-email">Email</label>
  <input class="ds_input  ds_input--fluid-half" type="text" id="feedback-email" onchange="store('feedback-email');"/>
</div>
<div>
  <label class="ds_label" for="feedback-telephone">Telephone</label>
  <input class="ds_input  ds_input--fluid-half" type="text" id="feedback-telephone" onchange="store('feedback-telephone');"/>
</div>
<div>
  <label class="ds_label" for="feedback-name">Name</label>
  <p class="ds_hint-text">This could be your accessibility officer or another contact at your organisation.</p>
  <input class="ds_input  ds_input--fluid-half" type="text" id="feedback-name" onchange="store('feedback-name');"/>
</div>
<div>
  <label class="ds_label" for="contact-form">Contact form URL</label>
  <input class="ds_input  ds_input--fluid-half" type="text" id="contact-form" onchange="store('contact-form');"/>
</div>
<div>
  <label class="ds_label" for="response-process">Outline your process for responding to feedback</label>
  <textarea class="ds_input  ds_input--fluid-half" rows="3" id="response-process" onchange="store('response-process');"></textarea>
</div>