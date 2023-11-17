import React from 'react'
import ageCalc from '../assets/ageCalculator.png'
import Yelp from '../assets/Yelp.png'
import Product from '../assets/eCOMproduct.png'
import Card from '../assets/interactiveCard.png'
import medicare from '../assets/mediCare.png'
import Raft from '../assets/Raft.png'
import AfriChow from '../assets/AfriChow.png'

const images = [
    {
        img: AfriChow,
        alt: 'AfriChow',
        link: 'https://africhow.vercel.app/'
    },
    {
        img: ageCalc,
        alt: "Age Calculator",
        link: 'https://legaljay.github.io/AgeCalculator/'
    },
    {
        img: Yelp,
        alt: "Yelp",
        link: 'https://legaljay.github.io/Project-CampGround/'
    },
    {
        img: Product,
        alt: "E-Commerce product page",
        link: 'https://legaljay.github.io/E-commerce_infoPage/'
    },
    {
        img: Card,
        alt: "Interactive card",
        link: 'https://legaljay.github.io/interactive-card-details-form-main/'
    },
    {
        img: medicare,
        alt: "Medicare website",
        link: 'https://primer-health.vercel.app/'
    },
    {
        img: Raft,
        alt: "Rafting Website",
        link: 'https://raft-alpha67.vercel.app/'
    },
]

const ProjectList = () => {
  return (
    <div className='flex flex-wrap gap-2 w-full md:w-[80%] mb-5'>
        {images.map((image) => (
            <a key={image.img} href={image.link} className='w-[48.5%] md:w-[40%]'><img key={image.img} src={image.img} alt={image.alt} /></a>
        ))}
    </div>
  )
}

export default ProjectList