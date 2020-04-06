import React from 'react'
import { Link } from 'react-router-dom'
import ButtonGroup from '../components/buttonGroup'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import pokeball from '../imgs/pokeball.png'
import notebook from '../imgs/notebook.png'
import dAndD from '../imgs/d&d.png'
function about() {
    return (
        <div>
            <Navbar />
            <ButtonGroup />
            <article class="container">
                <section id="pictures" class="row">
                    <div id="pic-title" class="col-sm-12 col-md-12">
                        <div id="port-txt">Portfolio</div>
                    </div>
                    <div className="pics" class="offset-md-1 offset-sm-1 col-sm-10 col-md-4">
                        <a href="https://project222222222.herokuapp.com/" rel="noopener noreferrer"
                            target="_blank">
                            <img className="portsLogos" src={dAndD} alt="placeholder" />
                            <div className="portsLinks">DinDer!</div>
                        </a>
                    </div>
                    <div className="pics" class="offset-md-2 offset-lg-3 offset-sm-1 col-sm-10 col-md-4">
                        <a href="https://project222222222.herokuapp.com/" rel="noopener noreferrer"
                            target="_blank">
                            <img className="portsLogos" src={pokeball} alt="Pokeball" />
                            <div className="portsLinks">Pokemon Fight!</div>
                        </a>
                    </div>
                    <div href="https://notesss-takerr.herokuapp.com/" className="pics" class="offset-md-1 offset-sm-1 col-sm-10 col-md-4">
                        <a href="https://notesss-takerr.herokuapp.com/" rel="noopener noreferrer"
                            target="_blank">
                            <img className="portsLogos" src={notebook} alt="placeholder" />
                            <div className="portsLinks">Notebook!</div>
                        </a>
                    </div>
                </section>

            </article>
            <Footer />
        </div>
    )
}

export default about;