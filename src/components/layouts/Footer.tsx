import Logo from "../ui/logo/Logo";
import { motion } from "framer-motion";
import Lucid_Icon from "../ui/helper/Lucid_Icon";
import { footerLinks } from "@/packages/data/data.layout";
import Navbar_link from "@/components/features/navbar/Navbar_link";

const Footer = () => {
  const { layoutInfo, sections, companyLinks, productLinks, supportLinks, socialLinks } =
    footerLinks;

  return (
    <footer className="bg-background py-8">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 mb-8">
          {/* Company Info */}
          <div className="flex-1 max-w-md text-center md:text-left">
            <div className="w-fit mx-auto md:mx-0">
              <Logo label={layoutInfo.heading} />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto md:mx-0">
              {layoutInfo.description}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {socialLinks?.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="size-9 border border-border/60 text-muted-foreground rounded-md flex items-center justify-center hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <Lucid_Icon iconName={social.icon} className="w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex-1 max-w-md pl-4 md:pl-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-start md:text-left">
            {/* Product Links */}
            <div>
              <h6 className="font-medium text-base mb-4 capitalize text-muted-foreground">
                {sections?.[0]}
              </h6>
              <ul className="space-y-2 text-muted text-start">
                {productLinks?.map((link, index) => (
                  <li key={index}>
                    <Navbar_link link={link} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <section>
              <h6 className="font-medium text-base mb-4 capitalize text-muted-foreground">
                {sections?.[1]}
              </h6>
              <ul className="space-y-2 text-muted">
                {companyLinks?.map((link, index) => (
                  <li key={index}>
                    <Navbar_link link={link} />
                  </li>
                ))}
              </ul>
            </section>

            {/* Support Links */}
            <div>
              <h6 className="font-medium text-base mb-4 capitalize text-muted-foreground">
                {sections?.[2]}
              </h6>
              <ul className="space-y-2 text-muted text-start">
                {supportLinks?.map((link, index) => (
                  <li key={index}>
                    <Navbar_link link={link} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8">
          <div className="text-center text-muted-foreground text-sm mt-4">
            {layoutInfo?.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
