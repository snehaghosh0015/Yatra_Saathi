# 🧭 Yatra Saathi
### A Tourist Safety Portal for Safer Travel Across India

**Smart India Hackathon (SIH) 2026 Project**

Yatra Saathi is a web-based tourism and travel-safety platform developed for the **Smart India Hackathon (SIH) 2026**.

The platform is designed to help travellers explore India while staying informed about **travel safety, nearby essential services, emergency assistance, destination information, routes, language support and tourist guidance**.

Instead of functioning only as a conventional travel-planning website, **Yatra Saathi places traveller safety and assistance at the centre of the experience**. It combines location tracking, danger-zone information, emergency support, multilingual assistance, nearby-place discovery, route information and a built-in tourist guide within a single web application.

---

## 📌 About the Project

Travelling to an unfamiliar destination can involve several challenges, including:

- Finding nearby hospitals, police stations and pharmacies
- Knowing about potentially risky areas
- Accessing emergency services quickly
- Communicating across different languages
- Finding reliable transport and route information
- Locating hotels, restaurants and other essential services
- Understanding important information about a destination

**Yatra Saathi** aims to bring these travel-support features together in one easy-to-use interface.

The application is primarily developed using **HTML5, CSS3 and JavaScript** and is designed to run directly in a modern web browser.

---

# 🎯 Project Objectives

Yatra Saathi aims to:

- 🛡️ Improve tourist safety during travel.
- 📍 Help travellers access location-based information.
- 🚨 Provide quick access to emergency assistance.
- 🗺️ Display nearby essential services and points of interest.
- ⚠️ Inform users about predefined danger zones and safety advisories.
- 🌐 Reduce language barriers through multilingual features.
- 💬 Provide a built-in tourist guide for supported destinations.
- 🧭 Assist users with route and travel information.
- 🏨 Help travellers discover hotels, restaurants and other nearby facilities.
- 📱 Provide a responsive and user-friendly travel interface.

---

# ✨ Key Features

## 1. 👤 User Registration and Login

Yatra Saathi provides registration and login interfaces for travellers.

Users can provide information such as:

- Name
- Password
- Nationality
- Preferred language
- Accessibility/disability-related information
- Travel-related information

The front-end application stores relevant user information using the browser's **localStorage**.

### Important

The current authentication system is a **front-end demonstration**.

It does not use:

- Server-side authentication
- A secure production database
- Password hashing
- Backend session management

Therefore, it should not be considered a production-grade authentication system.

---

# 2. 📍 Live Location and Tracking

Yatra Saathi uses the browser's **Geolocation API** to request the traveller's current location.

The application can:

- Request the user's current location
- Display the location on an interactive map
- Start location tracking
- Stop location tracking
- Maintain a tracking trail
- Display movement-related information
- Provide location-sharing functionality

Location access requires the user's permission.

Depending on the browser environment, geolocation generally requires **HTTPS or an appropriate trusted local development environment**.

---

# 3. 🗺️ Interactive Map

The application uses **Leaflet** for interactive maps.

Map tiles are provided through **OpenStreetMap**.

The map can display nearby points of interest such as:

- 🏥 Hospitals
- 👮 Police stations
- 🏨 Hotels
- 🍴 Restaurants
- 🏧 ATMs
- 💊 Pharmacies
- ⛽ Petrol pumps
- ☕ Cafes

Users can interact with map markers to view information about displayed locations.

Some location and place-discovery features rely on external geographic services and therefore require an internet connection.

---

# 4. ⚠️ Danger Zones and Safety Alerts

Yatra Saathi includes predefined information about potentially dangerous or sensitive travel areas.

The application can categorise areas into different risk levels, such as:

- 🔴 High Risk
- 🟠 Moderate Risk
- 🟡 Natural Hazard / Caution Areas

The application provides:

- Danger-zone information
- Risk descriptions
- Safety recommendations
- Map-based danger-zone markers
- Location-based proximity alerts

### ⚠️ Important Safety Disclaimer

The danger-zone information in the application is **application data and not a live official government warning feed**.

Users should always verify current conditions through:

- Official government advisories
- Local authorities
- Weather authorities
- Emergency services
- Verified local sources

Yatra Saathi should not be treated as a replacement for official emergency instructions.

---

# 5. 🚨 Emergency Assistance and SOS

The application provides quick access to emergency assistance information.

Supported emergency-related functionality includes:

- Ambulance assistance
- Police assistance
- Fire services
- Emergency helplines
- SOS interface
- Personal emergency contacts

Users can add and manage personal emergency contacts.

Personal contact information is stored using browser **localStorage**.

### ⚠️ Important

Emergency numbers and local contact information should always be independently verified before relying on them during actual travel.

---

# 6. 🌐 Multilingual Support

Yatra Saathi includes multilingual functionality to make the application more accessible to travellers from different linguistic backgrounds.

The application includes:

- Language selection
- Translated interface text
- Translation functionality
- Tourist phrasebook
- Common travel phrases
- Copy controls
- Speech-related controls

The phrasebook covers useful categories such as:

- 👋 Greetings
- 🧭 Directions
- 🆘 Help
- 🛡️ Safety
- 🚨 Emergency
- 🏨 Accommodation
- 🍴 Food

The project contains locally stored language and phrase data.

---

# 7. 💬 Tourist Guide Chatbot

Yatra Saathi includes a **rule-based tourist guide chatbot**.

The chatbot uses destination information stored within the project's JavaScript data.

It can provide information about supported destinations, including:

- Tourist attractions
- Local food
- Hotels and accommodation
- Transportation
- Travel tips
- Weather and packing guidance

The chatbot also provides suggested questions to help users interact with the tourist guide.

### Chatbot Limitation

The chatbot is a **rule-based application feature**, rather than a general-purpose AI system.

Its information may not always reflect:

- Current prices
- Current opening hours
- Temporary closures
- Live traffic
- Current weather
- Real-time travel conditions

---

# 8. 🔔 Notifications and Personalisation

Yatra Saathi includes a notification system for travel-related information.

Notification categories include:

- 🌦️ Weather
- 🛡️ Safety
- 👥 Crowd conditions
- ♿ Accessibility
- ℹ️ General travel information

Users can:

- Read notifications
- Dismiss notifications
- Filter notifications
- Clear notifications

The application also supports:

- 🌙 Dark mode
- ☀️ Light mode
- Personalised application preferences

Application preferences and selected data can be stored in browser storage.

### Notification Disclaimer

Some notification content is generated by the application and should not automatically be interpreted as a verified real-time alert.

---

# 9. 🧭 Route and Travel Information

Yatra Saathi includes route and travel-information functionality.

Supported travel modes include:

- 🚶 Walking
- 🚲 Cycling
- 🚗 Car
- 🚌 Bus
- 🚆 Train
- ✈️ Flight

The application can provide estimated travel information such as:

- Route
- Distance
- ETA (Estimated Time of Arrival)
- Travel mode
- Points of interest along routes

The project uses external routing functionality such as **OSRM** where applicable.

Route availability and accuracy depend on the external routing service and internet connectivity.

---

# 🛠️ Technologies Used

| Technology / Service | Purpose |
|---|---|
| **HTML5** | Application structure and content |
| **CSS3** | Styling, layout, responsiveness and themes |
| **JavaScript** | Application logic and interactive functionality |
| **Leaflet** | Interactive maps |
| **OpenStreetMap** | Map tile data |
| **Font Awesome** | Icons |
| **Browser Geolocation API** | Location access |
| **localStorage** | Browser-based data persistence |
| **OSRM** | Route calculation |
| **External Geographic Services** | Place/location-related functionality |
| **Python** | Optional build process through `build.py` |

No Node.js package installation is required for the basic static website.

---

# 📂 Project Structure

The repository currently follows this general structure:

```text
Yatra_Saathi/
│
├── index.html
│   └── Main HTML entry point
│
├── styles.css
│   └── Main stylesheet
│
├── app.js
│   └── Main application logic
│
├── build.py
│   └── Optional build script
│
├── source/
│   └── Source/project files
│
└── dist/
    └── Generated/distribution build
```

The GitHub repository currently shows `source` and `dist` directories alongside the primary `index.html`, `styles.css`, `app.js` and `build.py` files.

---

# 📄 Main Application Files

## `index.html`

The main HTML entry point of Yatra Saathi.

It defines the application's:

- Page structure
- Navigation
- User interface
- Map containers
- Forms
- Buttons
- Panels
- Chatbot interface
- Emergency/SOS interface
- Notification interface

---

## `styles.css`

Contains the application's visual styling.

It manages:

- Layout
- Responsive design
- Colours
- Typography
- Cards
- Buttons
- Navigation
- Forms
- Map-related UI
- Notifications
- Dark/light themes
- Animations and visual effects

---

## `app.js`

This is the primary JavaScript application file.

It contains a large portion of the application's client-side functionality, including:

- User interactions
- Registration/login logic
- localStorage handling
- Map functionality
- Location tracking
- Nearby-place functionality
- Danger-zone handling
- Emergency/SOS functionality
- Notifications
- Theme management
- Route functionality
- Chatbot behaviour
- UI controls

The current repository's `app.js` is approximately **3,800 lines long**, making it the central application logic file.

---

## `build.py`

`build.py` is an optional Python build utility.

It takes the project's:

```text
index.html
styles.css
app.js
```

and generates a deployable HTML file in the `dist/` directory with the CSS and JavaScript inlined.

The script can be run with:

```bash
python3 build.py
```

which produces:

```text
dist/index.html
```

The script also supports specifying another output location using `--out`.

---

# 🔄 Application Architecture

The basic application flow can be represented as:

```text
                 ┌─────────────────────┐
                 │     Traveller       │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      index.html      │
                 │   User Interface     │
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │      styles.css     │
                 │   UI / Responsive   │
                 │       Design        │
                 └─────────────────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │       app.js         │
                 │ Application Logic   │
                 └──────┬──────┬───────┘
                        │      │
          ┌─────────────┘      └─────────────┐
          ▼                                  ▼
 ┌──────────────────┐               ┌──────────────────┐
 │ Browser APIs     │               │ External Services │
 │                  │               │                  │
 │ Geolocation      │               │ OpenStreetMap    │
 │ localStorage     │               │ OSRM             │
 │ Speech/Clipboard │               │ Geographic APIs  │
 └──────────────────┘               └──────────────────┘
```

---

# ▶️ How to Run the Project

## Option 1 — Run Directly in a Browser

Because Yatra Saathi is primarily a static web application, the project can be opened through a modern browser.

Download or clone the repository:

```bash
git clone https://github.com/snehaghosh0015/Yatra_Saathi.git
```

Move into the project directory:

```bash
cd Yatra_Saathi
```

Then open:

```text
index.html
```

in a modern web browser.

### Recommended browsers

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

For features such as geolocation, running through a local development server is generally preferable to opening the HTML file directly.

---

# ▶️ Option 2 — Run Using VS Code

1. Clone the repository:

```bash
git clone https://github.com/snehaghosh0015/Yatra_Saathi.git
```

2. Open the `Yatra_Saathi` folder in **Visual Studio Code**.

3. Open:

```text
index.html
```

4. Run the application using a local development server.

5. Open the local URL generated by the development server.

This approach is recommended when testing browser features such as geolocation.

---

# ▶️ Option 3 — Run Using Python Local Server

If Python is installed, open a terminal inside the project folder and run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

in your browser.

On some systems, you may need:

```bash
python3 -m http.server 8000
```

---

# 🏗️ Optional Build Process

The repository includes `build.py`, which creates a single-file distribution build.

Run:

```bash
python3 build.py
```

The generated file will be:

```text
dist/index.html
```

The build script combines the project's HTML, CSS and JavaScript into the generated distribution HTML while preserving externally loaded CDN scripts.

You can therefore use:

```text
dist/index.html
```

as the generated distribution version.

---

# 🌐 Internet Requirements

Although the core interface is browser-based, an internet connection may be required for features involving external services.

These may include:

- Map tiles
- Geographic services
- Nearby-place data
- Route calculation
- External APIs
- Online resources

Some basic interface features may continue to work without an internet connection if their data is stored locally within the application.

---

# 🔐 Data and Privacy

The current version of Yatra Saathi primarily uses browser-side storage.

Examples include:

```text
localStorage
```

for information such as:

- User demonstration data
- Personal emergency contacts
- Application preferences
- Theme settings
- Other locally persisted application information

### Important Security Note

This project is a **hackathon prototype / demonstration application**.

It should not be assumed to provide production-grade security for sensitive personal information.

A production deployment would require additional security measures such as:

- Secure backend authentication
- Password hashing
- Database security
- HTTPS
- Secure session management
- Input validation
- Access control
- API security
- Data encryption
- Privacy controls

---

# ⚠️ Important Limitations

Yatra Saathi is a prototype developed for demonstration and hackathon purposes.

Therefore:

1. Danger-zone information is not a live government alert system.
2. Chatbot information may not always be current.
3. Map and route information depends on external services.
4. Nearby-place information may depend on geographic data providers.
5. Browser geolocation requires user permission.
6. LocalStorage-based authentication is not suitable for production security.
7. Emergency information should be independently verified.
8. Internet connectivity may be required for several features.
9. Weather, crowd and other notifications should not automatically be interpreted as verified real-time warnings.

---

# 🚀 Future Enhancements

Potential future improvements include:

- Secure backend authentication
- Real-time government safety alerts
- Real-time weather and disaster alerts
- AI-powered conversational tourist assistant
- Real-time public transport information
- Emergency-service integration
- SOS location sharing with trusted contacts
- Cloud-based user profiles
- Secure database storage
- Real-time multilingual translation
- Voice-based travel assistance
- Accessibility-focused travel recommendations
- Verified tourism and accommodation information
- Offline travel-safety support
- Advanced analytics and travel-risk prediction

---

# 🏆 Smart India Hackathon 2026

**Project:** Yatra Saathi  
**Event:** Smart India Hackathon (SIH) 2026  
**Category:** Tourism / Travel Safety  
**Platform:** Web Application

Yatra Saathi was developed as a technology solution aimed at making travel across India **safer, more informed and more accessible**.

---

# 👥 Project Team

**Team:** Travel Techies
**Author:** Sneha Ghosh
**Project:** Yatra Saathi – Tourist Safety Portal

---

# 📜 Disclaimer

Yatra Saathi is an educational and hackathon prototype intended to demonstrate the concept of a tourist safety and assistance platform.

Information displayed by the application may not represent current official government advisories, emergency instructions, prices, opening hours, weather conditions or real-time travel conditions.

Travellers should always verify important safety and emergency information using official and locally authoritative sources.

---

## 🔗 Repository

**GitHub Repository:**  
https://github.com/snehaghosh0015/Yatra_Saathi

---

## ⭐ Project Summary

> **Yatra Saathi — Travel smarter. Stay safer. Explore India with confidence.**
