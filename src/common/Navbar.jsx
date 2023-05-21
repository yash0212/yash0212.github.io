import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className="navbar-wrapper fixed w-full shadow-xl bg-secondary">
            <div className="max-w-screen-2xl mx-auto flex justify-between py-3">
                <div>
                    <img src="/logo.svg" className="w-10" />
                </div>
                <div className="flex items-center">
                    <div className="cursor-pointer text-2xl">
                        <a href="https://github.com/yash0212" target="_blank">
                            <FaGithub />
                        </a>
                    </div>
                    <div className="cursor-pointer text-2xl ml-4">
                        <a
                            href="https://www.linkedin.com/in/yashlotan/"
                            target="_blank"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
