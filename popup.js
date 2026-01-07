const eventsDiv = document.getElementById("events");
eventsDiv.innerHTML = "<p>Loading events...</p>";

// 🔴 PASTE YOUR WORKING JSON URL HERE
const SHEET_URL = "https://opensheet.elk.sh/18qzFGBYr6AiQ4RZwQueboQoJ8uQb_d5tAFEDLiLx8-8/Form Responses 1";
fetch(SHEET_URL)
  .then(res => res.json())
  .then(data => {
    eventsDiv.innerHTML = "";

    if (!data || data.length === 0) {
      eventsDiv.innerHTML = "<p>No events available.</p>";
      return;
    }

    data.forEach(event => {
      const div = document.createElement("div");
      div.className = "event";

      div.innerHTML = `
        <h4>${event["Event Title"]}</h4>
        <p><strong>Date:</strong> ${event["Event Date"]}</p>
        <p><strong>Time:</strong> ${event["Event Time"]}</p>
        <p><strong>Venue:</strong> ${event["Venue"]}</p>
        <p><strong>Organized By:</strong> ${event["Organized By (Department / Club)"]}</p>
        <p><strong>Type:</strong> ${event["Event Type"]}</p>
      `;

      eventsDiv.appendChild(div);
    });
  })
  .catch(err => {
    console.error(err);
    eventsDiv.innerHTML = "<p>Failed to load events.</p>";
  });
