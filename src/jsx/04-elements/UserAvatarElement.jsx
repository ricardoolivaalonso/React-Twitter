const UserAvatarElement = ({avatar, mod}) => {
    return(
        <div className={`useravatar-element ${mod ? mod : ''}`}>
            <img className="useravatar-element__photo" src={avatar} loading="lazy" alt="This is my placeholder" />
        </div>
    )
}
    
export { UserAvatarElement }