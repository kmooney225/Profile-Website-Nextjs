import axios from 'axios';

export const SendEmail = async ({
    name,
    email,
    message,
    title,
    setSend,
  }) => {
    try {
      const datas = { name, email, title, message };
      let res = await axios.post(`https://kev-portfolio-website.herokuapp.com/`, datas);
      if (res) {
        setSend(res.data);
      }
    } catch (error) {
      alert("not working");
    }
  };