import Container from "./Container";
import FooterLink from "./FooterLink";

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className=" flex flex-col w-11/12 md:w-full mx-auto text-center md:text-left md:flex-row justify-between  gap-12 text-white py-20">
          <div className="space-y-4 md:max-w-[400px]">
            <h2 className="font-bold text-2xl">CS — Ticket System</h2>
            <p className="text-[#A1A1AA]">
              A CS — Ticket System is a software platform that helps businesses
              manage customer requests, issues, or inquiries in an organized
              way. Instead of handling support through scattered emails or phone
              calls, the system converts each customer interaction into a
              “ticket” — a trackable record that contains details like the
              customer’s name, issue description, priority, status, and assigned
              support agent.
            </p>
          </div>
          <div className="">
            <FooterLink
              arrayOfName={[
                "Company",
                "About Us",
                "Our Mission",
                "Contact Salad",
              ]}
            ></FooterLink>
          </div>
          <div>
            <FooterLink
              arrayOfName={[
                "Services",
                "Products & Services",
                "Customer Stories",
                "Download Apps",
              ]}
            ></FooterLink>
          </div>
          <div className="">
            <FooterLink
              arrayOfName={[
                "Information",
                "Privacy Policy",
                "Terms & Conditions",
                "Join Us",
              ]}
            ></FooterLink>
          </div>
          <div className="space-y-4">
            <FooterLink
              arrayOfName={[
                "Social Links",
                "@CS — Ticket System",
                "@CS — Ticket System",
                "@CS — Ticket System",
                "support@cst.com",
              ]}
              isIcon={true}
            ></FooterLink>
          </div>
        </div>
        <div className="w-full bg-[#A1A1AA50] h-[0.2px]"></div>
        <div>
          <h4 className="text-white text-center py-[30px]">
            © 2025 CS — Ticket System. All rights reserved.
          </h4>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
