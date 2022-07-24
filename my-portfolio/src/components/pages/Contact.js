export default function Contact() {

  return (
    <div className="container py-4">


      <form id="contactForm" action="https://formsubmit.co/lam.kevin91@gmail.com" method="POST">
        <div className="mb-3 form-group">
          <label className="form-label" for="name">Name</label>
          <input className="form-control" id="name" type="text" placeholder="Name" />
        </div>


        <div className="mb-3 form-group">
          <label className="form-label" for="emailAddress">Email Address</label>
          <input className="form-control" id="emailAddress" type="email" placeholder="Email Address" />
        </div>


        <div className="mb-3 form-group">
          <label className="form-label" for="message">Message</label>
          <textarea className="form-control" id="message" type="text" placeholder="Message" styleName="height:10rem;"></textarea>
        </div>


        <div class="d-grid">
          <button className="btn btn-primary btn-lg" type="submit">Submit</button>
        </div>

      </form>

    </div>
  )

}