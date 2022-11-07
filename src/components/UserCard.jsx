import "./UserCard.css"
const UserCard = ({name, pic}) => {
    return (
        <div class="container">
            <div class="cover-photo">
                <img src={pic} class="profile" />
            </div>
            <div class="profile-name">{name.first + " " + name.last}</div>
            <p class="about">User Interface Designer and <br /> front-end developer</p>
            <button class="follow-btn">Message</button>
        </div>
    )
}

export default UserCard