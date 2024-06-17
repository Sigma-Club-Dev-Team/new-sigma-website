export type IMediaPost = {
  source: string;
  imageUrl?: string;
  title: string;
  description: string;
  link?: string;
  logoUrl?: string;
  videoUrl?: string;
};

const MediaPosts:IMediaPost[] = [
  {
    source: "©️THE LAW PRESS ORGANISATION, 2024.",
    imageUrl: "./assets/images/pngs/resss2022.png",
    title:
      "NEWS: Roseline Etuokwu Sigma National Secondary Schools Quiz Competition Reaches Thrilling Final Stage",
    description:
      "From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ",
    link: "https://thelawpress.wordpress.com/2024/05/12/roseline-etuokwu-sigma-national-secondary-school-quiz-competition-reaches-thrilling-final-stage/",
  },
  {
    source: "Channels Television",
    title: "What To Know About Sigma Club Nat’l Secondary School Quiz",
    description: "Watch Sigma Chief Interview on Channels TV as he talks about the Quiz Secondart School Quiz",
    logoUrl: "./assets/images/pngs/channelLogo.png",
    videoUrl: "https://www.youtube.com/watch?v=fc2-N8w2g6M",
    link: "https://www.youtube.com/watch?v=fc2-N8w2g6M",
  },
  {
    source: "Sigma Club",
    logoUrl: "./assets/images/pngs/logo.png",
    imageUrl: "./assets/images/pngs/kesington.png",
    title: "Sigma Club Congratulates Honourary Sigmite Sir Kessignton Adebutu",
    description:
      "The Sigma Chief congratulates Honorary Sigmite, Adebutu Kesington on his well deserved ascension to the position of the President of the association of Lagos. His accomplishment has been an inspiration to all. Your win is a victory for all those  who believe and practice the Sigma principles of discipline, philanthropy and social impact. Accept our congratulations on this outstanding achievement. We wish you strength and success as you embark on this new chapter of service.",
  },
  {
    source: "Sigma Club",
    logoUrl: "./assets/images/pngs/logo.png",
    imageUrl: "./assets/images/pngs/isaac.png",
    title:
      "Sigma Club Congratulates Honourary Sigmite Prof. Isaac Folorunsho Adewale",
    description:
      "On behalf of Sigma Club, the Sigma Chief congratulates Honourary Sigmite, Prof. Isaac Folorunso Adewole on his well deserved retirement after years of meritorious service to the country and humanity. His accomplishments are sources of  inspiration and testament to the core Sigma values of integrity, discipline and philanthropy. Accept our congratulations on your retirement. We pray God grants you strength and good health on this new chapter of your life.",
  },
  {
    source: "©THE DAILY TRIBUNE NEWSPAPER",
    imageUrl: "./assets/images/pngs/resss2022.png",
    title: "NEWS:Finalists Emerge from Roseline Etuokwu Sigma Quiz Competition",
    description:
      "From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ",
    link: "https://thelawpress.wordpress.com/2024/05/12/roseline-etuokwu-sigma-national-secondary-school-quiz-competition-reaches-thrilling-final-stage/",
  },
  {
    source: "Sigma Club",
    logoUrl: "./assets/images/pngs/logo.png",
    videoUrl: "https://www.youtube.com/watch?v=0kChM02MPOU",
    title:
      "What inspired the initiative of the Roseline Etuokwu Sigma National Secondary School Quiz Competition",
    description:
      "What inspired the initiative of the Roseline Etuokwu Sigma National Secondary School Quiz Competition❓Listen to the Sigma Chief as he explains how the idea of the Quiz Competition came to be . See the rest of the Sigma Chief's Interview at the Morning Show on Arise TV",
    link: "https://www.youtube.com/watch?v=0kChM02MPOU",
  },
  // Add more posts as needed
];


export default MediaPosts;