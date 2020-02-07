var aboutMe = $(`<div class="container "><article class="row aboutMe "><section class="col-md-8 offset-sm-3 "><header class="about-header "><h1>About Me</h1></header><section class="row row-body "><figure class="picture col-sm-4 "><img id="my-picture"src="https://upload.wikimedia.org/wikipedia/commons/3/31/JCole2018.png " alt="J. Cole " class="img-thumbnail "></figure><section class="paragraph col-sm-5 "><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim, felis ut dictum tristique, nibh erat feugiat libero, sit amet fringilla mauris velit in mi. Duis tempus felis vitae felis vulputate pretium. Nullam commodo, est ac auctor ornare,eros nisi fringilla sem, non pulvinar tortor lorem sit amet sem. Aenean quis erat facilisis, porttitor ex cursus, luctus enim. Curabitur et metus in lacus tristique sagittis et in lorem. Nunc id nisi et neque fringilla ultricies.Aenean at feugiat elit, a posuere justo. Pellentesque egestas dolor et nisi venenatis, nec fermentum urna fringilla. Etiam efficitur porta purus, id posuere sem congue a.</p> <button type="button" id="collapse-abt" class="btn btn-primary">Collapse</button> </section></section></section></article></div>`)

var portfolio = $(`<article class="container"><section id="pictures" class="row"> <div id="pic-title" class="col-sm-12 col-md-12"><div id="port-txt">Portfolio</div></div><div id="pics" class="offset-md-1 offset-sm-1 col-sm-10 col-md-4"><img src="https://via.placeholder.com/250" alt="placeholder"></div><div id="pics" class="offset-md-2 offset-lg-3 offset-sm-1 col-sm-10 col-md-4"><img src="https://via.placeholder.com/250" alt="placeholder"></div> <div id="pics" class="offset-md-1 offset-sm-1 col-sm-10 col-md-4"><img src="https://via.placeholder.com/250" alt="placeholder"></div><div id="pics" class="offset-md-2 offset-lg-3 offset-sm-1 col-sm-10 col-md-4"><img src="https://via.placeholder.com/250" alt="placeholder"></div><div id="pics" class="offset-md-1 offset-sm-1 col-sm-10 col-md-4"><img src="https://via.placeholder.com/250" alt="placeholder"></div></section><div id="collapse-btn"><button type="button" id="collapse-port" class="btn btn-primary">Collapse</button></div></article>`)

var contactMe = $(`<section class="mb-4"><h2 id="cont-title" class="h1-responsive font-weight-bold text-center my-4">Contact us</h2><p id="sub-title" class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team willcome back to you within a matter of hours to help you.</p><article class="row"><section class="contactForm col-md-9 mb-md-0 mb-5"><form id="contact-form" name="contact-form" action="mail.php" method="POST"><section class="row"><section class="col-md-6"><section class="md-form mb-0"><input type="text" id="name" name="name" class="form-control"><label for="name" class="">Your name</label></section></section><section class="col-md-6"><div class="md-form mb-0"><input type="text" id="email" name="email" class="form-control"><label for="email" class="">Your email</label> </div></section></section><section class="row"><div class="col-md-12"><section class="md-form mb-0"><input type="text" id="subject" name="subject" class="form-control"><label for="subject" class="">Subject</label></section></div></section><section class="row"><section class="col-md-12"> <section class="md-form"><textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea> <label for="message">Your message</label></section></section> </section></form><figure class="text-center text-md-left">    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a></figure> <div class="status"></div> </section><aside id="my-info" class="col-md-3 text-center"> <ul class="list-unstyled mb-0"><li><i class="fas fa-map-marker-alt fa-2x"></i><p>Dallas, Tx, 98828429 Fake Address Blvd, USA</p> </li> <li><i class="fas fa-phone mt-4 fa-2x"></i> <p>+ 123-456-7890</p></li> <li><i class="fas fa-envelope mt-4 fa-2x"></i><p>scottm7575@gmail.com (might be real)</p></li></ul></aside></article><div id="collapse-btn"><button type="button" id="collapse-cont" class="btn btn-primary">Collapse</button></div></section>`)

var newDiv = $("<div></div>")

$("#about-me-btn").on("click", function() {
    newDiv.empty();
    newDiv.append(aboutMe)
    $(document.body).append(newDiv)
})

$("#prt-btn").on("click", function() {
    newDiv.empty();
    newDiv.append(portfolio)
    $(document.body).append(newDiv)
})
$("#cont-btn").on("click", function() {
    newDiv.empty();
    newDiv.append(contactMe)
    $(document.body).append(newDiv)
})

$(document.body).on("click", "#collapse-abt", function() {
    newDiv.empty();
})
$(document.body).on("click", "#collapse-port", function() {
    newDiv.empty();
})
$(document.body).on("click", "#collapse-cont", function() {
    newDiv.empty();
})