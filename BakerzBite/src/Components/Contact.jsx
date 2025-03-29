export default function Contact() {
  return (
   <>
        <div class="contact-container">
            <div class="contact-info">
                <h1>Bakerz Bites</h1>
                <p>Message our team</p>
                <p>Fill out the short form and we will be in touch as soon as possible.</p>
            </div>

            <form class="contact-form">
                <div class="form-row">
                    <input type="text" name="name" placeholder="Name *" required />
                    <input type="email" name="email" placeholder="Email *" required />
                </div>
                <textarea name="message" rows="4" placeholder="Message *" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
   </>
  )
}

