import { useState } from "react";
import { TbCrown, TbSend, TbMail, TbUser, TbMessage } from "react-icons/tb";
import emailjs from "emailjs-com";

export const WorkTogether = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration using environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: import.meta.env.VITE_TO_EMAIL,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row items-center h-full p-4 md:px-8 md:py-5 gap-4 md:gap-8">
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-2">
        <div className="bg-zinc-800/30 p-3 md:p-4 rounded-xl">
          <TbCrown className="text-4xl md:text-5xl text-rose-300/90" />
        </div>
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-200">
          Let's Work Together
        </h2>
        <p className="text-zinc-400 text-sm md:text-base">
          Ready to turn ideas into reality?
        </p>
      </div>

      <div className="flex-1 w-full">
        <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
          <div className="space-y-2 md:space-y-3">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-3 top-3 md:top-3.5 text-zinc-400">
                <TbUser className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-zinc-800/40 border border-zinc-800/80 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-300/50 focus:bg-zinc-800/60 transition-all duration-200 text-sm md:text-base"
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-3 top-3 md:top-3.5 text-zinc-400">
                <TbMail className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-zinc-800/40 border border-zinc-800/80 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-300/50 focus:bg-zinc-800/60 transition-all duration-200 text-sm md:text-base"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <div className="absolute left-3 top-3 md:top-3.5 text-zinc-400">
                <TbMessage className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share your thoughts and project ideas..."
                rows="3"
                required
                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 bg-zinc-800/40 border border-zinc-800/80 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-rose-300/50 focus:bg-zinc-800/60 transition-all duration-200 resize-none text-sm md:text-base"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-rose-300/90 hover:bg-rose-300 text-zinc-800 font-medium py-2.5 md:py-3 px-4 rounded-xl transition-all duration-200 hover:scale-102 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm md:text-base"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-5 w-5 border-2 border-zinc-800 border-t-transparent rounded-full"></div>
                Sending...
              </>
            ) : (
              <>
                <TbSend className="h-4 w-4 md:h-5 md:w-5" />
                Send Message
              </>
            )}
          </button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <p className="text-green-400 text-center text-sm">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="text-red-400 text-center text-sm">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
