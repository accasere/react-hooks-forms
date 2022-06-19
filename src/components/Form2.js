import React,{useState} from 'react';

function Form2(){
    const [newsletter,setNewsletter] = useState(false);

    function handleNewsletterChange(event){
        //checked not value
        setNewsletter(event.target.checked);
    }

    return(
        <form>
            <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
            <input
                type="checbox" 
                id="newsletter"
                onChange={handleNewsletterChange}
                checked={newsletter}
            />
        </form>

    )

}

export default Form2;