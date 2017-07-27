# _Givemo - A mobile friendly charity donation app_

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


## Screenshots of Application

Screenshots


Style guide for application
![alt text](https://github.com/kristendynamite/givemo/blob/master/src/assets/style_guide.jpg?raw=true)



## Setup/Installation Requirements

* _Go to Github repository page, search for givemo._
* _Click the "download or clone" button and copy the link to givemo_
* _In your computers terminal type "git clone" & paste the copied link._
* _CD into givemo_
* _Open in atom_
* _In terminal run... _
* _$ npm install_
* _$ bower init_
* _$ bower install_
* _go to https://firebase.google.com/ and follow their instructions for getting an API key_
* _create a new file called api-keys.ts in the src/app directory. Copy the code from Firebase into it. Follow the example code below._

* _export var masterFirebaseConfig = {_
* _apiKey: "xxxx",_
* _authDomain: "xxxx.firebaseapp.com",_
* _databaseURL: "https://xxxx.firebaseio.com",_
* _storageBucket: "xxxx.appspot.com",_
* _ messagingSenderId: "xxxx"_
* _};_
* _$ ng serve_
* _open localhost:4200 in web browser_


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

## License

This project is licensed under the MIT License

**_Kristen McKee, Connor Larsen, Nick Wise, and Guy Anderson_** Copyright (c) 2017




# Givemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
