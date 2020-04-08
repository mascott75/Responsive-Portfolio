import React from 'react'
import ButtonGroup from '../components/buttonGroup'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import me from '../imgs/Mason.PNG'
function about() {
    return (
        <div>
            <Navbar />
            <ButtonGroup />
            <div class="container ">
                <article class="row aboutMe ">
                    <section class="col-md-8 offset-sm-3 ">
                        <header class="about-header ">
                            <h1>Mason Scott</h1>
                        </header>
                        <section class="row row-body ">
                            <figure class="picture col-sm-6  " >
                                <img id="my-picture" src={me} alt="J. Cole " class="img-thumbnail " />
                            </figure>
                            <section class="paragraph col-sm-5 ">
                                <p>Hello friends! Welcome to my online portfolio. We are currently on the About page, so if you would like to be elsewhere, select on of the options above. The portfolio page will take you to some of the best projects I have been a part of. You can click on the images, and be taken to the site to check it out. If you like what you see, feel free to contact me!</p>
                                
                            </section>
                        </section>
                    </section>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default about;