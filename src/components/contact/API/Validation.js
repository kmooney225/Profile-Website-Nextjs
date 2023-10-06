const validateEmail = ({ email, setEmailError }) => {
    const emailRegular =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && !email.match(emailRegular)
      ? setEmailError('Email not valid')
      : setEmailError('');
  };
  
  const validateName = ({ name, setNameError }) => {
    return name && name.length < 3
      ? setNameError('Name cannot be less than 3 characters')
      : name && name.length > 50
      ? setNameError('Name cannot be more than 50 characters')
      : setNameError('');
  };

  const validateTitle = ({ title, setTitleError }) => {
    return title && title.length < 3
      ? setTitleError('Title cannot be less than 3 characters')
      : title && title.length > 50
      ? setTitleError('Title cannot be more than 40 characters')
      : setTitleError('');
  };
  
  const validateMessage = ({ message, setMessageError }) => {
    return message && message.length < 5
      ? setMessageError('Message cannot be less than 5 characters')
      : message && message.length > 200
      ? setMessageError('Message cannot be more than 500 characters')
      : setMessageError('');
  };
  
  export { validateEmail, validateName, validateMessage, validateTitle};