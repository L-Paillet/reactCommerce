import "../../css/Contact.css";

function Contact() {
    const iframe ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2776.297366212865!2d6.701438615446015!3d45.905364179108545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478956f855abffff%3A0xa4b81c63e8a6e75a!2sPouet%20Pouet!5e0!3m2!1sfr!2sfr!4v1665145815028!5m2!1sfr!2sfr";
    return (
        <div className="contactFrame">
            <iframe src={iframe} width="500" height="350"  allowfullscreen="" loading="lazy" title="myFrame" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Contact;