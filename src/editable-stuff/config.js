// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jerry",
  middleName: "",
  lastName: "Lin",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/s109703023",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/Jarry0829",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/jerry0__0829/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/me.jpg"),
  imageSize: 375,
  message:
    "My name is Jerry. I'm a student of Department of Computer Science at National Chengchi University. My hobbies are work out and playing "
     +"volleyball, and my goal is become a computer engineer.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "s109703023", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "My cats",
  message:
    "I have two black cats, one named OLULU, the other named Egg Cake, the former is elder sister and letter is young brother.\n It's my brother's duty to take care of, all i do just messing around with them.",
  images: [
    { 
      img: require("../editable-stuff/歐嚕嚕.jpg"), 
      label: "歐嚕嚕", 
      paragraph: "瘦瘦的，比較好動，很黏人，長得比較可愛" 
    },
    { 
      img: require("../editable-stuff/雞蛋糕.jpg"), 
      label: "雞蛋糕", 
      paragraph: "很胖，能趴著絕不站著，呼嚕聲超級大，長的比較帥" 
    },
  ],
  imageSize: {
    width:"300",
    height:"400"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 60 },
    { name: "C/C++", value: 80 },
    { name: "JavaScript", value: 40 },
    { name: "HTML/CSS", value: 60 },
    { name: "Unity", value: 50 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 90 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 75 },
    { name: "Problem Solving", value: 70 },
    { name: "Empathy", value: 95 },
    { name: "Organization", value: 95 },
    { name: "Creativity", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at,",
  email: "jarry0905337377@gmail.com",
};

const experiences = {
  show: false,
  heading: "More pictures of me",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 - Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 - May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, leadership, repos, skills, getInTouch, experiences };
