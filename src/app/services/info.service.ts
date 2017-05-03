import { Injectable } from '@angular/core';

@Injectable()
export class InfoService {
  header = {
    "image": "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/12096514_10206772290178887_7324805604309466744_n.jpg?oh=07b9482119b953a1571892c02d5bef38&oe=59978F08",
    "title": "Mahdi Kahia",
    "subtitle": "Mobile & Unity Expert"
  }
  social = {
    "facebook": "sss",
    "google": "ggg",
    "github": "gitgit",
    "twitter": "twiiiit",
    "linkedin": "link"
  };

  profile = {
    "imageIcon": "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/16864183_10210664369718443_9008044928972198531_n.jpg?oh=52d7ea6a076df503adf0359b1f0404a5&oe=59564254",
    "name": "Mahdi Kahia",
    "dateofbirth": "19 Octobre",
    "mail": "you better remember that",
    "address": "36 Tahar el haddad monfleury Tunis",
    "phone": "24998628",
    "title": "Hello,I'm a mobile developer",
    "description1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "description2": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  };

  doings = [
    {
      icon: "fa-gamepad",
      text: "Unity"
    },
    {
      icon: "fa-android",
      text: "Android"
    },
    {
      icon: "fa-mobile",
      text: "IOS"
    }
  ];

  thoughts = {
    "paragraph": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae blanditiis quis accusamus totam, quidem rerum ipsa facere nisi omnis eum tempora ipsam esse officiis nam, numquam perspiciatis, sit sint quae.",
    "author": "love"
  }

  resume = {
    "imageIcon": "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/16864183_10210664369718443_9008044928972198531_n.jpg?oh=52d7ea6a076df503adf0359b1f0404a5&oe=59564254",
    education: [{
      name: "ESPRIT",
      address: "Ghazela",
      period: "3 Years",
      level: "Engineering"
    }, {
      name: "Dhabout el guerda",
      address: "Ghazela",
      period: "3 Years",
      level: "Engineering"
    }],
    work: [{
      compagny: "Red Carpet",
      address: "Still",
      period: "Forever",
      post: "COO"
    }, {
      compagny: "Still Red Carpet",
      address: "Still",
      period: "Forever",
      post: "COO"
    }]
  }

  interest = [
    {
      "icon": "fa-music",
      "text": "Music"
    }, {
      "icon": "fa-rocket",
      "text": "Travelling"
    }, {
      "icon": "fa-gamepad",
      "text": "Video games"
    }, {
      "icon": "fa-coffee",
      "text": "Coffee"
    }, {
      "icon": "fa-space-shuttle",
      "text": "Space"
    }
  ];
  contact = {
    imageIcon: "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/16864183_10210664369718443_9008044928972198531_n.jpg?oh=52d7ea6a076df503adf0359b1f0404a5&oe=59564254",
    address: "dar el beb blech najar",
    phone: "98654321",
    mail: "redcarpetsolutions2017@gmail.com",
    website: "redcapertsolutions.io"
  }

  skills = {
    "imageIcon": "https://scontent.ftun4-1.fna.fbcdn.net/v/t1.0-9/16864183_10210664369718443_9008044928972198531_n.jpg?oh=52d7ea6a076df503adf0359b1f0404a5&oe=59564254",
    skills: [
      {
        skill: "Unity",
        value: 100
      }, {
        skill: "Android",
        value: 100
      }, {
        skill: "Javascript",
        value: 60
      }
    ],
    skillscicle: [
      {
        skill: "Unity",
        value: 45
      }, {
        skill: "Android",
        value: 78
      }, {
        skill: "Javascript",
        value: 32
      }
    ]
  };
  experience = {
    clients: 450,
    projects: 205,
    years: 3,
    contests: 12
  }

  getHeader() {
    return this.header;
  }
  getSocial() {
    return this.social;
  }
  getProfile() {
    return this.profile;
  }
  getDoings() {
    return this.doings;
  }
  getThoughts() {
    return this.thoughts;
  }
  getResume() {
    return this.resume;
  }

  getIntereset() {
    return this.interest;
  }
  getContact() {
    return this.contact;
  }
  getSkills() {
    return this.skills;
  }
  getExperience() {
    return this.experience;
  }
}
