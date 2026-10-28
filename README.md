# CareerConnect – Jobs and Internship Management System

## 1. Project Overview

CareerConnect is a frontend web application developed using HTML, CSS, and JavaScript. It helps students explore sample job and internship opportunities, search by keywords, filter listings, save jobs, and track application statuses.

## 2. Technologies Used

- HTML5 for page structure and semantic content.
- CSS3 for styling and responsive layouts.
- JavaScript for searching, filtering, saved jobs, and application tracking.
- Browser LocalStorage for retaining saved jobs and application information.
- GitHub Pages for hosting the website.

## 3. Main Features

- Search sample opportunities by title, company, location, and skills.
- Filter opportunities by job type and work mode.
- Save and remove saved opportunities.
- Add opportunities to the application tracker.
- Update application statuses.
- Preserve saved jobs and application details across browser refreshes using LocalStorage.

## 4. Security Considerations

This project is a frontend demonstration and does not collect passwords, payment details, or confidential personal information. It does not contain a backend authentication system or database. LocalStorage is browser storage and must not be treated as secure storage for sensitive information.

Input values and stored data should be validated before they are used. The application should handle invalid or unavailable LocalStorage data gracefully. No API keys, passwords, or other secrets should be committed to the public repository.

The current job listings are sample data. Users should verify opportunities with the relevant employers before applying.

## 5. Deployment and Automation

The project is hosted using GitHub Pages. When Pages is configured to publish from the `main` branch and the repository root, committed changes pushed to that branch can be published automatically by GitHub Pages. The deployment status can be checked in the repository's Actions tab or Settings → Pages.

This project uses GitHub Pages publishing rather than a custom CI/CD pipeline. Deployment success should be verified by opening the live website and testing its main features after changes are published.

## 6. Monitoring and Troubleshooting

After deployment, check the GitHub Pages build status, open the live website, and inspect the browser Developer Tools Console for JavaScript errors. Test search, filters, saved jobs, application status changes, and persistence after refreshing the page.

GitHub Pages does not provide application-specific backend logs for this frontend-only project. Browser Console checks and GitHub deployment status are the monitoring methods used for this project.

## 7. Testing

Manual functional testing should cover keyword search, individual filters, combined filters, saving and removing jobs, updating application statuses, and persistence after a page refresh. Record the expected result, actual result, pass/fail status, and screenshot evidence for each test.

Formal automated unit tests, server-side monitoring, and a security audit have not been implemented as part of the current version.

## 8. Limitations and Future Improvements

The application uses sample job listings and browser LocalStorage. It does not submit applications to real employers and does not include user authentication, a backend database, live job APIs, or centralized monitoring. Future improvements may include a secure backend, authenticated user accounts, live job data, automated tests, and more comprehensive monitoring.

## 9. Project Links

GitHub Repository: https://github.com/Anamika-kumari31/CareerConnect

Live Website: https://anamika-kumari31.github.io/CareerConnect/
