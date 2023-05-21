import { FullPage, Slide } from 'react-full-page'
import SlideControls from './common/SlideControls'
import Navbar from './common/Navbar'
import { useRef } from 'react'

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
                            to code and create. I have over three years of
                            experience in ed-tech and ecommerce startups, where
                            I have built and launched multiple web products
                            using the MERN stack. I am skilled in using AWS and
                            GCP for cloud computing and GitHub and Bitbucket for
                            versioning and teamwork. I am always eager to learn
                            new technologies and explore new challenges in web
                            development.
                        </div>
                    </Slide>
                    <Slide>
                        <h2>Work</h2>
                    </Slide>
                    <Slide>
                        <h2>Skills</h2>
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
