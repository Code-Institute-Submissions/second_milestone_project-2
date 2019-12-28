Title: Irish History timeline

This project provides an interactive timeline on 20th century Northern Irish history (with a possibility for expansion into broader Irish history). This is a proof of concept for a more detailed version of the same website involving a broader range of dates. This website could be pitched to any number of Irish history departments or projects around Ireland - for example the National Archives in Dublin, who could include it as a separate page (appropriately styled) on their website. Another possible customer could be the Northern Ireland tourist board, who could include this timeline on various tourism heritage sites.

The main appeal of this timeline is that it provides historical information in a way that is removed from the often dry and one-dimensional presentation of this material in academic texts. When clicking on a date on the timeline, a marker will appear on the google map window showing both the location of the event (or something exploring it further) and a picture of something related to the event at the location.


UX:

The UX principles behind this project are simple. It is a straightforward project with one goal - to provide an interactive timeline for users to explore more information about key dates in 20th century Northern Irish history. Therefore there are limited user types associated with this website:

User type 1: A user who wishes to know more about the dates listed on the timeline. This user should be able to find out more information about the dates listed on the timeline (e.g. locations, pictures) by clicking on one of those dates. This is the main user type for this website.

User type 2: A user who wishes to access further information about the body that has created the website. This user will be able to use the facebook and twitter links in the footer of the page to access the organisation's social media profiles.


Features:

FEATURE 1 - Interactive timeline:
Early on in the project I decided to use a heavily modified version of a timeline available online to allow for a more sophisticated interactive website. The timeline I eventually used was based on this source: https://codepen.io/cjl750/pen/mXbMyo. Originally, I had difficulty getting the interactive aspects of the timeline to work in my local server - I eventually discovered the reason to be that I had not linked to JQuery in my script links.

The interactive timeline came with a js file already compiled (saved in this project as timeline.js). This JQuery based JavaScript file contains one function (which contains a second function) which allows for the creation and deletion of the HTML class 'active'. When this class is added, different CSS rules are applied to that section of the timeline to highlight that it has been selected, and a custom section of text is displayed below the timeline.

The timeline is reactive, changing to individual icons (instead of a continuous line) under certain viewport sizes. Due to text clipping, I increased the threshold for changing to these individual icons from 600px to 850px.


FEATURE 2 - Maps API:

The most important part of this project is the Google Maps API, which provides the USP for this website. By connecting this map to the timeline, it is possible to provide users about these dates in a format which is unavailable anywhere else on the web (as far as my research has turned up). By showing relevant locations and images from those locations to users, it gives a much realer sense of history and may promote local tourism (Northern Ireland is not a big place to explore, so users visiting these places in real life as a result of visiting this website is not unreasonable).

I wrote the Javascript for this section under the guidance of the sources named below, and used JQuery to include listeners for clicks on the relevant sections of the timeline. Each marker has its own section in the maps.js file, which contains all the code needed to generate a marker and information box. An area for future development of this project could be developing a function to clean up this rather cumbersome code - something I began the process of before time constraints required this to be curtailed (as can be seen in some earlier github commits of the project).

Essential in the implementation of my Google Maps functionality was both the relevant pages of the Code Institute online programme and Traversy Media's video entitled "Google Maps JavaScript API Tutorial" (https://www.youtube.com/watch?v=Zxf1mnP5zcw).


Debugging/Testing:

There were several teething problems early on in the project. I could not get the map to appear in the first place, so I used Chrome to inspect the console (I was developing my website in atom). Using the console there, I saw that i had accidentally used a regular bracket instead of a curly brace to close an object in my initMap function.

User testing exposed some potential flaws. The text box for the markers had to be amended to ensure a comfortable user experience, while the lengths of the titles for each interactive aspect of the timeline had to be amended to make sure there was no overlap at any viewport size.

 
Deployment:

I deployed the project through GitHub pages. The changes from the conceptual version to the deployed version were relatively minimal, given the simple nature of the project (see original wireframe drawing contained in planning/wireframe.jpg).

Credits/References/additional help:
The code used for the timeline is a modified version of the timeline found at https://codepen.io/cjl750/pen/mXbMyo.

Traversy Media provided immensely useful guidelines on the Google Maps API at https://www.youtube.com/watch?v=Zxf1mnP5zcw.

In terms of books used, "Javascript & JQuery" by Jon Duckett was an indispensable resource.
