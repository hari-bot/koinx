function TeamCard({name,picnum}){
    return (
        <div className="team-card">
        <div className="member-detail">
             <img className="member-img" src={`https://randomuser.me/api/portraits/men/${picnum}.jpg`} alt="profile pic"></img>
            <div className="name">{name}</div>
            <div className="degination">(Desingnation Here)</div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
        </div>
    )
}

export default TeamCard;