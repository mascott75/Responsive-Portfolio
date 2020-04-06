import React from 'react'
import ButtonGroup from '../components/buttonGroup'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
function about() {
    return (
        <div>
            <Navbar />
            <ButtonGroup />
            <section class="mb-4">
                <h2 id="cont-title" class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                <p id="sub-title" class="text-center w-responsive mx-auto mb-5">Want to get into contact with me? Feel free to fill out this form, or follow one of the links to one of my social media profiles!</p>
                <article class="row">
                    <section class="contactForm col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                            <section class="row">
                                <section class="col-md-6">
                                    <section class="md-form mb-0">
                                        <input type="text" id="name" name="name" class="form-control"/>
                                        <label for="name" class="">Your name</label>
                                    </section>
                                </section>
                                        <section class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="email" name="email" class="form-control"/>
                                                <label for="email" class="">Your email</label>
                                            </div>
                                        </section>
                                </section>
                                        <section class="row">
                                            <div class="col-md-12">
                                                <section class="md-form mb-0">
                                                    <input type="text" id="subject" name="subject" class="form-control"/>
                                                    <label for="subject" class="">Subject</label>
                                                </section>
                                            </div>
                                        </section>
                                            <section class="row">
                                                <section class="col-md-12"> 
                                                    <section class="md-form">
                                                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea> 
                                                        <label for="message">Your message</label>
                                                    </section>
                                                </section> 
                                            </section>
                        </form>
                        <figure class="text-center text-md-left">    
                            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                        </figure> 
                        <div class="status"></div> 
                    </section>
                    <aside id="my-info" class="col-md-3 text-center"> 
                        <ul class="list-unstyled mb-0">
                            <li>
                                <i class="fas fa-map-marker-alt fa-2x"></i>
                                <p>Dallas, Tx</p>
                            </li> 
                            
                            <li>
                                <i class="fas fa-envelope mt-4 fa-2x"></i>
                                <p>scottm7575@gmail.com</p>
                            </li>
                        </ul>
                    </aside>
                </article>
                    
            </section>`
            <Footer />
        </div>
    )
}

export default about;