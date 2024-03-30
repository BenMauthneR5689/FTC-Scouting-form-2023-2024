function doPost(e) {
    var ss = SpreadsheetApp.openById("1Wl7ejbfjpcnma9xNJxFdjxVO7PfqfkHNZpRi8bn2jMs");
    var sheet = ss.getSheetByName("Scouting HTML form");
  
    var formData = [];
    for (var param in e.parameter) {
      formData.push(e.parameter[param]);
    }
  
    sheet.appendRow(formData);
  
    return ContentService.createTextOutput("Form submission received successfully.");
  }
  

  function onFormSubmit(e) {
    var sheetID = "YOUR_GOOGLE_SHEETS_ID"; // Replace with your Google Sheets ID
    var sheet = SpreadsheetApp.openById(sheetID).getActiveSheet();
    var responses = e.values;
    sheet.appendRow(responses);
  }
  