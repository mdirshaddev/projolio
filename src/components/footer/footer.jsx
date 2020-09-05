import React from 'react';


//stylesheet import
import '../../scss/footer.scss';

//image import
import ProfilePic from '../../images/profile.jpg';

const Footer = () => (
  <footer>
    <div className="footer">
      <div className="container">
        <div className="textMe">
          <img src={ProfilePic} alt="Logo"  data-aos="fade-left" />
          <div className="textInfo" data-aos="fade-right" >
            <h2>Interested in hiring me for your project</h2>
            <div className="textInfo-bottom">
            Looking for an experienced full-stack developer to build your web app or ship your software product? To start an initial chat, just drop me an email at <a href="/">mdirshaddev@gmail.com</a> or use the <a href="/">form on the contact page</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer;