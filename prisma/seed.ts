import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getProfiles().map((profile) => {
      return db.profile.create({data: profile});
    }
    
    
    )
  );
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
      aboutme:"Hey there! I'm Justin Rivera, a 20-year-old with a passion for exploring the fascinating world of Computer Science and Statistics. Being a major in these fields, I'm captivated by the potential of Artificial Intelligence and machine learning to revolutionize the way we interact with technology and solve real-world challenges. When I'm not buried in code or crunching numbers, you can find me on the court playing Handball or Volleyball, as sports are an integral part of my life, keeping me active and driven. But my interests don't stop there; I'm an avid lover of Rock music, finding solace and inspiration in its raw energy and creativity. Beyond academics and sports, I am deeply committed to making a positive impact on the world through humanitarian tech projects. Combining my tech skills with a desire to help others, I seek to create meaningful solutions that uplift communities and address critical issues. Let's connect and explore the endless possibilities together! "
    }
  ]
  
}