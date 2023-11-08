import { IconProfile } from "assets/icons/IconProfile"
import { Medalha01 } from "assets/icons/medalhas/Medalha01"
import { Medalha02 } from "assets/icons/medalhas/Medalha02"
import { Medalha03 } from "assets/icons/medalhas/Medalha03"
import { Medalha04 } from "assets/icons/medalhas/Medalha04"
import "./style.css"

export const UserInfo = () => {
  return (
    <>
      <div className="user-container-profile">
        <p>Usuário123</p>
        <IconProfile />
      </div>
      <div className="medal-container">
        <p>Medalhas</p>
        <div className="medal-content">
          <Medalha01 />
          <Medalha02 />
          <Medalha03 />
          <Medalha04 />
        </div>
      </div>
    </>
  )
}
