const SkillCard = ({ logo, name }) => {
    return (
        <div className="text-white flex flex-col items-center justify-center w-28 h-28 mb-8">
            <img src={logo} className="w-20 h-20" />
            <span className="text-lg mt-1">{name}</span>
        </div>
    )
}

export default SkillCard
