import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";

export const INFO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With few months of hands-on experience, I have honed my skills in front-end technologies like React, HTML , CSS, Javascript, as well as back-end technologies like SpringBoot, MySQL,and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React,Java,SpringBoot, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Dec/2023 -May/2024 ",
    role: "SQL Developer Intern",
    company: "Finnaux techSolutions Pvt. Ltd.",
   description: `Implementing SQL Skills, Storage Procedures, etc
      Analyzing tables and removing vulnerabilities on live servers.
      Software Used : MSSQL Server , Azure Data Studio , Visual Studio Code .`,
    technologies: ["Mysql", "MSSQL"],
  },
  {
    year: "Aug/2023 - Oct/2023",
    role: "Machine Learning Trainee and Intern",
    company: "UpFlairs Pvt. Ltd.",
     description: `Implemented Machine Learning (Libraries: Numpy, Pandas,Scikit-learn, Jupyter Notebook, OpenCV)
      Worked on projects like Face Detection System.`,
    technologies: ["Python","Numpy","Pandas", "Scikit-learn", "Jupyter Notebook","OpenCV"],
  },
];

export const PROJECTS = [
  {
    title: "CAR WORLD",
    image: project1,
    description:
      "A Java application that allows users to search for cars, add/remove/update car information, and manage their car accounts.The JDBC API was used to connect the Java application to the MySQL database .Java Swings was used to create the user interface for the app.",
    technologies: ["Java", "MySQL", "JDBC", "Java Swings"],
  },
    {
      title: "Portfolio Website",
      image: project3,
      description:
        "A personal portfolio website showcasing projects, skills, and contact information.",
      technologies: ["HTML", "CSS", "React", "Vite","TailWind"],
    },
  {
    title: "FACE RECOGNITION SYSTEM",
    image: project2,
    description:
      "The objective of this project is to develop a face recognition system that can identify people in photos, videos,or in real-time. The system will be able to match a face to a person's identity..",
    technologies: ["Python", "Machine Learning", "Jupyter notebook."],
  },
  {
    title: "ARGENTARII (on-going Project)",
    image: project4,
    description:
      "A Banking Management System (BMS). The Objective of this Project is to develop a banking System , whereCompany registered employees can perform Operation like accounting , can track their transaction history",
    technologies: ["Java", "SpringBoot", "Spring MVC,", "MySQL", "JDBC","HTML","CSS","JavaScript","Jsp","hMailServer"],
  },
];

export const CONTACT = {
  phoneNo: "+91 7229960245 ",
  email: "anant04gautam@gmail.com",
  address:"Jaipur ,Rajasthan, India"
};
