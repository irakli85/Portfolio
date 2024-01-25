import DevImg from "./DevImg"
import Image from "next/image"
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Divide} from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20}/>,
        text: 'Irakli Beridze'
    },
    {
        icon: <PhoneCall size={20}/>,
        text: '+995 577 053 121'
    },
    {
        icon: <MailIcon size={20}/>,
        text: 'iberidze38@gmail.com'
    },
    {
        icon: <Calendar size={20}/>,
        text: 'Born on 26 Apr, 1985'
    },
    {
        icon: <GraduationCap size={20}/>,
        text: 'Master Of Computer Science'
    },
    {
        icon: <HomeIcon size={20}/>,
        text: 'Z. Gorgiladze St. 57, Batumi, Georgia'
    }
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Shota Rustaveli State University',
                qualification: 'Bachelor of Computer Science',
                years: '2000-2004'
            },
            {
                university: 'Another Univercity',
                qualification: 'Master of Arts',
                years: '2019-2021'
            },
            {
                university: 'Yet Another Univercity',
                qualification: 'Ph.D in Science',
                years: '2021-2024'
            }
        ]
    },
   {
        title: 'experience',
        data: [
            {
                company: 'ABC Inc.',
                qualification: 'Softwear Engineer',
                years: '2018-2020'
            },
            {
                company: 'X corporation',
                qualification: 'Senior Developer',
                years: '2020-2022'
            },
            {
                company: 'Tech Inovators',
                qualification: 'Lead Developer',
                years: '2022-Present'
            }
        ]
    }
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript',
            },
            {
                name: 'Back-end Development',
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/wordpress.svg',
            }
        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find( (item) => item.title === title )
    }

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                </div>
                {/* tabs */}
                <div className="flex-1">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal */}
                            <TabsContent value='personal'>
                                personal info
                            </TabsContent>
                            <TabsContent value='qualifications'>
                                qualifications
                            </TabsContent>
                            <TabsContent value='skills'>
                                skills
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About