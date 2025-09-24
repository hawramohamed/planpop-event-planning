
![logo](./assets/PlanPopLogo.png)
# Welcome to PlanPop — Your Personal Event Planning Hub
PlanPop makes organizing events simple, stylish, and stress-free. Whether you're hosting a birthday, study session, team meetup, or weekend hangout, PlanPop helps you create, track, and share your plans with ease. Build your own event dashboard, manage tasks with interactive checklists, and explore public events for inspiration. Sign up today and start planning with purpose!



## Table of Contents
- [Features](#features)
- [Planning](#planning)
- [License](#license)

## Features
- User registration and login with session management
- Basic CRUD operations
- Modular file structure
- Example routes and controllers
- Basic user model setup
- Middleware for templates and authorization
- Basic authentication flow

## Planning 
  <strong> User Stories </strong>
  - As a User (AAU), I want to sign up for an account and sign in, so that I can access my event dashboard and manage my plans.
  - AAU, I want an easy and consistent way to navigate through the site, whether I am signed in or not. I need to quickly access options to sign up, sign in, view my events, or sign out, depending on my current status.
  - AAU, I need a dedicated page to view all events I’ve created, to easily manage and review my upcoming plans.
  - AAU, I want to easily find and click on an ‘Add New Event’ link, which takes me to a form for creating a new event with details like title, date, location, and description.
  - AAU, after filling out the event form, I want to submit it and receive confirmation that the event has been saved to my dashboard.
  - AAU, I need the ability to edit and delete events I’ve created, allowing me full control over managing my schedule.
  - AAU, I want to add checklist items to each event, so I can track tasks and preparation steps.
  - AAU, I want to mark checklist items as complete, so I can monitor my progress and stay organized.
  - AAU, I am interested in viewing a list of all other app users, to foster a sense of community and exchange planning ideas.
  - AAU, I want the option to click on another user’s profile and view all of their public events and checklists, to get inspiration for my own planning.

  <strong>Routes</strong><br>
  <br>
    /users/:userId/events	GET (index)<br>
    /users/:userId/events/new	GET (new)<br>
    /users/:userId/events	POST (create)<br>
    /users/:userId/events/:eventId	GET (show)<br>
    /users/:userId/events/:eventId/edit	GET (edit)<br>
    /users/:userId/events/:eventId	PUT (update)<br>
    /users/:userId/events/:eventId	DEL (delete)<br>

<strong>Wire Frames</strong><br>
<br>
<img src="./assets/Picture1.png"/><br>
<img src="./assets/Picture2.png" /><br>

<strong> Entity Relationship Diagram </strong><br>
<br>
<img src="./assets/CRUDAPPproject.drawio (2).png" />

## License
This project is licensed under the MIT License. See the LICENSE file for details.


