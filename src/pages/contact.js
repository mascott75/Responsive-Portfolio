import React from 'react'
import ButtonGroup from '../components/buttonGroup'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import instagram from '../imgs/insta.png'
import linkedin from '../imgs/linkedin.png'

function about() {
    return (
        <div>
            <Navbar />
            <ButtonGroup />
            <section class="mb-4">
                <h2 id="cont-title" class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p id="sub-title" class="text-center w-responsive mx-auto mb-5">Want to get into contact with me? Follow one of these links to a social-media platform, or email me!</p>
               
                    <ul class="nav justify-content-center justify-content-bottom">

                        <li class="nav-item">
                            <a class="nav-link" 
                            href="https://www.instagram.com/mascott7575/" 
                            rel="noopener noreferrer" 
                            target="_blank">
                                <img class="contact-image" 
                                src={ instagram }
                                alt="Instagram logo"/>
                                
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" 
                            href="https://www.linkedin.com/in/mason-scott-48460319a/" 
                            rel="noopener noreferrer" 
                            target="_blank">
                                <img class="contact-image" 
                                src={ linkedin }
                                alt="Instagram logo"/>
                            </a>
                        </li>
                    </ul>
                    <div id="emailTag">Email: scottm7575@gmail.com</div>
                
                    
            </section>
            <Footer />
        </div>
    )
}

export default about;