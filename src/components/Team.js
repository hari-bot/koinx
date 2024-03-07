import TeamCard from "./TeamCard";
function Team(){
    return(
        <div className="container team">
            <h2 className="heading">Team</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
            <TeamCard name="Jhon Smith" picnum="76"/>
            <TeamCard name="Elliot" picnum="73"/>
            <TeamCard name="Jhon Smith" picnum="78"/>
        </div>
    )
}

export default Team;