# _Givemo - A mobile charity donation app_

#### Angular2 - Group Week Project

#### By _Kristen McKee, Connor Larsen, Nick Wise and, Guy Anderson 7/27/2017_

## Description


## Specs
| Behavior | Input | Output |
|---|---|---|
| Application will start at a login screen | none | Sign in with Google |
| Sign in with a Google account | Text username and password | Application will take user to profile view. |
| User Profile View will have Profile picture imported from Google, User Name, Total Donation amount, Joined date, Favorite causes, and buttons for Log Out, and Find a Cause, Search, About, Profile. | See below | See below |
| Log Out button | Click | Will log the user out and return to Log In screen. |
| Search button (magnifying glass icon) | Click | Will take user charity search page. |
| Find a Cause button | Click | Will take user charity search page. |
| About button | Click | Will take user to about page. |
| If a charity has been chosen as a favorite it will be displayed on the Profile page | None | See Below |
| Favorited charities will display the charity name, Total that the user has donated to it, and buttons for donate and remove from favorites. | See below | See below |
| Donate button will pop up a donation window | Click |  |
| Remove button will remove the selected charity from the favorites list. | Click | The charity will no longer be displayed on the user profile page. |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |
|  |  |  |

## Screenshots of Application

Screenshots


Style guide for application
![alt text](https://github.com/kristendynamite/givemo/src/assets/style_guide.jpg?raw=true)


## Database Setup


* Select *File > Open > File* and select your database of choice from the root directory (social_media.sql for running the application, or social_media_test.sql for running tests)

* If the database does not already exist, add the following lines to the top of the script file:

  `CREATE DATABASE [your_database_name];`

  `GO`


* Navigate to `localhost:4200` in your web browser to view the application


## Setup/Installation Requirements

## How to Use

## Known Bugs

* User is not unique. Favorited charities will be shared by all users.
* If a cause has been selected twice for favorites, they will be displayed twice.

## Support and contact details

* Contact any of the collaborators on Github

## Technologies Used

* HTML
* SCSS/CSS
* Angular2
* JavaScript
* TypeScript
* Bower



## Acknowledgments


## License

This project is licensed under the MIT License

**_Kristen McKee, Connor Larsen, Nick Wise, and Guy Anderson_** Copyright (c) 2017




# Givemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
