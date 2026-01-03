import EmailConnect from "./EmailConnect";
import MediaIcons from "./MediaIcons";

const Footer = () => {
  const cust_Policy = [
    "Contact us",
    "FAQ",
    "Terms & Conditions",
    "Track Orders",
    "Shipping",
    "Cancellation",
    "Returns",
    "Privacy Policy",
  ];
  return (
    <>
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-6 col-md-2 mb-3">
              <h5>Customer Policies</h5>
              <ul class="nav flex-column">
                {cust_Policy.map((policyItem) => (
                  <li class="nav-item mb-2" key={policyItem}>
                    <a href="#" class="nav-link p-0 text-body-secondary">
                      {policyItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div class="col-md-5 offset-md-1 mb-3">
              <EmailConnect/>
            </div>
          </div>
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <MediaIcons/>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Footer;