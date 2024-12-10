import React from 'react'
import Logo from '../../assets/logo.png';
import {motion} from 'framer-motion';

const NavLinks = [
    {
        id: 1,
        title: "About",
        link: "#",
      },
      {
        id: 2,
        title: "Services",
        link: "#",
      },
      {
        id: 3,
        title: "Project",
        link: "#",
      },
      {
        id: 4,
        title: "Contact",
        link: "#",
      },
]

const Navbar = () => {
  return (
    <>
        <motion.div initial={{y: -100}} animate={{y: 0}} transition={{ duration: 0.5 }} className='container py-6 flex justify-between items-center'>
            {/* Logo Section */}
            <div className='flex items-center gap-3'>
            <img src={Logo} alt="" className='w-14' />
            <span className='text-4xl text-primary font-semibold'>Decora</span>
            </div>
            {/* Link Section */}
            <div className='hidden md:block space-x-12'>
                {NavLinks.map((link) => {
                    return (
                        <a key={link.id} href={link.link} className='inline-block mx-2 text-base font-semibold hover:text-primary'>
                            {link.title}
                        </a>
                    );
                })}
            </div>
            {/* Button Section */}
            <div>
                <button className='primary-btn'>
                  Try For Free
                </button>
            </div>
        </motion.div>
    </>
  )
}

export default Navbar