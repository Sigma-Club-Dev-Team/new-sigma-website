export type IMediaPost = {
  source: string;
  imageUrl?: string;
  title: string;
  description: string;
  link?: string;
  logoUrl?: string;
  videoUrl?: string;
};

const MediaPosts: IMediaPost[] = [
  {
    source: "©️UNION OF CAMPUS JOURNALISTS, UI.",
    imageUrl: "./assets/images/UCJUI-PL.jpg",
    title:
      "MTN CEO, Karl Toriola, Delivers Lecture as Sigma Club Holds 11th Public Lecture",
    description:
      "The Sigma Club, University of Ibadan, held it’s 11th Public Lecture on Thursday, July 3 at the UI Alumni Hall. The lecture was delivered by the CEO, MTN Nigeria, Dr. Karl Toriola.",
    link: "https://www.ucjui.com/mtn-ceo-karl-toriola-delivers-lecture-as-sigma-club-holds-11th-public-lecture/",
  },
  {
    source: "©️NIGERIAN TRIBUNE.",
    imageUrl: "./assets/images/UCJUI-PL.jpg",
    title:
      "Gov Makinde, Alaafin, others attend MTN CEO’s lecture",
    description:
      "The Alaafin of Oyo, Oba Akeem Owoade, and the representatives of the Oyo State Governor and the Vice Chancellor of the University of Ibadan, spoke at the 11th public lecture of the Sigma Club, University of Ibadan, delivered by the Managing Director and Chief Executive Officer (CEO) of MTN Nigeria, Dr Karl Toriola, in honour of Old Sigmite and former CEO of First Bank Group, Dr Adesola Adeduntan.",
    link: "https://tribuneonlineng.com/gov-makinde-alaafin-others-attend-mtn-ceos-lecture/",
  },
  {
    source: "©️UNION OF CAMPUS JOURNALISTS, UI.",
    imageUrl: "./assets/images/jpgs/essay.jpg",
    title:
      "NEWS: SIGMA Releases Call for Entries for Essay Competition",
    description:
      "The topic speaks to the need for a sense of responsibility among students, who will, in time, become leaders and stakeholders who can effect changes in our society,” the SIGMA Chief said reacting to the call for entries.... ",
    link: "https://www.ucjui.com/news-sigma-releases-call-for-entries-for-essay-competition/",
  },
  {
    source: "©️UNION OF CAMPUS JOURNALISTS, UI.",
    imageUrl: "./assets/images/pngs/walk.jpeg",
    title:
      "NEWS: IYD: SIGMA Stages Campus Walk To Raise Awareness Against Drug Abuse",
    description:
      "SIGMA Club, University of Ibadan, in commemoration of this year’s International Youth Day, hosts walk against Drug Abuse on Monday, August 12, 2024.... ",
    link: "https://www.ucjui.com/iyd-sigma-stages-campus-walk-to-raise-awareness-against-drug-abuse/",
  },
  {
    source: "©️THE LAW PRESS ORGANISATION, 2024.",
    imageUrl: "./assets/images/pngs/quiz-winner-group.jpg",
    title:
      "NEWS: Roseline Etuokwu Sigma National Secondary Schools Quiz Competition Reaches Thrilling Final Stage",
    description:
      "From the state heats to the regional showdowns, and now to the national final, each stage has been a showcase of knowledge, collaboration... ",
    link: "https://thelawpress.wordpress.com/2024/05/12/roseline-etuokwu-sigma-national-secondary-school-quiz-competition-reaches-thrilling-final-stage/",
  },
  {
    source: "Channels Television",
    title: "What To Know About Sigma Club Nat’l Secondary School Quiz",
    description:
      "Watch Sigma Chief Interview on Channels TV as he talks about the Quiz Secondart School Quiz",
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
    imageUrl: "./assets/images/pngs/quiz-winner-group.jpg",
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
