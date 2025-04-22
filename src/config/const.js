import { APP_URL } from "./url";
import CompanyFormationLogo from "../assets/company-formation-logo.svg";
import CompanySecretarialServices from "../assets/copmpany-secretial-logo.svg";
import VirtualOfficeAddressLogo from "../assets/virtual-office-logo.svg";
import AnnualComplianceServices from "../assets/annual-compliance-logo.svg";
import VATRegistrationLogo from "../assets/vat-registration-logo.svg";
import PayrollServicesLogo from "../assets/payrol-services-logo.svg";
import BookkeepingServicesLogo from "../assets/bookkeeping-services-logo.svg";
import OnlineWebinarLogo from "../assets/online-webinars-log.svg";

export const MENU = [
  { name: "Home", url: APP_URL.HOME },
  { name: "Startup", url: APP_URL.STARTUP },
  { name: "Blog", url: APP_URL.BLOG },
  { name: "ContactUs", url: APP_URL.CONTACT_US },
  { name: "AboutUs", url: APP_URL.ABOUT_US },
];

export const OUR_SERVICES_DATA = [
  { name: "Company Formation", logo: CompanyFormationLogo },
  { name: "Company Secretarial Services", logo: CompanySecretarialServices },
  { name: "Virtual Office Address", logo: VirtualOfficeAddressLogo },
  { name: "Annual Compliance Services", logo: AnnualComplianceServices },
  { name: "VAT Registration, Preparation & Filing", logo: VATRegistrationLogo },
  { name: "Payroll Services", logo: PayrollServicesLogo },
  { name: "Bookkeeping Services", logo: BookkeepingServicesLogo },
  { name: "Live Online Webinars & Workshops", logo: OnlineWebinarLogo },
];
