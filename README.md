# _Givemo - A mobile charity donation app_

#### Angular2 - Group Week Project

#### By _Kristen McKee, Connor Larsen, Nick Wise and, Guy Anderson 7/27/2017_

## Description


## Specs
| Behavior | Input | Output |
|---|---|---|
| Application will start at a user login screen. | None | Sign in entry fields. |
| Sign in with a Google account. | Text username and password. | Application will take user to profile view. |
| User Profile View will have Profile Picture imported from Google, User Name, Total Donation Amount, Joined Date, Favorite Causes, and buttons for Log Out, and Find a Cause. | See below. | See below. |
| Nave bar will be present on all views and will have buttons for Search, About, and Profile. | Click | See below. |
| Log Out button. | Click | Will log the user out and return to Log In screen. |
| About button. | Click | Will take user to about page. |
| About page will display information about Givemo and the individual developers. | None | None |
| If a charity has been chosen as a favorite, it will be displayed on the Profile page | None | See Below. |
| Favorited charities will display the Charity Name, Total $ that the user has donated to it, and buttons for Donate and Remove from favorites. | See below. | See Below. |
| Donate button will pop up a donation window. | Click | See donation button below. |
| Remove button will remove the selected charity from the favorites list. | Click | The charity will no longer be displayed on the user profile page. |
| Search button (magnifying glass icon) or Find a Cause button. | Click | Will take user charity search page. |
| Search page will have 2 ways to search, Search by name, and by Category selection | See below. | See below. |
| Search by Name entry field. | Text: Center. | Display all charities with center somewhere in the name.  |
| Category selection. | Click: Human Rights. | Display all charities associated to the Human Rights category of charities. |
| Clicking multiple categories will add to the search.  |Click: Human Rights & Animals. | Will display all charities associated to the Human Rights and animals. |
| Uncheck a previously selected category. | Click | Removes charity category from search. |
| Charities that have been found by the search will display the Charity name, charity category, a link to the charities website, the charity's tag line, the overall charity rating, and buttons for More Info, Donate, and Add to Favorites. | None | None |
| More Info button. | Click | Will display a hidden window displaying the Charity's mission statement. |
| Close More Info button. | Click | Will hide More Info window. |
| Donate button. | Click | Will show a hidden window. |
| Donation window will display the charity name, entry for amount to donate, a selection for donation reoccurrence frequency. | None | None |
| Donation amount entry field. | Text: 100 | Currently has no functionality. |
| Donation reoccurrence frequency Radio button. | Click: Annually. | Currently has no functionality. |
| Submit donation button. | Click | Currently has no functionality. |
| Visit Website link. | Click | User will be taken to the charity's website. |
| Close donation window button. | Click | Will hide Donation window. |
| Add charity to favorites button (open heart icon) | Click | Charity will now be displayed on user profile page. |
| Once a charity has been added to favorites, the add to favorite button will change to a red heart. | None | Red heart. |
| Remove from favorites. | Click the Add to favorites button a second time. | Charity will be removed from user profile page. |
|  |  |  |
|  |  |  |


## Screenshots of Application

Screenshots


Style guide for application
![alt text](https://github.com/kristendynamite/givemo/blob/master/src/assets/style_guide.jpg?raw=true)



![alt text](https://github.com/conesgnomes/pdx-supper-club/blob/master/src/assets/desktop_home.png)

## Database Setup


* Select *File > Open > File* and select your database of choice from the root directory (social_media.sql for running the application, or social_media_test.sql for running tests)

* If the database does not already exist, add the following lines to the top of the script file:

  `CREATE DATABASE [your_database_name];`

  `GO`


* Navigate to `localhost:4200` in your web browser to view the application


## Setup/Installation Requirements

## How to Use

## Known Bugs

* Favorited charities are shared by all users.
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
