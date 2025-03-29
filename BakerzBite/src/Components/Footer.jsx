function Footer() {
  return (
    <>
    <footer class="footer">
        <div class="footer-brand">
            <h2>Bakerz Bites</h2>
            <div class="social-icons">
                <div class="social-icon">
                    <a href="https://facebook.com" target="_blank" aria-label="Visit our Facebook page">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.18.0/facebook.svg" alt="Facebook"/>
                    </a>
                </div>
                <div class="social-icon">
                    <a href="https://instagram.com" target="_blank" aria-label="Visit our Instagram page">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.18.0/instagram.svg" alt="Instagram"/>
                    </a>
                </div>
                <div class="social-icon">
                    <a href="https://twitter.com" target="_blank" aria-label="Visit our Twitter page">
                        <img src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/9.18.0/twitter.svg" alt="Twitter"/>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="footer-section">
            <h3>Products</h3>
            <ul>
                <li><a href="#">Cakes</a></li>
                <li><a href="#">Pies</a></li>
                <li><a href="#">Donuts</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h3>Help</h3>
            <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Payment policy</a></li>
            </ul>
        </div>
        
        <div class="get-in-touch">
            <h3>Get in touch</h3>
            <ul>
                <li>bakerzbite@gmail.com</li>
                <li>+2349509875</li>
            </ul>
        </div>
    </footer>
    
    
    </>
  )
}

export default Footer;