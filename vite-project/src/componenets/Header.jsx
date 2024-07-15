import React from "react"
import Profile from "./profile-pic.png"

export default function Header() {
    return(
        <div className="details">
        <img src={Profile}/>
          <h1 className="details-name">MADESK.K</h1>
          <h3 className="details-job">Front End Developer</h3>
          <a href="https://madeshprofile.web.app"style={{ textDecoration: 'none' }}><p className="details-website">madeshprofile.web.app</p></a>
          <a href= "mailto: madesh.kcse@gmail.com" target="_blank">
            <button className="details-email"><i class="fa-solid fa-envelope"></i><b>Email</b></button></a>
          <a href="https://www.linkedin.com/in/madesh-" target="_blank">
            <button className="details-linkedin"><i class="fa-brands fa-linkedin"></i><b>Linkedin</b></button></a>
        </div>
    )
}