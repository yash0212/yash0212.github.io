import { FullPage, Slide } from "react-full-page";

const SlideControls = ({
    getCurrentSlideIndex,
    slidesCount,
    scrollToSlide,
}) => {
    const currentSlideIndex = getCurrentSlideIndex();
    const renderSlideButtons = () => {
        let buttons = [];
        for (let i = 0; i < slidesCount; i++) {
            buttons.push(
                <button
                    className={`w-3 h-3 ${i===currentSlideIndex?'bg-primary':'bg-secondary'} rotate-45 border-2 border-primary`}
                    onClick={() => {
                        scrollToSlide(i);
                    }}
                ></button>
            );
        }
        return buttons;
    };

    return (
        <div className="nav-controls-wrapper fixed right-4 top-1/2 grid gap-4 grid-cols-1">
            {renderSlideButtons()}
        </div>
    );
};

const App = () =>{
    return (
        <div>
            {/* <div className="navbar fixed">Hello navbar here</div> */}
            <div className="max-w-screen-2xl mx-auto">
                <FullPage controls={SlideControls} className="max-w-screen-2xl">
                    <Slide>
                        <h1>Intro</h1>
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
    );
}

export default App;
