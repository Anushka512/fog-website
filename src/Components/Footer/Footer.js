import React from 'react'

function Footer() {
    return (
        <>
            <div className="footer__wrapper">
                <div className='f__lt'>
                    <h2>Free Of Gluten</h2>
                    <p>Gluten, a protein found in wheat and several other grains. It means only eating only whole foods with no gluten. lorem ipsum de color</p>
                </div>
                <div className='f__md'>
                    <h2>Quick Links</h2>
                    <ul>

                        {["Home", "About Us", "Blog", "Contact Us", "Your Cart"].map((item, id) => (
                            <li className='f-links' key={item - id}>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='f__rt'>
                    <h2>Contact Us</h2>
                    <div className='c-1'>
                        <i class="fa-regular fa-phone"></i>
                        <h4>9876543210</h4>
                    </div>
                    <div className='c-2'>
                        <i class="fa-regular fa-envelope"></i>
                        <h4>freeofgluten@gmail.com</h4>
                    </div>
                    <div className='c-3'>
                        <i class="fa-light fa-location-dot"></i>
                        <h4>xyz, old city jamun road, Delhi.</h4>
                    </div>
                </div>

            </div>
            <div className="footer_copyright">&copy Freeofgluten-2023</div>
        </>
    )
}

export default Footer
