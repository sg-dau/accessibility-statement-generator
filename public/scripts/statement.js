let header = {
  html:`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Accessibility Statement for {{website}}</title>
      </head>
      <body>
  `,
  word:`
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
      <head>
        <meta charset='utf-8'>
        <title>Accessibility Statement for {{website}}</title>
      </head>
      <body>
  `,
}

let markdownTemplate =`
# Accessibility Statement

## Accessibility

{{organisation}} is committed to making its {{website}} accessible, in accordance with the accessibility regulations and usable for as many people as possible. The regulations in the UK are the [Public Sector Bodies (Websites and Mobile Applications)(No. 2) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/made).

This accessibility statement applies to {{website}}.

We have tried to improve the accessibility of our site by:

## Compliance status

This website is {{compliance}} compliant with the [Web Content Accessibility Guidelines version 2.1](https://www.w3.org/TR/WCAG21) (WCAG) Level A and AA success criteria.


## Feedback

If you cannot access any part of this site or want to report an accessibility problem, please tell us.

{{#feedback_name}}The person responsible for managing accessibility is {{feedback_name}}. {{/feedback_name}}{{#feedback_email}}{{#feedback_name}}They{{/feedback_name}}{{^feedback_name}}We{{/feedback_name}} can be contacted at [{{feedback_email}}](mailto:{{feedback_email}}).{{/feedback_email}}{{#feedback_form}} You can {{#feedback_email}}also {{/feedback_email}}use our [Contact Form]({{{feedback_form}}}) to raise your concern.{{/feedback_form}}

{{#feedback_process}}
Our process for dealing with feedback is {{feedback_process}}.
{{/feedback_process}}

## Enforcement procedure

The Equality and Human Rights Commission enforces the accessibility regulations.

If you're not happy with how we respond to your feedback, [contact the Equality Advisory and Support Service](https://www.equalityadvisoryservice.com). They are an independent advice service. They will advise you on what to do next.
`;

let htmlTemplate =`
    <h1>Accessibility Statement</h1>

    <h2>Accessibility</h2>

    <p>{{organisation}} is committed to making its {{website}} accessible, in accordance with the accessibility regulations and usable for as many people as possible. The regulations in the UK are the <a href="https://www.legislation.gov.uk/uksi/2018/952/made">Public Sector Bodies (Websites and Mobile Applications)(No. 2) Accessibility Regulations 2018</a>.</p>
    
    <p>This accessibility statement applies to {{website}}.</p>

    <p>We have tried to improve the accessibility of our site by:</p>

    <ul>
      <li></li>
    </ul>
    
    <h2>Compliance status</h2>
    
    <p>This website is {{compliance}} compliant with the <a href='https://www.w3.org/TR/WCAG21'>Web Content Accessibility Guidelines version 2.1</a> (WCAG) Level A and AA success criteria.</p>
    

    <h2>Feedback</h2>

    <p>If you cannot access any part of this site or want to report an accessibility problem, please tell us.</p>

    
    <p>{{#feedback_name}}The person responsible for managing accessibility is {{feedback_name}}. {{/feedback_name}}{{#feedback_email}}{{#feedback_name}}They{{/feedback_name}}{{^feedback_name}}We{{/feedback_name}} can be contacted at <a href="mailto:{{feedback_email}}">{{feedback_email}}</a>.{{/feedback_email}}{{#feedback_form}} You can {{#feedback_email}}also {{/feedback_email}}use our <a href="{{{feedback_form}}}">Contact Form</a> to raise your concern.{{/feedback_form}}</p>

    {{#feedback_process}}
    <p>Our process for dealing with feedback is {{feedback_process}}.</p>
    {{/feedback_process}}
    
    <h2>Enforcement procedure</h2>

    <p>The Equality and Human Rights Commission enforces the <a href='https://www.legislation.gov.uk/uksi/2018/952/regulation/4/made'>accessibility regulations</a>(the Public Sector Bodies(Websites and Mobile Applications)(No. 2) Accessibility Regulations 2018).</p>
    
    <p>If you're not happy with how we respond to your feedback, <a href='https://www.equalityadvisoryservice.com'>contact the Equality Advisory and Support Service</a>. They are an independent advice service. They will advise you on what to do next.<p>

    </body>
</html>
`;

function download(format) {
  // Prepare the data
  var view = {
    organisation: localStorage.getItem('organisation-name'),
    website: localStorage.getItem('website-name'),
    feedback_email: localStorage.getItem('feedback-email'),
    feedback_telephone: localStorage.getItem('feedback-telephone'),
    feedback_name: localStorage.getItem('feedback-name'),
    feedback_form: localStorage.getItem('contact-form'),
    process: localStorage.getItem('response-process'),
    compliance: localStorage.getItem('compliance-query')
  };
    
  var element = document.createElement('a');
  var outputHeader, outputBody, filename;

  // Select the correct template or data type
  switch (format) {
    case 'html':
      outputHeader = Mustache.render(header.html, view);
      outputBody = Mustache.render(htmlTemplate, view);
      filename = "accessibility-statement.html";
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputHeader + outputBody));
      break;

    case 'word':
      outputHeader = Mustache.render(header.word, view);
      outputBody = Mustache.render(htmlTemplate, view);
      filename = "accessibility-statement.doc";
      element.setAttribute('href', 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(outputHeader + outputBody));
      break;

    case 'markdown':
      outputBody = Mustache.render(markdownTemplate, view);
      filename = "accessibility-statement.md";
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(outputBody));
  }

  if(['html', 'word', 'markdown'].indexOf(format) >= 0) {
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }
}


//each section of the statement is defined here
//to add a section define it then make sure to add it in the desired location in the content variable
function contentHTML() {



  var complianceStatement = "<h2>Compliance statement</h2><p>" + localStorage.getItem('organisation-name') + " commits to making its websites accessible in line with the accessibility regulations. This accessibility statement applies to " + localStorage.getItem('website-url') + ".</p><p>This statement was prepared on " + localStorage.getItem('prepared-date');

  if (localStorage.getItem('reviewed-date')) {
     complianceStatement += " and last reviewed on ";
     complianceStatement += localStorage.getItem('reviewed-date');
  }


  var audited = "";
  if (localStorage.getItem('audited-query') == 'yes') {
    audited = localStorage.getItem('audited-details') + " audited the website on " + localStorage.getItem('audited-date') + ".";
  }

  var nonCompliantContent = "<h2>Not compliant with the accessibility regulations</h2>";
  //loop through local storage
  //get objects of "non-compliant-nn" keys
  //break objects into parts
  for (let i = 0; i < localStorage.length; i++) {

    if (localStorage.key(i).startsWith("non-compliant-")) {
      var issueObject = JSON.parse(localStorage.getItem(localStorage.key(i)));

      nonCompliantContent += "<h3>Issue:</h3><p>";
      nonCompliantContent += issueObject['issueValue'];
      nonCompliantContent += "</p><h3>Workarounds:</h3><p>";
      nonCompliantContent += issueObject['workaroundsValue'];
      nonCompliantContent += "</p><h3>To be resolved by:</h3><p>";
      nonCompliantContent += issueObject['resolvedByValue'];
      nonCompliantContent += "</p>";
    }
  }

  var disproportionateBurden  = "<h2>Disproportionate burden</h2>";
  for (let i = 0; i < localStorage.length; i++) {

    if (localStorage.key(i).startsWith("disproportionate-burden-")) {

      disproportionateBurden += "<h3>Issue:</h3><p>";
      disproportionateBurden += localStorage.getItem(localStorage.key(i));
      disproportionateBurden += "</p>";
    }
  }

  var outsideScope = "<h2>Not within the scope of regulations</h2>";
  for (let i = 0; i < localStorage.length; i++) {

    if (localStorage.key(i).startsWith("outside-scope-")) {

      outsideScope += "<h3>Issue:</h3><p>";
      outsideScope += localStorage.getItem(localStorage.key(i));
      outsideScope += "</p>";
    }
  }

  //put together sections here
  var content = title + accessibility + feedback + enforcement + complianceStatement + audited + nonCompliantContent + disproportionateBurden + outsideScope;
  return content;
}
