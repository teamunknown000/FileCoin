import {
  GitHub,
  Instagram,
  Twitter,
  LinkedIn
} from "@mui/icons-material" 

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="title">ShopSync</div>
          <div className="logos">
            <div>
              <Instagram />
            </div>
            <div>
              <GitHub />
            </div>
            <div>
              <Twitter />
            </div>
            <div>
              <LinkedIn />
            </div>
          </div>
        </div>
        <div className="center-left">
          <div className="title">Pages</div>
          <div className="pages">
            <div className="page">Home</div>
            <div className="page">About Us</div>
            <div className="page">Shop</div>
            <div className="page">FAQs</div>
            <div className="page">Contact Us</div>
          </div>
        </div>
        <div className="center-right">
          <div className="title">Other Links</div>
          <div className="links">
            <div className="link">Sell your Items</div>
            <div className="link">Privacy Policy</div>
            <div className="link">Terms and Condition</div>
            <div className="link">Return and Exchange Policy</div>
          </div>
        </div>
        <div className="right">
          <div className="title">Contact Us</div>
          <div className="contacts">
            <div className="contact">Mobile No.</div>
            <div className="contact">Email</div>
            <div className="contact">Address</div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          @2023 Copyright <strong>ShopSync</strong>
        </div>
        <div>
          Designed and developed by <strong>Abhishek Bhagat</strong> and{" "}
          <strong>Sreevallabh Karanam</strong>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
