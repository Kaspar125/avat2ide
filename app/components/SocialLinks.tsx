import * as React from 'react';

export default function SocialLinks(){
    const socials = ["facebook", "linkedin", "instagram"]

    const getSocialLink = (social: string) => {
        return `https://www.${social}.com/avataide`;
    }

    return (
        <div className="flex flex-row-reverse space-x-4 space-x-reverse mr-6">
            {socials.map((social, index) => (
                <div key={index} className="py-2 px-2 transform transition duration-500 ease-in-out hover:scale-110">
                    <a href={getSocialLink(social)} target="_blank" rel="noopener noreferrer">
                        <img src={social +'.png'} alt={social} width="30" height="30"/>
                    </a>
                </div>))
            }
        </div>
    );
}