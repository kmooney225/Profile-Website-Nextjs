export default function Testimonials() {
    const testimonials = [
      {
        text: "Kevin was AMAZING! Very professional. The whole wedding was impressed by how good he was. He definitely made our special night have beautiful energy with his music. We had to ask him to stay longer because everyone liked him so much. THANK YOU Kevin for making our wedding special and unforgettable!",
        author: "Sofia Moreno",
      },
      {
        text: "Lots of other saxophone players said they were unable to play a Spanish song we requested, but Kevin applied hard work and executed the song perfectly. It was a surprise proposal at a restaurant and we will be hiring again soon for the wedding! We also invited him to stay for dinner and was very respectful and lovely with our family!",
        author: "Isabella",
      },
      {
        text: "Kevin did an excellent job playing at my wedding. Our guests enjoyed his music and we will lifelong memories thanks to him. He was easy to communicate with and accommodated my music selections.",
        author: "Patricia Nantume",
      },
    ];
  
    return (
      <div className="flex flex-col items-center p-full w-auto bg-black text-white">
        <h1 className="text-6xl m-4 font-sacramento">Testimonials</h1>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-md p-4 m-4 border rounded bg-opacity-50"
            style={{ background: "radial-gradient(circle, red, black)" }}
          >
            <p className="text-lg italic mb-2">{testimonial.text}</p>
            <p className="text-md font-bold text-right">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    );
  }
  
  