import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { 
    faInstagram,
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { validateEmail, validateName, validateMessage } from "./API/Validation";
import InLineError from "./API/InLineError";
import { toast } from 'react-toastify';
import { SendEmail } from "./API/mail";

const Contact = () =>{

    const [name,setName] = useState("");
    const [nameError,setNameError] = useState("");
    const [email,setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
    const [message,setMessage] = useState("");
    const [messageError,setMessageError] = useState("");
    const [send, setSend] = useState();

    useEffect(() =>{
        validateName({name,setNameError});
        validateEmail({email,setEmailError});
        validateMessage({message,setMessageError});
    
        if (send) {
          toast.success(send.msg);
          setName("");
          setEmail("");
          setMessage("");
          setSend();
        }
    },[name,email,message,send]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!nameError & !emailError & !messageError) {
          SendEmail({ name, email, message, setSend });
        }
    };

    return (
        <section className="relative flex w-full min-h-screen justify-center items-center p-2 bg-gradient z-[2]">
            <div className="flex flex-col md:flex-row mt-20 md:space-x-40 md:space-y-0 space-y-6 bg-backdrop w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">                <div className='flex flex-col space-y-8 justify-between'>
                    <div>
                        <h2 className='font-bold text-4xl tracking-wide'>
                            Contact Me
                        </h2>
                        <p className='pt-2 text-gray-300 text-sm'>
                            Let me know if you have any questions or concerns!
                        </p>
                    </div>
                    <div className='flex flex-col space-y-6'>
                        <div className='inline-flex space-x-2 items-center'>
                            <FontAwesomeIcon className='text-red-400 w-4' icon={faEnvelope} />
                            <span>kevin.mooney.creates@gmail.com</span>
                        </div>
                        <div className='inline-flex space-x-2 items-center'>
                            <FontAwesomeIcon className='text-red-400 w-4' icon={faLocationDot} />
                            <span>Denver, Colorado, United States</span>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="https://www.instagram.com/kmoney302/"><FontAwesomeIcon className='text-red-400 w-4 spin-icon enlarge-icon' icon={faInstagram} /></a>
                        <a href="https://github.com/kmooney225"><FontAwesomeIcon className='text-red-400 w-4 spin-icon enlarge-icon' icon={faGithub} /></a>
                        <a href="https://www.linkedin.com/in/kevin-mooney-b4abab165/"><FontAwesomeIcon className='text-red-400 w-4 spin-icon enlarge-icon' icon={faLinkedin} /></a>
                    </div>
                </div>
                <div onSubmit={submitHandler} className='bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80'>
                    <form className='flex flex-col space-y-4'>
                        <div>
                            <label className='text-sm'>Your Name</label>
                            <input 
                                type='text' 
                                value={name}
                                placeholder='Your name'
                                onChange={(e) => setName(e.target.value)} 
                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mg-2 outline-none focus:ring-2 focus:ring-green-300' 
                            />
                            {name && <InLineError error={nameError} />}
                        </div>
                        <div>
                            <label className='text-sm'>Email Address</label>
                            <input 
                                type='text' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Email' 
                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mg-2 outline-none focus:ring-2 focus:ring-green-300' 
                            />
                            {email && <InLineError error={emailError} />}
                        </div>
                        <div>
                            <label className='text-sm'>Message</label>
                            <textarea 
                                type='text' 
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                rows='4'
                                placeholder='Type something meaningful here' 
                                className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mg-2 outline-none focus:ring-2 focus:ring-green-300' 
                            ></textarea>
                        </div>
                        <button 
                        className='inline-block self-end bg-red-700 text-white m-10 hover:bg-red-400 ease-out duration-300 font-semibold border border-green hover:border-transparent rounded-lg px-6 py-2 uppercase text-sm'
                        type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
