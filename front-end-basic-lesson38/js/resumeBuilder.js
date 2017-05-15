/*
bio is empty on purpose! Your code to build the resume will go here.
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
};
bio.display = function() {
  if (bio.role.length > 0) {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  }
  if (bio.name.length > 0) {
    $("#header").prepend(HTMLheaderName.replace("%data%",
      bio.name));
  }
  if (bio.contacts.mobile.length > 0) {
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts
      .mobile));
  }
  if (bio.contacts.email.length > 0) {
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts
      .email));
  }
  if (bio.contacts.twitter.length > 0) {
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts
      .twitter));
  }
  if (bio.contacts.github.length > 0) {
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts
      .github));
  }
  if (bio.contacts.location.length > 0) {
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts
      .location));
    $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts
      .location));
  }

  if (bio.biopic.length > 0) {
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  }
  if (bio.welcomeMessage.length > 0) {
    $(".biopic").after(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
  }

  $(".welcome-message").after(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    $("#skills").append(HTMLskills.replace("%data%", skill));
  });
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
    $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
    $(".work-entry:last").
    append(HTMLworkLocation.replace("%data%", job.location));
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
    append(HTMLschoolLocation.replace("%data%", school.location));
    school.majors.forEach(function(major) {
      $(".education-entry:last").append(HTMLschoolMajor.replace(
        "%data%", major));
    });
  });

  $(".education-entry:last").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(course) {
    var onlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var onlineSchool =
      HTMLonlineSchool.replace("%data%", course.school);
    var onlineTitleSchool = onlineTitle + onlineSchool;
    $(".education-entry:last").append(onlineTitleSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",
      course.dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%",
      course.url));
  });
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
  projects.projects.forEach(function(project) {
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDesc);
    project.images.forEach(function(image) {
      var formattedImage = HTMLprojectImage.replace("%data%", image);
      $(".project-entry:last").append(formattedImage);
    });
  });
};

$("#mapDiv").append(googleMap);
