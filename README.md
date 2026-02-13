

# COLORS LAMP Web Application

## Overview

COLORS is a web-based application built using the LAMP stack (Linux, Apache, MySQL, PHP). The application allows users to log in using a username and password stored in a MySQL database hosted on a DigitalOcean droplet.

Once authenticated, users can:

- Search for colors stored in the database using partial matching.
- Add new colors to the database through a simple input form.

The project demonstrates full-stack integration between a frontend interface and backend API endpoints connected to a live SQL database.

---

## Technologies Used

- Linux (Ubuntu Droplet)
- Apache Web Server
- MySQL Database
- PHP (API endpoints)
- HTML5
- CSS3
- JavaScript
- MD5 hashing (for password handling)
- DigitalOcean (cloud hosting)

---

## Project Structure

colors-lamp/
│
├── api/
│   ├── Login.php
│   ├── AddColor.php
│   ├── SearchColors.php
│
├── public/
│   ├── index.html
│   ├── color.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── code.js
│   │   └── md5.js
│   └── images/
│       └── background.png
│
├── README.md
├── LICENSE.md

- `api/` contains backend PHP endpoints.
- `public/` contains frontend HTML, CSS, JavaScript, and static assets.

---

## How the Application Works

1. A user logs in through the login form.
2. The credentials are sent to the PHP Login endpoint.
3. The backend validates the user against the MySQL database.
4. Upon successful login:
   - The user can search for colors stored in the database.
   - The user can add new color entries to the database.

All database communication is handled server-side through PHP scripts.

---

## Setup Instructions

To run this project locally or on a server:

1. Install a LAMP stack:
   - Linux
   - Apache
   - MySQL
   - PHP

2. Configure Apache so the `public/` directory is accessible via the web server.

3. Import or create a MySQL database with:
   - A users table (for login credentials)
   - A colors table (for storing color data)

4. Update database credentials inside the PHP files in the `api/` directory.

5. Start Apache and MySQL services.

6. Navigate to:
   http://your-server-ip/

---

## Running the Application (Droplet Deployment)

This application is deployed on a DigitalOcean droplet.

Steps used for deployment:

1. Files placed inside `/var/www/html`
2. Apache configured to serve the directory
3. MySQL database configured directly on the droplet
4. PHP endpoints connected to the local database instance

---

## Assumptions & Limitations

- The database name was not strictly specified in the lab instructions.
- The application assumes an existing configured MySQL database.
- No advanced authentication framework is used.
- Password hashing is implemented using MD5 for educational purposes only.
- The UI is minimal and focused on functionality rather than advanced design.

---

## AI Usage Disclosure

ChatGPT was used during development for troubleshooting domain configuration and diagnosing deployment-related issues that were not explicitly described in the assignment instructions.

All core application logic, database structure, and system setup were implemented and tested manually.

---

## License

