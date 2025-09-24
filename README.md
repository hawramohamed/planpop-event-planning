
![logo](./assets/PlanPopLogo.png)
# Welcome to PlanPop — Your Personal Event Planning Hub
PlanPop makes organizing events simple, stylish, and stress-free. Whether you're hosting a birthday, study session, team meetup, or weekend hangout, PlanPop helps you create, track, and share your plans with ease. Build your own event dashboard, manage tasks with interactive checklists, and explore public events for inspiration. Sign up today and start planning with purpose!



## Table of Contents
- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Application](#running-the-application)
- [Removing Git and Creating Your Own Repo](#removing-git-and-creating-your-own-repo)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites


## Clone the Repository




## Removing Git and Creating Your Own Repo
To remove the existing Git history and create your own repository:

1. Remove the existing .git folder:
  ```bash
  rm -rf .git
  ```
2. Initialize a new Git repository:
  ```bash
  git init
  ```
3. Add all files to the new repository:
  ```bash
  git add .
  ```
4. Commit the changes
   ```bash
   git commit -m "Initial commit"
   ``` 
5. Create a new repository on GitHub (or any other platform) and follow the instructions to push your local repository.
  Make a new repository on [GitHub](https://github.com/) named `<your-project-name>`
  Now link your local project to your remote GitHub repo:
  ```bash
  git remote add origin https://github.com/<github-username>/YOUR_APP_NAME.git
  git push origin main
  ```

> 🚨 Do not copy the above command. It will not work. Your GitHub username will replace `<github-username>` (including the `<` and `>`) in the URL above.

## Running the application


## Features
- User registration and login with session management
- Basic CRUD operations
- Modular file structure
- Example routes and controllers
- Basic user model setup
- Middleware for templates and authorization
- Basic authentication flow

## License
This project is licensed under the MIT License. See the LICENSE file for details.


