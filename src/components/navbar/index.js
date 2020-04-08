import React from 'react';
import instagram from '../../imgs/insta.png'
import linkedin from '../../imgs/linkedin.png'

function navBar() {
    return (
        <div>
            <heading class="row headerRow">
                <section class="myName col-sm-12 col-md-5">
                    Mason Scott
                </section>
                <nav class="navigation ml-auto col-md-4 col-sm-12">
                    <ul class="nav justify-content-center justify-content-bottom">

                        <li class="nav-item">
                            <a class="nav-link" 
                            href="https://www.instagram.com/mascott7575/" 
                            rel="noopener noreferrer" 
                            target="_blank">
                                <img class="media-image" 
                                src={ instagram }
                                alt="Instagram logo"/>
                                
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" 
                            href="https://www.linkedin.com/in/mason-scott-48460319a/" 
                            rel="noopener noreferrer" 
                            target="_blank">
                                <img class="media-image" 
                                src={ linkedin }
                                alt="Instagram logo"/>
                                
                            </a>
                        </li>
                    </ul>
                </nav>
            </heading>
        </div>
    )
}

export default navBar