import React from "react";
import Image from "next/image";
import rnPerson from "../../public/assets/png&jpg/rnPerson.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import apecGaz from "../../public/assets/svg/apecGaz.svg";
import apecWhite from "../../public/assets/svg/apeWhite.svg";
import Link from "next/link";
import doted from "../../public/assets/png&jpg/doted.png";
import doted2 from "../../public/assets/svg/Group -1.svg";
import doted3 from "../../public/assets/svg/Group -3.svg";
import doted4 from "../../public/assets/svg/Group -4.svg";
import doted5 from "../../public/assets/svg/Group 511.svg";
import NextLink from "next/link";
const PersonalInfo = () => {
  return (
    <div className="mainPage">
      <Image src={doted3} width={500} height={270} className="dotedImage" />
      <Image src={apecGaz} width={197} height={96} />
      <div className="personalInfo">
        <Image src={rnPerson} width={134} height={134} className="personImg" />
        <div className="personNameCarrer">
          <h2>
            Mr.MOHAMAD
            <br />
            MOUSSAWI
          </h2>
          <p>Project Manager</p>
        </div>
        <div className="peronalSocial">
          <div className="social">
            <Link href="#" passHref className="iconBorder">
              <FaInstagram className="socialIcon" />
            </Link>
          </div>
          <div className="social">
            <Link href="#" passHref className="iconBorder">
              <FaFacebookF className="socialIcon" />
            </Link>
          </div>
          <div className="social">
            <Link href="#" passHref className="iconBorder">
              <FaTiktok className="socialIcon" />
            </Link>
          </div>
          <div className="social">
            <Link href="#" passHref className="iconBorder">
              <FaLinkedinIn className="socialIcon" />
            </Link>
          </div>
        </div>
        <div className="personContact">
          <h3>
            <Link href="tel:+961943581098" className="link">
              +961943581098
            </Link>
          </h3>
          <h3>Tripoli, North Lebanon</h3>
          <h3>
            <Link href="mailto:example@gmail.com" className="link">
              example@gmail.com
            </Link>
          </h3>
        </div>
        <div className="mentionBrand">
          <p>Powered by </p> <Image src={apecWhite} width={50} height={50} />
        </div>
      </div>
      <div className="download  redIcon">
        <h3>Download</h3>
        <p>our company profile</p>
      </div>
    </div>
  );
};

export default PersonalInfo;
