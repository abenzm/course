/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Myron Zhang",
  "role": "Software Managment",
  "contacts": {
    "mobile": "+86 18566680567",
    "email": "myron.z.zhang@gmail.com",
    "github": "myron-z-zhang",
    "twitter": "@zhang-myron",
    "location": "Shenzhen China",
  },
  "biopic": "images/logo.jpg",
  "welcomeMessage": "Welcome to Myron's blog!",
  "skills": ["Computer", "Swimming", "Driving", "Travel freely"],
  display: function() {
    if (this.role.length > 0) {
      $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    }
    if (this.name.length > 0) {
      $("#header").prepend(HTMLheaderName.replace("%data%",
        this.name));
    }
    if (this.contacts.mobile.length > 0) {
      $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
      $("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts
        .mobile));
    }
    if (this.contacts.email.length > 0) {
      $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
      $("#footerContacts").append(HTMLemail.replace("%data%", this.contacts
        .email));
    }
    if (this.contacts.twitter.length > 0) {
      $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
      $("#footerContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
    }
    if (this.contacts.github.length > 0) {
      $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
      $("#footerContacts").append(HTMLgithub.replace("%data%", this.contacts
        .github));
    }
    if (this.contacts.location.length > 0) {
      $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts
        .location));
      $("#footerContacts").append(HTMLlocation.replace("%data%", this.contacts
        .location));
    }

    if (this.biopic.length > 0) {
      $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    }
    if (this.welcomeMessage.length > 0) {
      $(".biopic").after(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    }

    $(".welcome-message").after(HTMLskillsStart);
    this.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
  },
};

var work = {
  "jobs": [{
      "title": "Software Manager",
      "employer": "YYD Robot",
      "dates": "Sep 2015 ~ Current",
      "location": "Shenzhen China",
      "description": "Develop family/service robots based on Android platform."
    },
    {
      "title": "Software Director",
      "employer": "Ruizi Tech.",
      "dates": "Sep 2014 ~ Aug 2015",
      "location": "Shenzhen China",
      "description": "Make Push-To-Talk mobile phone and others smart devices."
    },
    {
      "title": "Software Project Manager",
      "employer": "BJ branch of SIM Tech.",
      "dates": "Sep 2013 ~ Aug 2014",
      "location": "Beijing China",
      "description": "Mak Push-To-Talk mobile phone for US company."
    },
    {
      "title": "Senior Software Engineer",
      "employer": "Opzoon Tech.",
      "dates": "Jun 2012 ~ Aug 2013",
      "location": "Beijing China",
      "description": "Develop smart router."
    },
    {
      "title": "Software Director",
      "employer": "Wireless k-phone Tech.",
      "dates": "Apr 2007 ~ Mar 2012",
      "location": "Shenzhen China",
      "description": "Develop and make feature phone."
    },
    {
      "title": "Senior Software Engineer",
      "employer": "Huawei Tech.",
      "dates": "Oct 2002 ~ Apr 2007",
      "location": "Beijing China",
      "description": "Develop router and switch products."
    }
  ]
};
work.display = function() {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);

    var workEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var workTitle =
      HTMLworkTitle.replace("%data%", job.title);
    var workEmployerTitle = workEmployer + workTitle;
    $(".work-entry:last").append(workEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",
      job.dates));
    $(".work-entry:last").
    append(HTMLworkLocation.replace("%data%",
      job.location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", 
      job.description));
  });
};

var education = {
  "schools": [{
    "name": "Nanjing University of Science and Technology",
    "location": "Nanjing China",
    "degree": "Barchelor",
    "majors": [
      "Electronic engineering",
    ],
    "dates": "1994 - 1998",
    "url": "http://www.njust.edu.cn/",
  }],
  "onlineCourses": [{
    "title": "Front-end web developer",
    "school": "Udacity",
    "dates": "2017.03 - current",
    "url": "https://www.udacity.com",
  }],
};
education.display = function() {
  $("#education").append(HTMLschoolStart);

  education.schools.forEach(function(school) {
    var schoolName = HTMLschoolName.replace("%data%",
      school.name).replace("#", school.url);
    var schoolDegree =
      HTMLschoolDegree.replace("%data%", school.degree);
    var schoolNameDegree = schoolName + schoolDegree;
    $(".education-entry:last").append(schoolNameDegree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",
      school.dates));
    $(".education-entry:last").
    append(HTMLschoolLocation.replace("%data%",
      school.location));
    school.majors.forEach(function(major) {
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",
      major));
    });
  });

  $(".education-entry:last").append(HTMLonlineClasses);
  for (var course in education.onlineCourses) {
    var onlineTitle = HTMLonlineTitle.replace("%data%",
      education.onlineCourses[course].title);
    var onlineSchool =
      HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var onlineTitleSchool = onlineTitle + onlineSchool;
    $(".education-entry:last").append(onlineTitleSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",
      education.onlineCourses[course].dates));
    $(".education-entry:last").
    append(HTMLonlineURL.replace("%data%",
      education.onlineCourses[course].url));
  }

};

var projects = {
  "projects": [{
      "title": "YOS2",
      "dates": "Mar 2017",
      "description": "Yongyida robot OS 2",
      "images": [
        "images/yos2_1.png",
        "images/yos2_2.png",
      ],
    },
    {
      "title": "YOS1",
      "dates": "Apr 2016",
      "description": "Yongyida robot OS 1",
      "images": [
        "images/yos1_1.png",
        "images/yos1_2.png",
      ],
    },
  ]
};

projects.display = function() {
  $("#projects").append(HTMLprojectStart);
  for (var project in projects.projects) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
      project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
      project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[
      project].description);
    $(".project-entry:last").append(formattedDesc);
    for (var image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[
        project].images[image]);
      $(".project-entry:last").append(formattedImage);
    }
  }
};

$("#mapDiv").append(googleMap);
