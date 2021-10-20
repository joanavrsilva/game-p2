<h1 align="center" color="blue">The Rock Paper Scissors Game</h1>

[Click here to view the live project](https://joanavrsilva.github.io/game-p2/)

This Rock Paper Scissors Game is a different way to play the traditional rock paper scissors game.
This game has two levels: the level 1 and the level 2.

The Level 1 corresponds to the traditional game of rock paper scissors with three possible choices: the rock hand, the paper hand and the scissors hand.

The second level corresponds to a different version of the traditional game, based on the version of the Big Bang Theory serie, which consists in five hypotheses: the rock hand, the paper hand, the scissors hand, the spock hand and the lizard hand.

In this game the user chooses a hand and the computer randomly generates another hand. The user and the computer score is available during the game. After three scores the game is over. Finally, instructions on how to play the game are also available.


![Screenshot (201)](https://user-images.githubusercontent.com/83631970/132969958-52de58f3-e4d5-4219-96a1-3225bb0911e0.png)
---

# Table of contents

- [UX](#ux)
    - [Website owner business goals](#website-owner-business-goals)
    - [User goals](#user-goals)
        - [New user goals](#new-user-goals)
        - [Returning user goals](#returning-user-goals)
        - [Website owner business goals](#website-owner-business-goals)
    - [User stories](#user-stories)
    - [Structure of the website](#structure-of-the-website)
    - [Wireframes](#wireframes)
    - [Surface](#surface)
- [Features](#features)
- [Technology](#technology)
- [Testing](#testing)
    - [Functionality testing](#functionality-testing)
    - [Compatibility testing](#compatibility-testing)
    - [Code Validation](#code-validation)
    - [User stories testing](#user-stories-testing)
    - [Issues found during site development](#issues-found-during-site-development)
    - [Performance testing](#performance-testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Screenshots](#screenshots)

# UX

## Website owner business goals

The main reason to create this website is to help present a fitness instructor to the public.
Page owner can present herself, her professional development path, achievements and top skills.
Also this website is the best place to show types of fitness classes, personal training and diet coaching descriptions.
And at the end owner will be able to present an offer with available packages and prices.

## User goals

### New user goals:
- user is able to find information about professional fitness trainer.
- user can easily locate class description, personal training sessions description and diet coaching sessions description.
- find location of the place and contact information.

### Returning user goals:
- user can learn more about instructor.
- user is able to find timetable.
- user can send a message to the instructor using a contact form.

## User stories

### As a business owner:
* I would like to present myself and my offer on the website clearly to potential customers.
* I need to make sure that my current and new customers will find a professional help with their diets, personal or group trainings.
* I want my customers to be able to learn how to use my website intuitively and easily.
* I would like to build and maintain relationship with potential and current customers.

### As a new customer:
* I wish to find information about personal trainer and check her/his qualifications.
* I would like to contact with a diet coach to change my eating habits and start healthy lifestyle. 
* I want to join in a fitness group with professional trainer, to find motivation and spend time actively.

### As a returning customer:

* I need to contact my diet coach to reschedule my meeting.
* I would like to check timetable for current days and times for a group trainings.
* I want to show my friend a location of the fitness studio where we can join for a semi private personal training.

## Structure of the website

The website is designed to be easy and user-friendy on all type of devices. On desktop, tablet or mobile device there should be no difference for a user to have a fantastic experience. All parts are designed to achieve maximum user satisfaction. User will get some interaction from the interface as links and buttons will have a hover effects.

## Wireframes

I used website wireframe.cc to create a wireframes.

![Wireframes](md_images/wireframes.png)
[Back to Table of contents](#table-of-contents)
___

## Surface
[Back to Table of contents](#table-of-contents)
___
### Colors
Main colours used in a project:
* background color: #ccddff
* font color: #6217ee
* link color: #ff6600
* hoover color: #ff9000

### Fonts 

* As a main font I used Almarai, and as a backup font sans-serif

### Images

* I used images from [Unspalsh.com](www.unsplash.com) and there are credited in [credits](#credits) section.


[Back to Table of contents](#table-of-contents)

## Features
The website consists of four pages: Home, How to play, Level 1 and Level 2. Two pages are accessible from a navigation menu in the top of the right side: Home and How to play. The other two pages, Level 1 and Level 2 are acessible from the button for Level 1 and from the button for Level 2 in the home page, and also from the pop-up when the game is finish. In the pop-up is also possible to return to the home page.

* Navigation bar 
    * On the right side there are two links: Home and How to play.
    * The navigation bar is visible on the top of each page.

* Colors
   * #2b2e53 - dark blue
   * white;
   * rgb(254,208,0); - yellow
   * rgb(177, 38, 63);- red
   * hsl(229, 25%, 31%);-blue

* Fonts
    * Roboto, sans-serif;

* Favicon

* Iterative buttons

* Pop-up images and buttons when Loses or Win after three scores

* Window open to instructions level 1 and level 2
[Back to Table of contents](#table-of-contents)
___

### Tecnologies Used
* HTML5 
* CSS
* Git
* GitHub
* Gitpod
* Google fonts
* Javascript
[Back to Table of contents](#table-of-contents)
___

# Technologies used

### HTML5
* As a structure language.

### CSS
* As a style language.

### Bootstrap 
* Bootstrap@4.5.3 as a CSS framework to keep responsive, mobile first aproach.

### Font Awesome
* As an icon library for a social links.

### Google fonts
* As a font resource.

### GitHub
* As a software hosting platform to keep project in a remote location.

### Git
* As a version-control system tracking.

### Gitpod
* As a development hosting platform.

### Wireframe.cc
* As a wireframing tool.

### GNU Image Manipulation Program [GIMP]
* As an image editor.


[Back to Table of contents](#table-of-contents)
___

### Home page
* The Home page contains a navigation menu on the right side with acess to the home page and to the how to play page;
* A title, two level play buttons and a image of the two levels;
* The user can understand the game, choose the level he want to play and see the instructions if needed;
![Screenshot (201)](https://user-images.githubusercontent.com/83631970/132969958-52de58f3-e4d5-4219-96a1-3225bb0911e0.png)
[Back to Table of contents](#table-of-contents)
___

### How to play
* The Play Level 1 page contains the level 1 game;
* This page contains a navigation menu, a score area and a game area;
* In the game area the user needs to choose one of three interatives hands (paper, scissor, rock), the computer choose the other randomly;
* The score area count the user and the computer wins choices;
* After three scores, a pop-up message appears, the user can choose play the level 1, the level 2 or return to the home page;
* The home page also contains a button call Play Level 1 that leads to this page;
![Screenshot (207)](https://user-images.githubusercontent.com/83631970/132970708-324e87c7-7573-4229-b6d6-15a66387812c.png)
[Back to Table of contents](#table-of-contents)
___

### Play Level 1
* The Play Level 1 page contains the level 1 game;
* This page contains a navigation menu, a score area and a game area;
* In the game area the user needs to choose one of three interatives hands (paper, scissor, rock), the computer choose the other randomly;
* The score area count the user and the computer wins choices.
* The home page also contains a button call Play Level 1 that leads to this page.
[Back to Table of contents](#table-of-contents)
___


### Play Level 2
* The Play Level 2 page contains the level 1 game;
* This page contains a navigation menu, a score area and a game area;
* In the game area the user needs to choose one of the five interatives hands (paper, scissor, rock, lizard, spock), the computer choose the other randomly;
* The score area count the user and the computer wins choices;
* After three scores, a pop-up message appears, the user can choose play the level 1, the level 2 or return to the home page;
* The home page also contains a button call Play Level 2 that leads to this page;
* This game level has based on the Big Bang Theory serie;
![Screenshot (211)](https://user-images.githubusercontent.com/83631970/132970990-e6034c45-ba49-4672-a33b-4972e4794879.png)
[Back to Table of contents](#table-of-contents)
___

### Future changes
* Possibly add another level;
* Maybe create a more interative home page;
[Back to Table of contents](#table-of-contents)
___

### Testing
#### Code Validation
* CSS
    * W3C CSS Validator - All errors have been fixed.
* HTML
    * Nu Html Checker - All errors have been fixed.
* Javascript
    *  Jshint - All errors have been fixed.  
[Back to Table of contents](#table-of-contents)
___
    
## Performance testing

I run [Lighthouse](https://developers.google.com/web/tools/lighthouse/) tool to check performance of the website.
I had to do couple of changes to improve performance. Screenshots are presented below:

![bug_performance1](testing/performance1.png)
![bug_performance2](testing/performance2.png)

Final results:
![performance_final](testing/performance_final.png)
I noticed that this tests scores vary from time to time and depends on external libraries as well.
[Back to Table of contents](#table-of-contents)
___ 

#### Performance testing
* Lighthouse performace
![Screenshot (230)](https://user-images.githubusercontent.com/83631970/134317193-326296b4-2e18-4d2e-ba13-39fbbf907c02.png)
[Back to Table of contents](#table-of-contents)
___

### Deployment
* The project was deployed on GitHub Pages.

The steps to deploy are as follows:
* In the GitHub repository, I navigate to the Settings tab;
* From the source section drop-down menu, I select the Main Branch;
* Once the master branch has been selected, the page refreshed with a detailed ribbon display to indicate the successful deployment;
* The site is published at ().
[Back to Table of contents](#table-of-contents)
___

### Credits
* Code
    * I used the Code Institute student template (https://github.com/Code-Institute-Org/gitpod-full-template);
    * Clever Programmer inspiration - Build a Rock Paper Scissors Game with JavaScript, HTML, & CSS;
    * W3school;
    * Buttons - Codepen.io styles inspiration.
* Images
    * Clipartmax.
* Favicon
    * Favicon generator - https://favicon.io/favicon-converter/.
* Level 2
    * The Big Bang Theory game of Rock, Paper, Scissors, Lizard and Spock.
[Back to Table of contents](#table-of-contents)
___

