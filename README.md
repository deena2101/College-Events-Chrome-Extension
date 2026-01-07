# 📅 College Events Chrome Extension

A Chrome extension that displays **upcoming college events** in a clean and attractive popup interface.  
Events are dynamically fetched from a **Google Form + Google Sheets** setup, allowing students and faculty to add events easily without modifying the code.

---

## 🚀 Features

- 📌 Displays upcoming college events
- 📝 Students and faculty can add events using a Google Form
- 🔄 Automatically updates events from Google Sheets
- 🎨 Modern UI with background image and event cards
- ⚡ Lightweight and fast Chrome extension

---

## 🛠️ Technologies Used

- HTML  
- CSS  
- JavaScript  
- Google Forms  
- Google Sheets  
- OpenSheet API  
- Google Chrome Extensions (Manifest V3)

---

## 📂 Project Structure

college_event_extension:

manifest.json
popup.html
popup.js
style.css
background.jpg


## Working

1. A **Google Form** is created for students and faculty to submit event details.
2. The form responses are stored in **Google Sheets**.
3. The Google Sheet is converted into JSON using **OpenSheet API**.
4. The Chrome extension fetches this JSON data and displays events in the popup.

## 📌 Future Enhancements

- Event notifications
- Search and filter events
- Admin approval for events
- Event posters
- Dark / Light mode toggle
