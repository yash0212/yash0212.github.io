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
                        <h2 className="text-8xl w-3/4">
                            A Full-Stack Ninja who can Tackle any Web
                            Development Challenge with Skill and Flair
                        </h2>
                    </Slide>
                    <Slide className="flex items-center">
                        <h2 className="text-8xl w-3/4">About</h2>
                        <div className="">
                            I’m a full-stack developer with over three years of
                            experience in building web applications for ed-tech
                            and e-commerce startups. I have worked on multiple
                            products using the MERN stack and cloud services
                            such as AWS and GCP
                        </div>
                        <div className="">
                            I’m a MERN stack expert who has created innovative
                            and user-friendly web solutions for education and
                            commerce. I have worked with various startups and
                            delivered multiple products using AWS, GCP, GitHub
                            and Bitbucket
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
