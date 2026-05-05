// SETUP INSTRUCTIONS
// 1. Open your Google Sheet and name the tab "Leads"
// 2. Add headers: "Timestamp" in A1, "Email" in B1, "App" in C1
// 3. Open Extensions > Apps Script
// 4. Delete any existing code and paste this entire file
// 5. Click Save, then Deploy > New Deployment (or Manage Deployments > edit existing)
// 6. Type: Web app | Execute as: Me | Who has access: Anyone
// 7. Click Deploy and copy the Web App URL into both index.html files

function doGet(e) {
  const sheet = SpreadsheetApp
    .getActiveSpreadsheet()
    .getSheetByName("Leads");

  sheet.appendRow([
    new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
    e.parameter.email || "",
    e.parameter.app   || ""
  ]);

  return ContentService
    .createTextOutput("ok")
    .setMimeType(ContentService.MimeType.TEXT);
}
