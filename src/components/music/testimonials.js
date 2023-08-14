export default function Testimonials() {
    const testimonials = [
      {
        text: "Lots of other saxophone players said they were unable to play a Spanish song we requested, but Kevin applied hard work and executed the song perfectly. It was a surprise proposal at a restaurant and we will be hiring again soon for the wedding! We also invited him to stay for dinner and was very respectful and lovely with our family!",
        author: "By Isabella",
      },
      {
        text: "(He) was amazing and everyone raves about him!",
        author: "By Shannon",
      },
      // You can add more testimonials here...
    ];
  
    return (
      <div className="flex flex-col items-center p-8 bg-black text-white">
        <h1 className="text-8xl m-4 font-sacramento">Testimonials</h1>
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
  
  