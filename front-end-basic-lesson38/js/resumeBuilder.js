/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Myron Zhang",
  "role": "Software Managment",
  "contacts": {
    "mobile": "+8618566680567",
    "email": "myron.z.zhang@gmail.com",
    "github": "myron-z-zhang",
    "twitter": "@zhang-myron",
    "location": "Shenzhen China",
  },
  "biopic": "images/myron-logo.svg",
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
    }
    if (this.contacts.email.length > 0) {
      $("#topContacts").append(HTMLemail.replace("%data%", this.contacts.email));
    }
    if (this.contacts.twitter.length > 0) {
      $("#topContacts").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
    }
    if (this.contacts.github.length > 0) {
      $("#topContacts").append(HTMLgithub.replace("%data%", this.contacts.github));
    }
    if (this.contacts.location.length > 0) {
      $("#topContacts").append(HTMLlocation.replace("%data%", this.contacts
        .location));
    }

    if (this.biopic.length > 0) {
      $("#topContacts").append(HTMLbioPic.replace("%data%", this.biopic));
    }
    if (this.welcomeMessage.length > 0) {
      $("#topContacts").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    }

    $(".welcome-message").append(HTMLskillsStart);
    for (skill in this.skills) {
      $("#skills-h3").append(HTMLskills.replace("%data%", this.skills[skill]));
    }
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
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    var workEmployer = HTMLworkEmployer.replace("%data%",
      work.jobs[job].employer);
    var workTitle =
      HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var workEmployerTitle = workEmployer + workTitle;
    $(".work-entry:last").append(workEmployerTitle);
    $(".work-entry:last").append(HTMLworkDates.replace("%data%",
      work.jobs[job].dates));
    $(".work-entry:last").
    append(HTMLworkLocation.replace("%data%",
      work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[
      job].description));
  }
}

var education = {
  "schools": [{
    "name": "Nanjing University of Science and Technology",
    "location": "Nanjing China",
    "degree": "Barchelor",
    "major": "Electronic engineering",
    "dates": "1994 - 1998",
    "url": "http://www.njust.edu.cn/",
  }],
  "onlineCourse": [{
    "title": "Front-end web developer",
    "school": "Udacity",
    "dates": "2017.03 - current",
    "url": "https://www.udacity.com",
  }],
};
education.display = function() {
  $("#education").append(HTMLschoolStart);
  for (school in education.schools) {
    var schoolName = HTMLschoolName.replace("%data%",
      education.schools[school].name);
    var schoolDegree =
      HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var schoolNameDegree = schoolName + schoolDegree;
    $(".education-entry:last").append(schoolNameDegree);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%",
      education.schools[school].dates));
    $(".education-entry:last").
    append(HTMLschoolLocation.replace("%data%",
      education.schools[school].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",
      education.schools[school].major));
  }

  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourse) {
    var onlineTitle = HTMLonlineTitle.replace("%data%",
      education.onlineCourse[course].title);
    var onlineSchool =
      HTMLonlineSchool.replace("%data%", education.onlineCourse[course].school);
    var onlineTitleSchool = onlineTitle + onlineSchool;
    $(".education-entry:last").append(onlineTitleSchool);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%",
      education.onlineCourse[course].dates));
    $(".education-entry:last").
    append(HTMLonlineURL.replace("%data%",
      education.onlineCourse[course].url));
  }

}

var projects = {
  "projects": [{
      "title": "YOS2",
      "dates": "Mar 2017",
      "description": "Yongyida robot OS 2",
      "images": [
        "images/yos2_1.jpg",
        "images/yos2_2.jpg",
      ]
    },
    {
      "title": "YOS1",
      "dates": "Apr 2016",
      "description": "Yongyida robot OS 1",
      "images": [
        "images/yos1_1.jpg",
        "images/yos1_2.jpg",
      ]
    },
  ]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
      project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
      project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[
      project].description);
    $(".project-entry:last").append(formattedDesc);
  }
}

$("#mapDiv").append(googleMap);
