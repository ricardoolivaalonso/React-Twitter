import menuSettingsImage from '../../img/avatar.jpeg';
import { UserElement } from "../04-elements/UserElement"
import { UserNameElement } from "../04-elements/UserNameElement"
import { UserAvatarElement } from "../04-elements/UserAvatarElement"

const MenuSettingsComponent = () => {
    return(
        <a className="menu__settings" href="#placeholder">
            <UserAvatarElement avatar={menuSettingsImage} mod='menu__settings-avatar'/>
            <UserNameElement mod='menu__settings-name'>Ana Sacareno</UserNameElement>
            <UserElement mod='menu__settings-id'>@anasacareno</UserElement>
        </a>
    )
}

export { MenuSettingsComponent }