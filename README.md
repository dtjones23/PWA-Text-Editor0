# Text Editor Starter Code

## Description
J.A.T.E is a Progressive Web App (PWA) that runs offline and can be installed locally. It utilizes IndexedDB and the idb package for data persistence and is deployed on Render.
## Usage
    AS A developer
    I WANT to create notes or code snippets with or without an internet connection
    SO THAT I can reliably retrieve them for later use

    GIVEN a text editor web application
    WHEN I open my application in my editor
    THEN I should see a client server folder structure
    WHEN I run `npm run start` from the root directory
    THEN I find that my application should start up the backend and serve the client
    WHEN I run the text editor application from my terminal
    THEN I find that my JavaScript files have been bundled using webpack
    WHEN I run my webpack plugins
    THEN I find that I have a generated HTML file, service worker, and a manifest file
    WHEN I use next-gen JavaScript in my application
    THEN I find that the text editor still functions in the browser without errors
    WHEN I open the text editor
    THEN I find that IndexedDB has immediately created a database storage
    WHEN I enter content and subsequently click off of the DOM window
    THEN I find that the content in the text editor has been saved with IndexedDB
    WHEN I reopen the text editor after closing it
    THEN I find that the content in the text editor has been retrieved from our IndexedDB
    WHEN I click on the Install button
    THEN I download my web application as an icon on my desktop
    WHEN I load my web application
    THEN I should have a registered service worker using workbox
    WHEN I register a service worker
    THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
    WHEN I deploy to Render
    THEN I should have proper build scripts for a webpack application

The following image shows the application's registered service worker:
![Screen Shot 2024-02-09 at 3 03 56 PM](https://github.com/dtjones23/PWA-Text-Editor0/assets/142169871/e7e550ad-d197-4935-85dd-058e0e22982e)

The following image shows the application's IndexedDB storage:
![Screen Shot 2024-02-09 at 3 02 29 PM](https://github.com/dtjones23/PWA-Text-Editor0/assets/142169871/4e002899-f3c7-4353-8687-0e42e7bd47df)

The following image shows the application's manifest.json file:
![Screen Shot 2024-02-09 at 3 02 09 PM](https://github.com/dtjones23/PWA-Text-Editor0/assets/142169871/94d6c944-0d2a-430e-a049-2c588ce8296a)

    
    
## Installation
The application is has been deployed on Render.
For the user to run text-editor locally, do the following:
  1. Open repository in terminal
  2. Run npm install
  3. Run npm run start
  4. Wait for build to complete then open localhost

  ![Screen Shot 2024-02-09 at 3 11 38 PM](https://github.com/dtjones23/PWA-Text-Editor0/assets/142169871/4e7d20d4-e346-4480-acce-df343537758a)


## Credits
- PWA Course Module
