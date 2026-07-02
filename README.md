🕌 Portail HABOUS – Plateforme Numérique des Services Islamiques

HABOUS-Portal is a multifunctional web platform designed to centralize the digital religious services provided by the **Ministère des Habous et des Affaires Islamiques** (Morocco) into a single, unified, multilingual portal.

This project was developed as part of a **Final-Year Internship (Stage PFE)** at the Ministère des Habous et des Affaires Islamiques, under the supervision of the Direction des Systèmes d'Information.

🚀 Main Features

🧎 Front Office (Public / Users)
* Read the **Holy Quran** in multiple languages (Arabic, French, English)
* View **personalized prayer times** based on the selected city
* Automatic **Adhan** playback in real time
* Browse a **Hijri / Gregorian calendar** with an interactive date converter
* Locate nearby **mosques** on an interactive map
* Watch/listen to **Friday sermons (Khotba)** — video, text or live
* Ask religious questions through an **interactive FAQ / Q&A space**

🛠️ Back Office (Admin & Content Integrators)
* Secure **authentication** page reserved for content managers
* **Admin space**: create, edit, disable or delete integrator accounts, and assign roles
* **Content Integrator space**: personalized dashboard per role (content creation, validation, archiving)
* **Creator Dashboard** for publishing new content
* **Validator Dashboard** for reviewing and approving content before publication

🏗️ Architecture Overview

The platform follows a clear separation between the **Front Office** (public-facing services) and the **Back Office** (content & user management), ensuring reliability, security and traceability of published information.

| Layer | Role |
|---|---|
| Front Office | Public services: Quran, prayer times, calendar, mosque map, sermons, FAQ |
| Back Office | Admin & integrators: account management, content creation, validation, archiving |

📁 Modules – Usage Summary

**Quran (`/coran`)**
* Multilingual Quran reader (Arabic, French, English)
* Verse search and display

**Prayer Time (`/prayer-time`)**
* City-based prayer schedule
* Automatic Adhan playback

**Calendar (`/Calendar`)**
* Hijri ⇄ Gregorian interactive date converter

**Masjid (`/masjid`)**
* Interactive map of nearby mosques

**Audio (`/audio`)**
* Friday sermons (Khotba) — video, text and live streaming

**FAQ (`/faq`)**
* Interactive religious Q&A space for users

**Dashboard (`/dashboard`)**
* Admin, Creator and Validator dashboards for the Back Office

▶️ Run the Project

This is a static front-end project built with HTML5, CSS3 and vanilla JavaScript — no build step required.

```bash
# Simply open any module's index.html in your browser, e.g.:
open dashboard/index.html

# Or serve the whole project locally:
npx serve .
```

🔮 Future Improvements
* Backend API and database integration for the Back Office
* User accounts and personalized notifications
* Full multilingual support (AR / FR / EN) across all modules
* Mobile application version

🎤 Conclusion

Portail HABOUS illustrates a real-world use case of digital transformation for religious services in Morocco, centralizing previously fragmented tools (Quran, prayer times, mosque locator, calendar, sermons) into one accessible, official and multilingual platform, in line with the digital strategy of the Ministère des Habous et des Affaires Islamiques.
