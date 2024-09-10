import React from 'react';
import FooterStyles from '../components/footer.module.css'; 

export type FooterProps = {
    links: { href: string; text: string }[];
    copyright: string;
}

const Footer: React.FC<FooterProps> = ({ links, copyright }) => {
    return (
        <footer className={FooterStyles.footer}>
            <div className={FooterStyles.links}>
                {links.map((link, index) => (
                    <a key={index} href={link.href} className={FooterStyles.link}>
                        {link.text}
                    </a>
                ))}
            </div>
            <div className={FooterStyles.copyright}>
                {copyright}
            </div>
        </footer>
    );
};

export default Footer;