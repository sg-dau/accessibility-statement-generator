---

title: Improving accessibility
layout: default

---

<form>
  <div class="ds_question">
    <fieldset id="automated-testing-query">
      <legend>Have you done automated accessibility testing?</legend>

      <div class="ds_field-group">
        <div class="ds_radio">
          <input id="automated-testing-yes" value="yes" name="automated-testing-query" class="ds_radio__input" type="radio" onchange="storeRadio('automated-testing-query', 'yes');"/>
          <label for="automated-testing-yes" class="ds_radio__label">Yes</label>
        </div>
        <div class="ds_radio">
          <input id="automated-testing-no" value="no" name="automated-testing-query" class="ds_radio__input" type="radio" onchange="storeRadio('automated-testing-query', 'no');"/>
          <label for="automated-testing-no" class="ds_radio__label">No</label>

          <div class="ds_reveal-content">
            <div class="ds_question">
              <p><a href="#">This resourse</a> could help you with automated testing.(get a resource for here)</p>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</form>
<form>
  <div class="ds_question">
    <fieldset id="user-testing-query">
      <legend>Have you done accessibility testing with users?</legend>

        <div class="ds_field-group">
          <div class="ds_radio">
            <input id="user-testing-yes" value="yes" name="user-testing-query" class="ds_radio__input" type="radio" onchange="storeRadio('user-testing-query', 'yes');"/>
            <label for="user-testing-yes" class="ds_radio__label">Yes</label>

            <div class="ds_reveal-content">
              <div class="ds_question">
                <label class="ds_label" for="user-testing-details">What kinds of testing have you done with users?</label>
                <textarea id="user-testing-details" class="ds_input" rows="4" data-validation="requiredField" aria-required="true" onchange="store('user-testing-details');"></textarea>
              </div>
            </div>
          </div>
          <div class="ds_radio">
            <input id="user-testing-no" value="no" name="user-testing-query" class="ds_radio__input" type="radio" onchange="storeRadio('user-testing-query', 'no');"/>
            <label for="user-testing-no" class="ds_radio__label">No</label>
          </div>
        </div>
    </fieldset>
  </div>
</form>
<form>
  <div class="ds_question">
    <fieldset id="training-query">
      <legend>Do you do accessibility training?</legend>

        <div class="ds_field-group">
          <div class="ds_radio">
            <input id="training-yes" value="yes" name="training-query" class="ds_radio__input" type="radio" onchange="storeRadio('training-query', 'yes');"/>
            <label for="training-yes" class="ds_radio__label">Yes</label>

            <div class="ds_reveal-content">
              <div class="ds_question">
                <label class="ds_label" for="training-details">What kinds of accessibility training have you done?</label>
                <textarea id="training-details" class="ds_input" rows="4" data-validation="requiredField" aria-required="true" onchange="store('training-details');"></textarea>
              </div>
            </div>
          </div>
          <div class="ds_radio">
            <input id="training-no" value="no" name="training-query" class="ds_radio__input" type="radio" onchange="storeRadio('training-query', 'no');"/>
            <label for="training-no" class="ds_radio__label">No</label>

            <div class="ds_reveal-content">
              <div class="ds_question">
                <p><a href="#">This resourse</a> could help you with training.(need resource here)</p>
              </div>
            </div>
          </div>
        </div>
    </fieldset>
  </div>
</form>
<form>
    <fieldset>
        <legend>Have you used persona testing where personas have some kind of disability, but are not defined by that disability?(more here, is there a resource I can point to?)</legend>

        <div class="ds_field-group  ds_field-group--inline">
            <div class="ds_radio">
                <input class="ds_radio__input" id="personas-yes" name="personas-query" type="radio" value="yes" onchange="storeRadio('personas-query', 'yes');"/>
                <label class="ds_radio__label" for="personas-yes">Yes</label>
            </div>

            <div class="ds_radio">
                <input class="ds_radio__input" id="personas-no" name="personas-query" type="radio" value="no" onchange="storeRadio('personas-query', 'no');"/>
                <label class="ds_radio__label" for="personas-no">No</label>
            </div>
        </div>
    </fieldset>
</form>
<form>
    <fieldset>
        <legend>Are accessibility requirements part of your procurement process?</legend>

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
    </fieldset>
</form>
<form>
  <div class="ds_question">
    <fieldset id="assistive-technology-query">
      <legend>Have you done testing with assistive technology?</legend>

        <div class="ds_field-group">
          <div class="ds_radio">
            <input id="assistive-technology-yes" value="yes" name="assistive-technology-query" class="ds_radio__input" type="radio" onchange="storeRadio('assistive-technology-query', 'yes');"/>
            <label for="assistive-technology-yes" class="ds_radio__label">Yes</label>

            <div class="ds_reveal-content">
              <div class="ds_question">
                <form>
                  <fieldset aria-describedby="ds_hint">
                    <legend>What kinds of assistive technology have you tested with?</legend>
                    <p class="ds_hint-text" id="ds_hint">Select as many as you like</p>

                    <div class="ds_field-group">
                      <div class="ds_checkbox">
                        <input class="ds_checkbox__input" id="screen-reader" type="checkbox" onchange="storeCheckbox('screen-reader');"/>
                        <label class="ds_checkbox__label" for="screen-reader">Screen reader</label>
                      </div>

                      <div class="ds_checkbox">
                        <input class="ds_checkbox__input" id="voice-browser" type="checkbox" onchange="storeCheckbox('voice-browser');"/>
                        <label class="ds_checkbox__label" for="voice-browser">Voice browser</label>
                      </div>

                      <div class="ds_checkbox">
                        <input class="ds_checkbox__input" id="braille-display" type="checkbox" onchange="storeCheckbox('braille-display');"/>
                        <label class="ds_checkbox__label" for="braille-display">Refreshable Braille display</label>
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div class="ds_radio">
            <input id="assistive-technology-no" value="no" name="assistive-technology-query" class="ds_radio__input" type="radio" onchange="storeRadio('assistive-technology-query', 'no');"/>
            <label for="assistive-technology-no" class="ds_radio__label">No</label>
          </div>
        </div>
    </fieldset>
  </div>
</form>
<form>
  <div class="ds_question">
    <fieldset id="audited-query">
      <legend>Have you been audited by a third party?</legend>

        <div class="ds_field-group">
          <div class="ds_radio">
            <input id="audited-yes" value="yes" name="audited-query" class="ds_radio__input" type="radio" onchange="storeRadio('audited-query', 'yes');"/>
            <label for="audited-yes" class="ds_radio__label">Yes</label>

            <div class="ds_reveal-content">
              <div>
                <label class="ds_label" for="audited-details">Which organisation performed the audit?</label>
                <input class="ds_input" type="text" id="audited-details" onchange="store('audited-details');"/>
              </div>
              <div data-module="ds-datepicker" class="ds_datepicker">
                <label class="ds_label" for="audited-date">When was the audit performed?</label>
                <div class="ds_input__wrapper">
                  <input id="audited-date" placeholder="dd/mm/yyyy" type="text" class="ds_input  ds_input--fixed-10" onchange="store('audited-date');"/>
                </div>
              </div>
            </div>
          </div>
          <div class="ds_radio">
            <input id="audited-no" value="no" name="audited-query" class="ds_radio__input" type="radio" onchange="storeRadio('audited-query', 'no');"/>
            <label for="audited-no" class="ds_radio__label">No</label>
          </div>
        </div>
    </fieldset>
  </div>
</form>