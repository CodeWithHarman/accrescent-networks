import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer,FooterP, FooterWrap,
FooterLink, FooterLinkContainer, FooterLinkItems,
FooterLinkTitle, FooterLinkWrapper , SocialMedia,
 SocialMediaWrap, SocialLogo, SocialIconLink, SocialIcons, WebsiteRights} from './FooterElements'

const Footer = () => {
    const toggleHome =() => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
       <FooterWrap>
        <FooterLinkContainer>
            <FooterLinkWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle> About Us </FooterLinkTitle>
                        <FooterP>With over 5 years of experience
                             in the structured cabling industry we
                              have seen it all and stay on top
                               of all new trends in the market.</FooterP>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Get In Touch</FooterLinkTitle>
                        <FooterLink to="/">+1 (647) 632 1248</FooterLink>
                        <FooterLink to="/contactus">info@accrescent.ca</FooterLink>
                        <FooterLink to="/contactus">Careers</FooterLink>
                </FooterLinkItems>
           
                <FooterLinkItems>
                    <FooterLinkTitle>Services</FooterLinkTitle>
                        <FooterLink to="/">Infrastructure Audits</FooterLink>
                        <FooterLink to="/">Cabling Removal</FooterLink>
                        <FooterLink to="/">Data Center Services</FooterLink>
                        <FooterLink to="/">Telecom Services</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Sevices Cont.</FooterLinkTitle>
                        <FooterLink to="/">Security Services</FooterLink>
                        <FooterLink to="/">Telephone Sercices</FooterLink>
                        <FooterLink to="/">Technical Outsourcing</FooterLink>
                        <FooterLink to="/">Fiber Installation</FooterLink>
                </FooterLinkItems>
            </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/" onClick={toggleHome}>
                    Accrescent Networks Inc.
                </SocialLogo>
                <WebsiteRights>&#169; Copyrights {new Date().getFullYear()} Accrescent Networks Inc. All rights reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="https://www.facebook.com/login/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.youtube.com/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="https://twitter.com/?lang=en" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/accrescent-networks-inc-08a07420b/" target="_blank" aria-label="Linkdin">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap> 
    </FooterContainer>
  )
}

export default Footer