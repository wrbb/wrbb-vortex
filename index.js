// api url
const api_url = 
      "https://api.wrbbradio.org/getRecordings?id=";
 
// Defining async function
async function getapi() {

    var e = document.getElementById("showSel");
    var strUser = e.options[e.selectedIndex].value;

    // Storing response
    console.log(api_url + strUser);
    const response = await fetch(api_url + strUser);

   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);
}
 
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Date</th>
          <th>URL</th>
         </tr>`;

   
    // Loop to access all rows 
    for (let r of data.items) {
        tab += `<tr> 
        <td>${r.start.split("T")[0]}</td>
        <td><a href=${r.url}> ${r.url}</a></td>
        </tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("episodes").innerHTML = tab;
}