import { FullPage, Slide } from 'react-full-page'
import SlideControls from './common/SlideControls'
import Navbar from './common/Navbar'

const App = () => {
    return (
        <div>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto pt-16">
                <FullPage controls={SlideControls} className="max-w-screen-2xl">
                    <Slide className="flex items-center">
                        <h1 className="text-8xl w-3/4">
                            A Full-Stack Ninja who can Tackle any Web
                            Development Challenge with Skill and Flair
                        </h1>
                    </Slide>
                    <Slide>
                        <h1>About</h1>
                    </Slide>
                    <Slide>
                        <h1>Work</h1>
                    </Slide>
                    <Slide>
                        <h1>Skills</h1>
                    </Slide>
                    <Slide>
                        <h1>Contact</h1>
                    </Slide>
                </FullPage>
            </div>
        </div>
    )
}

export default App
