 
var bio = {

    "name": "Tavleen Kaur",

    "role": "Front-End Web Developer",

    "welcomeMessage": "Tavleen Kaur  is a front-end web development enthusiast. She has completed her B.Tech in Computer Science  programming on his own and  plans to finish the Front-End Nanodegree.",

    "biopic": "images/logo2.png",

    "contacts": {

        "mobile": "+9899643214",

        "twitter": "tavleen16",

        "skype": "tavleen96",


        "location": "New Delhi,India",

        "email": "ttavleen@gmail.com",

        "github": "tavleen16"

    },

    "skills": ["HTML5", "CSS3", "Javascript", "Core Java", "Python", "C++"]

};



var work = {

    "jobs": [{

        "employer": "Sopra Steria.",

        "title": "Junior Software Engineer",

        "dates": " July 2017-Present",

        "location": "New Delhi, India",

        "description": "Developing test cases,generating and validating reports."

    }]

};



var projects = {

    "projects": [{

        "title": "Infotube",

        "dates": "2016",

        "description": "A Data Miner for Youtube",

        "images": ["images/R1.png"]

    }, {

        "title": "Audio Clipper & Joiner",

        "dates": "2015",

        "description": "A Java Application for trimming and merging audios",

        "images": ["images/R2.png"]

    }]

};



var education = {

    "schools": [{

        "name": "Guru Tegh Bahadur Institute of Technology",

        "location": "New Delhi,India",

        "degree": "B.Tech",

        "majors": ["Computer Science", "Engineering"],

        "dates": "2013-2017",



    }, {

        "name": "Guru Nanak Public School",

        "location": "New Delhi,India",

        "degree": "HSC",

        "majors": ["Science", "Maths", "Computers"],


        "dates": "2001-2013",



    }],

    "onlineCourses": [{

        "title": "Front-End Web Developer Nanodegree",

        "school": "Udacity",

        "dates": "2017",

        "url": "https://www.udacity.com/nanodegree"

    }]

};



//Bio

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);

    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedName, formattedRole).append(formattedImage, formattedMessage);

    $("#header").append(HTMLskillsStart);

    for (var skill = 0; skill < bio.skills.length; skill++) {

        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);

        $("#header").append(formattedSkills);

    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

    var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype);
    var formattedGithub = HTMLcontactGeneric.replace("%contact%", "github").replace("%data%", bio.contacts.github);

    $("#topContacts,#footerContacts").append(formattedMobile, formattedEmail, formattedTwitter, formattedSkype, formattedGithub);

};



//Education

education.display = function() {

    education.schools.forEach(function(school) { //for (var school in education.schools)

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);

        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);

        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);

    });

    //TODO: Make an if statement

    if (education["onlineCourses"].length !== 0) {

        $("#education").append(HTMLonlineClasses);

    }
    education.onlineCourses.forEach(function(course)
        //for (var course in education["onlineCourses"])
        {

            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);

            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);

            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);

            var formattedURL = HTMLonlineURL.replace("%data%", course.url);

            $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);

        });

};



//Work

work.display = function() {
    work.jobs.forEach(function(job)

        //for (var job in work.jobs)
        {

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

            var formattedDates = HTMLworkDates.replace("%data%", job.dates);

            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);

            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);

        }
    );
};



//Projects

projects.display = function() {


    for (var item in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[item].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        for (var image in projects.projects[item].images) { // projects.project[item].images.forEach(function(image)

            var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[item].images[image]);

            $(".project-entry:last").append(formattedImage);

        }


    }



};



bio.display();

education.display();

work.display();

projects.display();



function inName(name) {

    var fullName, firstName, lastName;

    fullName = name.split(" ");

    firstName = fullName[0].toLowerCase();

    firstName = firstName.slice(0, 1).toUpperCase() + firstName.slice(1);

    lastName = fullName[1].toUpperCase();

    fullName = firstName + " " + lastName;

    return fullName;

}



$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);