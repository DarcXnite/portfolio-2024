export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
]

export const gridItems = [
  {
    id: 1,
    title:
      'Crafting products, solving complex problems, and driving innovation',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title:
      'Building seamless user friendly experiences and improving overall quality',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title:
      'I thrive for the satisfaction of hunting for solutions and seeing complex systems come together',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a Passion Project',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Contact Me',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
]

export const projects = [
  {
    id: 1,
    title: 'DevConnect',
    des: 'Social media playground for developers. Created in a forum style layout, you can create topics, discuss, leave comments, and even like them. Network with like-minded individuals.',
    img: '/DevConnect.PNG',
    iconLists: ['mongodb.svg', '/exjs.svg', '/re.svg', 'nodejs.svg'],
    link: 'https://morning-wave-21848.herokuapp.com',
  },
  {
    id: 2,
    title: 'Wordle Clone',
    des: 'Keeping technical skills sharp, I created a wordle clone. The word changes daily and built with vanilla JavaScript and jQuery',
    img: '/wordle-clone.PNG',
    iconLists: ['js.svg', 'jq.svg'],
    link: 'https://darcxnite.github.io/wordle-clone',
  },
  // {
  //   id: 3,
  //   title: 'Star Wars Character Sheets',
  //   des: 'A passion project created using the MERN stack to practice data manipulation. This project really dives into creating a character based on the table-top game Star Wars Force & Destiny by flight games.',
  //   img: '/p1.svg',
  //   iconLists: [
  //     'mongodb.svg',
  //     '/exjs.svg',
  //     '/re.svg',
  //     'nodejs.svg',
  //     'tail.svg',
  //   ],
  //   link: 'https://star-wars-sheets.herokuapp.com/',
  // },
]

export const testimonials = [
  {
    quote:
      'I had the pleasure of working with Davis Nguyen during the year 23’ Q1 Internship cohort. Straight away he showcased his initiative and leadership qualities by collaborating with the entire group of Interns, as well as offering trainings to those who were further behind. He completed a number of tasks contributing to our flagship product, MIKROS (https://developer.tatumgames.com/). MIKROS is an all-in-one mobile analytics platform. He adapted to our Agile work environment and process and took ownership of tickets by self-assigning and executing. He demonstrated that he has a solid understanding of coding principles and standards. He always came with a positive attitude, and I know he will be an excellent fit for any professional Team.',
    name: 'Leonard Tatum',
    title: 'CEO & Founder of Tatum Games',
    profile: '/leotatum.jpeg',
  },
  {
    quote:
      "Davis was my student for the software engineering immersive cohort that graduated in July 2022. From the start of class, Davis showed strong aptitude for code and resourcefulness. Davis developed strong skills during the course, and implemented great UI design, responsiveness, and overall quality. He played a significant role in assisting others and showing strong leadership. A huge part of Davis' time with us showed us his strengths and experience in building applications from scratch, and solving complex problems. Davis can seemingly do anything if given the right nudge, and I  highly recommend him for any junior or entry level role.",
    name: 'Weston Bailey',
    title: 'General Assembly Lead Instructor',
    profile: '/westonbailey.jpeg',
  },
]

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
]

export const workExperience = [
  {
    id: 1,
    title: 'Web Developer Intern',
    desc: 'Assisted in the development of a web-based platform using php, enhancing interactivity.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Web Development Tutor',
    desc: 'Tutor Student in basic web development technologies including HTML5, CSS3, and JavaScript',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
]

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
]
