import { FullPage, Slide } from 'react-full-page'
import SlideControls from './common/SlideControls'
import Navbar from './common/Navbar'
import { useRef } from 'react'
import KalviumLogo from './assets/kalvium-logo.svg'
import FACEPrepLogo from './assets/faceprep-logo.svg'
import XploraboxLogo from './assets/xplorabox-logo.jpg'
import nodeLogo from './assets/skills/node.svg'
import reactLogo from './assets/skills/react.svg'
import javascriptLogo from './assets/skills/javascript.svg'
import phpLogo from './assets/skills/php.svg'
import cssLogo from './assets/skills/css3.svg'
import htmlLogo from './assets/skills/html5.svg'
import expressLogo from './assets/skills/express-js.svg'
import chakraUiLogo from './assets/skills/chakra-ui.svg'
import tailwindLogo from './assets/skills/tailwind-css.svg'
import antDesignLogo from './assets/skills/antdesign.svg'
import mongoDbLogo from './assets/skills/mongodb.svg'
import mysqlLogo from './assets/skills/mysql.svg'
import laravelLogo from './assets/skills/laravel.svg'
import gitLogo from './assets/skills/git.svg'
import dockerLogo from './assets/skills/docker.svg'
import awsLogo from './assets/skills/aws.svg'
import gcpLogo from './assets/skills/gcp.svg'
import nginxLogo from './assets/skills/nginx.svg'
import bitbucketLogo from './assets/skills/bitbucket.svg'
import csCartLogo from './assets/skills/cscart.svg'
import SkillCard from './common/SkillCard'

const App = () => {
    const fullPageRef = useRef(null)

    const scrollToSection = index => {
        fullPageRef.current.scrollToSlide(index)
    }

    return (
        <div>
            <Navbar scrollToSection={scrollToSection} />
            <div className="max-w-screen-2xl mx-auto pt-16">
                <FullPage
                    controls={SlideControls}
                    className="max-w-screen-2xl"
                    ref={fullPageRef}
                >
                    <Slide className="flex items-center">
                        <h2 className="text-8xl w-3/4 leading-[1.125]">
                            A Full-Stack Ninja who can Tackle any Web
                            Development Challenge with Skill and Flair
                        </h2>
                    </Slide>
                    <Slide className="flex justify-center flex-col">
                        <h2 className="text-6xl w-3/4 font-semibold">About</h2>
                        <div className="mt-8 text-xl max-w-4xl leading-relaxed">
                            Hi, I’m Yash Lotan, a full stack developer who loves
                            to code and create. I have over 3 years of
                            experience in ed-tech and ecommerce startups, where
                            I have built and launched multiple web products
                            using the MERN stack. I am skilled in using AWS and
                            GCP for cloud computing and GitHub and Bitbucket for
                            versioning and teamwork. I am always eager to learn
                            new technologies and explore new challenges in web
                            development.
                        </div>
                    </Slide>
                    <Slide className="flex items-center flex-col">
                        <div className="mt-12 text-xl">
                            I am proud to have worked for awesome startups and
                            companies
                        </div>
                        <div className="mt-6 flex">
                            <div className="bg-white w-60 h-20 flex justify-center items-center">
                                <img src={XploraboxLogo} className="w-52" />
                            </div>
                            <div className="bg-white w-60 h-20 ml-12 flex justify-center items-center">
                                <img src={FACEPrepLogo} className="w-52" />
                            </div>
                            <div className="bg-white w-60 h-20 ml-12 flex justify-center items-center">
                                <img src={KalviumLogo} className="w-52" />
                            </div>
                        </div>
                        {/* <div className="mt-12 text-xl">
                            Here are some of the web products I have created
                        </div> */}
                    </Slide>
                    <Slide className="flex items-center flex-col">
                        <h2 className="text-6xl font-semibold mt-12">
                            Skills & Experience
                        </h2>
                        <div className="mt-16 flex flex-wrap justify-center max-w-5xl">
                            <SkillCard
                                logo={javascriptLogo}
                                name="JavaScript"
                            />
                            <SkillCard logo={reactLogo} name="React" />
                            <SkillCard logo={nodeLogo} name="Node" />
                            <SkillCard logo={phpLogo} name="PHP" />
                            <SkillCard logo={cssLogo} name="CSS3" />
                            <SkillCard logo={htmlLogo} name="HTML5" />
                            <SkillCard logo={expressLogo} name="Express" />
                            <SkillCard logo={chakraUiLogo} name="Chakra UI" />
                            <SkillCard
                                logo={tailwindLogo}
                                name="Tailwind CSS"
                            />
                            <SkillCard logo={antDesignLogo} name="Ant Design" />
                            <SkillCard logo={mongoDbLogo} name="MongoDB" />
                            <SkillCard logo={mysqlLogo} name="MySQL" />
                            <SkillCard logo={laravelLogo} name="Laravel" />
                            <SkillCard logo={gitLogo} name="Git" />
                            <SkillCard logo={dockerLogo} name="Docker" />
                            <SkillCard logo={awsLogo} name="AWS" />
                            <SkillCard logo={gcpLogo} name="GCP" />
                            <SkillCard logo={nginxLogo} name="Nginx" />
                            <SkillCard logo={bitbucketLogo} name="Bitbucket" />
                            <SkillCard logo={csCartLogo} name="CS-Cart" />
                        </div>
                    </Slide>
                    <Slide>
                        <h2>Contact</h2>
                    </Slide>
                </FullPage>
            </div>
        </div>
    )
}

export default App
