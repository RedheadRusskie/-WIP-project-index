//styles
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
       <label className="logo">Стро<span>IT</span></label>
       <div className="icons">
          <ul>
            <li><a href="https://github.com/RedheadRusskie"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/ivan-konnikov-598b74222/"><i className="fa fa-linkedin"></i></a></li>
            <li><a><i className="fa fa-instagram"></i></a></li>
          </ul>
       </div>
       <p>Made with love by Ivan.</p>
    </div>
  )
}