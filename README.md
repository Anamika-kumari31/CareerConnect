# CareerConnect – Jobs and Internship Management System

## About the Project

CareerConnect is a web-based Jobs and Internship Management System developed using HTML, CSS, and JavaScript. The main purpose of this project is to help users explore job and internship opportunities, search for suitable positions, filter opportunities according to job type and work mode, save interesting jobs, and track their applications.

The project provides a simple and user-friendly interface for students and job seekers who want to organize their job search in one place.

## Features

- **Job Listings:** Displays different job and internship opportunities.
- **Search Functionality:** Search opportunities by job title, company, or relevant keywords.
- **Job Type Filter:** Filter opportunities by internship or full-time employment.
- **Work Mode Filter:** Filter jobs by remote, hybrid, or on-site work mode.
- **Save Jobs:** Save interesting opportunities for later reference.
- **Application Tracker:** Track application status, including Interested and Interview.
- **Local Storage:** Keeps saved jobs and application information available after refreshing the browser.
- **Responsive Interface:** Provides a clean layout for browsing opportunities.
- **Search and Filter Combination:** Apply multiple filters together to find relevant opportunities.

## Technologies Used

- HTML5 – Structure of the website
- CSS3 – Styling, layout, and visual design
- JavaScript – Search, filtering, saved jobs, and application tracking
- Browser Local Storage – Persistent storage of saved jobs and application data

## Project Structure

```text
CareerConnect/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, or run it using the Live Server extension.
4. Explore the available opportunities.
5. Try the search box, job type filter, work mode filter, saved jobs, and application tracker.

## Testing and Quality Assurance

The project was tested manually using different search terms, job filters, saved-job actions, and application-tracking operations. Browser-console regression checks were also performed for important search and filtering scenarios.

During testing, a search issue was identified where searching for Java could also return JavaScript-related results. The search-matching logic was corrected, and the relevant regression checks passed.

Saved jobs and application status persistence were checked by refreshing the browser. Lighthouse was also used to review performance, accessibility, best practices, and SEO.

## Limitations

This is a front-end project. Job listings are sample data stored in JavaScript, and the application uses browser Local Storage. It does not currently include a backend database, user authentication, or a live job-posting API.

## Future Improvements

- Add user registration and login.
- Connect a backend and database.
- Integrate a live job and internship API.
- Add resume upload and application submission.
- Improve application analytics and notifications.

## Author

Developed as a learning project to practice front-end web development, JavaScript functionality, browser storage, debugging, and software testing.

