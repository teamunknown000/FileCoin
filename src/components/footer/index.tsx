import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.scss?inline";
import { Instagram, GitHub, Twitter, LinkedIn } from "~/utils/mui";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <div class="footer">
      <div class="footer-container">
        <div class="left">
          <div class="title">ShopSync</div>
          <div class="logos">
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
        <div class="center-left">
          <div class="title">Pages</div>
          <div class="pages">
            <div class="page">Home</div>
            <div class="page">About Us</div>
            <div class="page">Shop</div>
            <div class="page">FAQs</div>
            <div class="page">Contact Us</div>
          </div>
        </div>
        <div class="center-right">
          <div class="title">Other Links</div>
          <div class="links">
            <div class="link">Sell your Items</div>
            <div class="link">Privacy Policy</div>
            <div class="link">Terms and Condition</div>
            <div class="link">Return and Exchange Policy</div>
          </div>
        </div>
        <div class="right">
          <div class="title">Contact Us</div>
          <div class="contacts">
            <div class="contact">Mobile No.</div>
            <div class="contact">Email</div>
            <div class="contact">Address</div>
          </div>
        </div>
      </div>
      <div class="bottom">
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
});
