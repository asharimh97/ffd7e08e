import { BiPaperPlane } from "react-icons/bi";

function Contact() {
  return (
    <section id="contact" className="py-20 px-10 bg-gray-50">
      <div className="flex flex-col lg:flex-row max-w-[1280px] mx-auto px-4 items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl xl:text-4xl font-bold text-dark mb-6">
            Start your free trial today
          </h2>
          <p className="text-sm text-body-color mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <form action="#" className="flex gap-1">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 py-2 px-4 bg-white border border-gray-200 rounded-md"
            />
            <button className="bg-indigo-600 text-white py-3 rounded-md w-fit self-end">
              <BiPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
