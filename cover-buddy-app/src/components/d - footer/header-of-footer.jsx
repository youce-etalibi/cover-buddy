import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';


const Footer = () => {
  return (
    <footer className="text-dark py-4">
      <div className="container">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="mb-3 align-items-start">
            <p>
              Bureau T202,<br />
              Technopark Tanger, Place des nations <br />
              Tanger - MAROC.
            </p>
            <p>Phone: + (212) 6 04 23 46 06</p>
            <p>Email: casebuddy@gmail.com</p>
            <div className="mx-3">
            <i className="fab fa-instagram mx-3"></i>
            <i className="fab fa-twitter mx-3"></i>
            <i className="fab fa-pinterest mx-3"></i>
          </div>
          </div>

          <div className="mb-3">
            <p>
              Livraisons et retours <br />
              Conditions générales de vente et d'utilisation <br />
              Politique de confidentialité
            </p>
          </div>

          
        </div>

        <div className="mt-3">
          <label htmlFor="newsletter" className="mr-2">
            Subscribe to our newsletter:
          </label>
          <div className="input-group">
            <input
              type="email"
              className="form-control form-control-sx"
              id="newsletter"
              placeholder="Your email"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p>© 2023 CaseBuddy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
