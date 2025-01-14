import { Helmet } from "react-helmet";
import Totop from "./Totop";


export default function TC() {
    return (
        <div className="tc-wrapper">
        <Helmet>
            <title>Greengadget | T&C</title>
            <meta name="description" content="lorem ipsum"/> 
        </Helmet>
            <ul className="content-headings">
              <li><a href="#tc-Introduction">Introduction & disclamer</a></li>
              <li><a href="#tc-own">Learn about us</a></li>
              <li><a href="#TOU">Terms of use</a></li>
              <li><a href="#tc-L">Legal liability</a></li>
            </ul>

        <div className="terms-container">
            <div className="terms-content">
            <h1>Terms and Conditions</h1>

            <section id="tc-Introduction">
            <div className="section">
                <h2>1. Introduction</h2>
                <p>Welcome to GreenGadget's Terms and Conditions. 
                    These are our terms and conditions for use of our services. 
                    If you continue to browse and use this website, 
                    you are agreeing to comply with and be bound by the following terms and conditions of use, 
                    which together with our privacy policy govern GreenGadget's relationship with you in relation to this website. 
                    If you disagree with any part of these terms and conditions, 
                    you are free to opt out of using all of our services and by extension our website.</p>
            </div>
            </section>

            <section id="tc-own">
            <div className="section">
                <h2>2. Who are we?</h2>
                <p> The term 'GreenGadget' or 'us' or 'we' refers to the owner of the website whose registered office is GreenGadget Ltd, 
                    123 Green Street, GreenCity, GC1 2YZ. Our company registration number is 0123456789 - VAT Registration GB 123 4567 89. 
                    The term 'you' refers to the user or viewer of our website.
                </p>
            </div>
            </section>

            <section id="TOU">
            <div className="section">
                <h2>3. The use of this website is subject to the following terms of use:</h2>
                <ul>
                    <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                    <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.</li>
                    <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                    <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</li>
                    <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                    <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
                    <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                    <li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                    <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland, and Wales.</li>
                </ul>
            </div>
            </section>

            <section id="tc-L">
            <div className="section">
                <h2>4. Liability</h2>
                <p></p>
            </div>
            </section>
            
            <Totop/>
            </div>
        </div>
        </div>
    );
}
