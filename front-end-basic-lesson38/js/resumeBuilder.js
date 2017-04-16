/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name" : "Myron Zhang",
  "role" : "Engineer",
  "contacts": 
  {
    "mobile": 18566680567,
    "location": "Bao'an Shenzhen China",
  },
  "pic_url" : "img/myron-logo.svg",
  "welcom" : "Hello, world",
  "skill" : ["computer", "swimming", "driving"],
};
var work = {
  "jobs": [
  {
  "title": "Software Manager",
  "employer": "YYD Robot",
  "workDate": "Sep 2015 ~ Current",
  "location": "Shenzhen China",
  "desc": "Develop family/service robots based on Android platform."
  },
  {
    "title": "Software Director",
    "employer": "Ruizi Tech.",
    "workDate": "Sep 2014 ~ Aug 2015",
    "location": "Shenzhen",
    "desc": "Make Push-To-Talk mobile phone and others smart devices."
  },
  {
    "title": "Software Project Manager",
    "employer": "BJ branch of SIM Tech.",
    "workDate": "Sep 2013 ~ Aug 2014",
    "location": "Beijing",
    "desc": "Mak Push-To-Talk mobile phone for US company."
  },
  {
    "title": "Senior Software Engineer",
    "employer": "Opzoon Tech.",
    "workDate": "Jun 2012 ~ Aug 2013",
    "location": "Beijing",
    "desc": "Develop smart router."
  },
  {
    "title": "Software Director",
    "employer": "Wireless k-phone Tech.",
    "workDate": "Apr 2007 ~ Mar 2012",
    "location": "Shenzhen",
    "desc": "Develop and make feature phone."
  },
  {
    "title": "Senior Software Engineer",
    "employer": "Huawei Tech.",
    "workDate": "Oct 2002 ~ Apr 2007",
    "location": "Beijing",
    "desc": "Develop router and switch products."
  }
  ]
};
var education = {
  "schools": [ 
  {
    "name": "Nanjing University of Science and Technology",
  "attend": "1994",
  "location": "Nanjing China",
  "major": "Electronic",
  "minors": "Economics",
  "graduationYear": 1998,
  "onlineCourse": "",
  }
  ]
};
var projects = {
  "projects": [
    {
      "title": "YOS2",
      "dates": "Mar 2017",
      "description": "Yongyida robot OS 2"
    },
    {
      "title": "YOS1",
      "dates": "Apr 2016",
      "description": "Yongyida robot OS 1"
    }
  ]
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDesc);
  }
}

$("#mapDiv").append(googleMap);
