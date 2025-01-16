import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Yohan',
    lastName:  'Youmbi',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer / Video Editor',
    avatar:    '/images/avatar.jpg',
    location:  'Europe/London',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/iEatFishFingers',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/yohan-y-783936102/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'jinchurikimp4@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Engineer</>,
    subline: <>Hi, I'm Yohan! I'm a software engineer at <InlineCode>Hugo Boss</InlineCode>building cloud-based 3D automation solutions with tools like CLO 3D,  and Blender. I also explore AR, Three.js, and Unreal Engine. <br/> 
In my free time, I sharpen my video editing and VFX skills, creating music visualizers and 3D projects using Adobe After Effects, Blender, and Unreal Engine 5.



</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I’m a curious and driven individual who thrives on learning new skills, whether it's diving into content creation or exploring emerging coding technologies. When I can combine both worlds, it’s even more rewarding.
        </>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Hugo Boss',
                timeframe: '2024 - Present',
                role: 'Software Engineer',
                achievements: [
                    <>Developed automation scripts for 3D designers using the CLO3D SDK API, leveraging Python and C++ to enhance design workflows and productivity. </>,
                    <>Implemented 3D automation solutions utilizing Microsoft Azure virtual machines, creating custom render machines tailored to project specifications.</>,
                    <>Investigated the potential of augmented reality (AR) technologies and delivered presentations on metaverse-related topics to inform and inspire internal stakeholders</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                
                ]
            },
            {
                company: 'Channel 4',
                timeframe: '2022',
                role: 'Content Creative',
                achievements: [
                    <>Developed innovative content ideas and participated in the ideation process, leveraging tools such as Adobe Creative Suite for high-quality production</>,
                    <>Collaborated with cross-functional teams to produce digital content, ensuring alignment with Channel 4’s brand and strategic objectives. </>
                ],
                images: [ ]
            },
            {
                company: 'Dubit',
                timeframe: '2022',
                role: 'Roblox Developer',
                achievements: [
                    <>Developed and implemented core gameplay mechanics for the H&M fashion game using Lua scripting within the Roblox platform</>,
                    <>Leveraged advanced 3D modelling skills to create high-quality assets and environments for a NASCAR game, utilizing tools such as Blender and Cinema4D.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Manchester Metropolitan University',
                description: <>Studied Computer Science.</>,
            },
            {
                name: 'SharpFutures Manchester CIC',
                description: <>I undertook a range of courses covering skills such as production techniques, digital storytelling, ideas generation and pitching skills, alongside soft skills such as communication and teamwork</>,
            },
            {
                name:'Xaverian Sixth Form College',
                description: <>A-Level Computer Science<><br></br>A-Level Business<br></br></><>A-Level Statistics</></>
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Unreal Engine 5',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Python',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                // optional: leave the array empty if you don't want to display images
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };