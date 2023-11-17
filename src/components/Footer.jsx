import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://twitter.com/a_ayor",
    icon: <AiFillTwitterCircle className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://github.com/Legaljay",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://instagram.com/m.o.tunrayo",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com/ayobami-adesina-56aa6299",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright @ {year} developed by Legaljay all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link to={link.path} key={link.path} className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
