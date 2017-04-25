/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  "name": "Myron Zhang",
  "role": "Software Managment",
  "contacts": {
    "mobile": +8618566680567,
    "email": "myron.z.zhang@gmail.com",
    "location": "Shenzhen China",
  },
  "picture": "img/myron-logo.svg",
  "welcome": "Hello, world",
  "skill": ["computer", "swimming", "driving"],
  display: function() {
    if (this.name.length > 0) {
      $("#header").append(HTMLheaderName.replace("%data%",
        this.name));
    }
    if (this.role.length > 0) {
      $("#header").append(HTMLheaderRole.replace("%data%", this.role));
    }
    if (this.skill.length > 0) {
      $("#header").append(HTMLskillsStart);
      $("#skills").append(HTMLskills.replace("%data%", this.skill[0]));
      $("#skills").append(HTMLskills.replace("%data%", this.skill[1]));
      $("#skills").append(HTMLskills.replace("%data%", this.skill[2]));
    }
  },
};

var work = {
  "jobs": [{
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
      work.jobs[job].workDate));
    $(".work-entry:last").
    append(HTMLworkLocation.replace("%data%",
      work.jobs[job].location));
    $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[
      job].desc));
  }


}

var education = {
  "schools": [{
    "name": "Nanjing University of Science and Technology",
    "attend": "1994",
    "location": "Nanjing China",
    "major": "Electronic",
    "minors": "Economics",
    "graduationYear": 1998,
    "onlineCourse": "",
  }]
};
education.display = function() {}

var projects = {
  "projects": [{
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
