---

title: Compliance
layout: default

---

2.0 vs 2.1?

<form>
  <div class="ds_question">
    <fieldset id="compliance-query">
      <legend>Are you compliant with the <a href="https://www.w3.org/TR/WCAG21">Web Content Accessibility Guidelines version 2.1</a> (WCAG) A and AA success criteria?</legend>

      <div class="ds_field-group">
        <div class="ds_radio">
          <input id="compliance-fully" value="fully" name="compliance-query" class="ds_radio__input" type="radio" onchange="storeRadio('compliance-query', 'fully');"/>
          <label for="compliance-fully" class="ds_radio__label">Fully</label>
        </div>
        <div class="ds_radio">
          <input id="compliance-partially" value="partially" name="compliance-query" class="ds_radio__input" type="radio" onchange="storeRadio('compliance-query', 'partially');"/>
          <label for="compliance-partially" class="ds_radio__label">Partially</label>
        </div>
        <div class="ds_radio">
          <input id="compliance-not" value="not" name="compliance-query" class="ds_radio__input" type="radio" onchange="storeRadio('compliance-query', 'not');"/>
          <label for="compliance-not" class="ds_radio__label">Not</label>
        </div>
      </div>
    </fieldset>
  </div>
</form>