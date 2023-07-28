import { PrismaClient } from "@prisma/client";
import {Profile } from "@prisma/client"
const db = new PrismaClient();

async function seed() {

 await Promise.all(
  getProfiles().map(async (profile) => {
     await db.profile.create({
      data: {
        name: profile.name,
        age: profile.age,
        location: profile.location,
        role: profile.role,
        place: profile.place,
        email: profile.email,
        aboutme: profile.aboutme,
        portfolio: {
          create: profile.portfolio,
        },
      },
    });
  })
 )
}

seed();

function getProfiles() {
  return [
    {
      name: "Justin Rivera",
      age: 20,
      location: "Chapel Hill, NC",
      role: "Computer Science / Statistics Major",
      place: "University of Chapel Hill at North Carolina",
      email: "justin.r.rivera@outlook.com",
      aboutme:"Hey there! I'm Justin Rivera, a 20-year-old with a passion for exploring the fascinating world of Computer Science and Statistics. Being a major in these fields, I'm captivated by the potential of Artificial Intelligence and machine learning to revolutionize the way we interact with technology and solve real-world challenges. When I'm not buried in code or crunching numbers, you can find me on the court playing Handball or Volleyball, as sports are an integral part of my life, keeping me active and driven. But my interests don't stop there; I'm an avid lover of Rock music, finding solace and inspiration in its raw energy and creativity. Beyond academics and sports, I am deeply committed to making a positive impact on the world through humanitarian tech projects. Combining my tech skills with a desire to help others, I seek to create meaningful solutions that uplift communities and address critical issues. Let's connect and explore the endless possibilities together! ",
      portfolio: [{
        name: "Akari",
        image: "https://prasannaseshadri.files.wordpress.com/2021/08/p517blog.png",
        link: "https://github.com/arevirj/a09-akari-arevirj"
      },
      {
        name: "Unbeatable Tic-Tac-Toe Bot",
        image: "https://th.bing.com/th/id/OIP.KS4bFAcbQbL1fhjnWh7bHwHaHa?pid=ImgDet&rs=1",
        link: "https://github.com/arevirj/TicTacToeTerminal"
      },
      {
        name: "Twitter Bot",
        image: "https://user-images.githubusercontent.com/97718079/255044397-3a1801c1-fe44-4c0a-82e7-ec5a58e064fd.png",
        link: "https://twitter.com/siegmeyer_bot?s=20"
      }
    ]
    },

    {
      name: "John Doe",
      age: 25,
      location: "Seattle, WA",
      role: "Software Engineer",
      place: "Microsoft",
      email: "johndoe@fakemail.com",
      aboutme: "Hey there! I'm John Doe, a software engineer working right here in the vibrant tech scene of Seattle at none other than Microsoft. From a young age, I've been fascinated by the magic of technology and the incredible potential it holds to shape the world around us.",
      portfolio: [
        {
          name: "Project 1",
          image: "https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?pid=ImgDet&rs=1",
          link: " "

        },
        {
          name: "Project 2",
          image: "https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?pid=ImgDet&rs=1",
          link: " "
        },
        {
          name: "Project 3",
          image: "https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?pid=ImgDet&rs=1",
          link: " "
        }
      ]
    },

    {
      name: "Saif Lateef",
      age: 20,
      location: "Chapel Hill, NC",
      role: "Computer Science Major",
      place: "University of Chapel Hill at North Carolina",
      email: "saiflateef@fakemail.com",
      aboutme: "Greetings! I'm Saif Lateef, a college student with an unbridled enthusiasm for the captivating realm of computer science, and I'm here to explore the endless possibilities that technology has to offer.",
      portfolio: [
        {
          name: "Project 1",
          image: "https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?pid=ImgDet&rs=1",
          link: " "

        },
        {
          name: "Project 2",
          image: "https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?pid=ImgDet&rs=1",
          link: " "
        },
        {
          name: "Project 3",
          image: "https://th.bing.com/th/id/OIP.1hZhpiGDgClKdBreodkqIQHaFj?pid=ImgDet&rs=1",
          link: " "
        }
      ]
    }
  ]




}