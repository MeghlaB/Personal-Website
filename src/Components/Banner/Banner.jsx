
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

function Banner() {
  return (
    <section className="home" id="home">
    {/* Text-side */}
      <div className="home-content">
        <h3>Hi , Myself</h3>
        <h1>Meghla Biswas</h1>
        <h1>And , I'm a Frontend Developer</h1>
        <p>
          Hi, I'm Meghla Biswas, a Frontend Developer. I design responsive,
          visually appealing, and user-friendly websites to bring your ideas to
          life.
        </p>
        {/* Social-Media */}
        <div className="social-media">
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><IoLogoLinkedin /></a>
        </div>
        {/* Download-cv */}
        <a href="#">Download cv</a>
      </div>
      {/* image-side */}
      <div className="home-img">
      <img src="/src/assets/web_meghla.png">

      </img>

      </div>
    </section>
  );
}

export default Banner;
