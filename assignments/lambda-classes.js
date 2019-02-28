// CODE here for your Lambda Classes

// person class

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

// instructor class

class Instructor extends Person {
  constructor(instructorAttributes) {
    super(instructorAttributes);
    this.specialty = instructorAttributes.specialty;
    this.favLanguage = instructorAttributes.favLanguage;
    this.catchPhrase = instructorAttributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(tenzing, subject) {
    console.log(`${tenzing.name} receives a perfect score on ${subject}.`);
  }
}

// student class

class Student extends Instructor {
  constructor(studentAttributes) {
    super(studentAttributes);
    this.previousBackground = studentAttributes.previousBackground;
    this.className = studentAttributes.className;
    this.favSubjects = studentAttributes.favSubjects;
    this.grade = studentAttributes.grade;
  }
  listsSubjects() {
    for (let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment() {
    console.log(`${this.name} has submitted a PR for ${this.subject}.`);
  }
  sprintChallenge() {
    console.log(`${this.name} has begun sprint challenge on ${this.subject}.`);
  }
}

// projectmanager class

class ProjectManager extends Instructor {
  constructor(projectManagerAttributes) {
    super(projectManagerAttributes);
    this.gradClassName = projectManagerAttributes.gradClassName;
    this.favInstructor = projectManagerAttributes.favInstructor;
    this.channel = projectManagerAttributes.channel;
  }
  standUp() {
    console.log(
      `${this.name} announces to ${this.channel}, @${
        this.channel
      } standUp times;`
    );
  }
  debugsCode() {
    console.log(`${this.name} debugs `);
  }
}

// person objects

const fred = new Person({
  name: "Fred",
  age: 37,
  location: "Bedrock",
  gender: "Male"
});

const laura = new Person({
  name: "Laura",
  age: 34,
  location: "Pillowrock",
  gender: "Female"
});

// instructor objects

const john = new Instructor({
  name: "John",
  age: 40,
  location: "Mars",
  gender: "Male",
  specialty: "React",
  language: "JavaScript",
  catchPhrase: "good one!"
});

const marie = new Instructor({
  name: "Marie",
  age: 50,
  location: "Jupiter",
  gender: "Female",
  specialty: "JQuery",
  language: "JavaScript",
  catchPhrase: "this is it!"
});

// student objects

const tenzing = new Student({
  name: "Tenzing",
  age: 35,
  location: "Moon",
  gender: "Male",
  specialty: "BootStrap",
  language: "JavaScript",
  catchPhrase: "when moon!",
  previousBackground: "Sandwich Maker",
  className: "WEB18",
  favSubjects: ["Programming", "Investing", "Games"],
  grade: Math.floor(Math.random() * 101)
});

const dolma = new Student({
  name: "Dolma",
  age: 33,
  location: "Venus",
  gender: "Female",
  specialty: "CSS",
  language: "JavaScript",
  catchPhrase: "I am good!",
  previousBackground: "Designer",
  className: "WEB118",
  favSubjects: ["Fashion", "Investing", "Social Science"],
  grade: Math.floor(Math.random() * 101)
});

// projectmanager objects

const peter = new ProjectManager({
  name: "Peter",
  age: 50,
  location: "Galaxy",
  gender: "Male",
  specialty: "Django",
  language: "Python",
  catchPhrase: "time is up!",
  gradClassName: "CS1",
  favInstructor: "john",
  channel: "codingDojos"
});

const maxie = new ProjectManager({
  name: "Maxie",
  age: 40,
  location: "Riverside",
  gender: "Female",
  specialty: "Sql",
  language: "Ruby",
  catchPhrase: "time is money!",
  gradClassName: "CS4",
  favInstructor: "larry",
  channel: "codingDojos"
});

console.log(tenzing.listsSubjects());
