import React from 'react';

import i from '../../images/profile.jpg';

const FooterLayout = () => (
  <div class="footer">
    <div class="container">
      <div class="textMe">
        <img src={i} alt="Logo" data-aos="fade-left" class="aos-init aos-animate" />
        <div class="textInfo aos-init aos-animate" data-aos="fade-right">
          <h2>Interested in hiring me for your project</h2>
          <div class="textInfo-bottom">
            Looking for an experienced full-stack developer to build your web app or ship your
            software product? To start an initial chat, just drop me an email at <a href="/">mdirshaddev@gmail.com</a> or
            use the <a href="/">form on the contact page</a>.
          </div>
        </div>
    </div>
  </div>
  </div>
)

export default FooterLayout;