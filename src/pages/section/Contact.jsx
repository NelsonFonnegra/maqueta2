import './Contact.css';

const generateCheckboxItems = (count) => {
    return Array.from({ length: count }).map((_, index) => (
        <div key={index} className="checkbox-item">
            <input type="checkbox" id={`checkbox-${index}`} />
            <label htmlFor={`checkbox-${index}`}>Checkbox {index + 1}</label>
        </div>
    ));
};

const generateRadioItems = (count) => {
    return Array.from({ length: count }).map((_, index) => (
        <div key={index} className="radio-item">
            <input type="radio" name="options" id={`radio-${index}`} />
            <label htmlFor={`radio-${index}`}>Option {index + 1}</label>
        </div>
    ));
};

const Contact = () => {
    return (
        <main className="container">
            <h2 className="title-C">Contacto</h2>
            <aside className="container-contact">
                <div className="checkbox-group">
                    {generateCheckboxItems(11)}
                </div>
            </aside>
            <aside className="container-contact">
                <div className="radio-group">
                    {generateRadioItems(13)}
                </div>
            </aside>
        </main>
    );
}

export default Contact;
