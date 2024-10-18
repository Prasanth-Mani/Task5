//Using for Loops

const resume = {
    "name": "Prasanth",
    "contact": {
      "email": "prasanthofficial2022@gmail.com",
      "phone": "7604892207",
      "linkedin": "https://www.linkedin.com/in/prasanth-engineer/"
    },
    "education": [
      {
        "degree": "Bachelor of Engineering in Mechanical",
        "institution": "Kumarasamy college of engineering",
        "year": 2021
      }
    ],
    "experience": [
      {
        "title": "Quality Engineer",
        "company": "Anand Engineering",
        "year": "2021-2024",
        "responsibilities": [
          "Inspecting the raw materials",
          "Quality check in standards",
          "Implementing best practices in process"
        ]
      },
      {
        "title": "GET",
        "company": "Anand Engineering",
        "year": "2021-2024",
        "responsibilities": [
          "Assisted in process developement",
          "Participated in process evaluation"
        ]
      }
    ],
    "skills": ["Drawing Interpretation", "Quality Standard"],
    "certifications": [
      {
        "name": "Certified QA Inspector",
        "year": 2023
      }
    ]
  }
  

for (let i = 0; i < resume.education.length; i++) {
    console.log(resume.education[i].degree);
}

for (let i = 0; i < resume.experience.length; i++) {
    console.log(resume.experience[i].title);
}


//Using for...in

for (let key in resume.contact) {
    console.log(`${key}: ${resume.contact[key]}`);
}


//Using for...of

for (const skill of resume.skills) {
    console.log(skill);
}

for (const experience of resume.experience) {
    console.log(experience.title);
}


//Using forEach


resume.education.forEach(edu => {
    console.log(edu.degree);
});

resume.experience.forEach(exp => {
    exp.responsibilities.forEach(resp => {
        console.log(resp);
    });
});
