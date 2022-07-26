export default function Contact() {

  return (
    <div className="container">
      <form id="contactForm" action="https://formsubmit.co/2b02628becc9587ed474eb15e08e261a" method="POST">
        <div className="mb-3 form-group text-white">
          <h2 className="text-white">Contact Form</h2>
          <label className="form-label" for="name">Name</label>
          <input className="form-control" id="name" type="text" placeholder="Name" />
        </div>


        <div className="mb-3 form-group">
          <label className="form-label text-white" for="emailAddress">Email Address</label>
          <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
        </div>


        <div className="mb-3 form-group">
          <label className="form-label text-white" for="message">Message</label>
          <textarea className="form-control" id="message" type="text" placeholder="Message" styleName="height:10rem;"></textarea>
        </div>


        <div class="d-grid mb-3">
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )

}