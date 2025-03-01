const ContactUs = () => {
  return (
    <section className="bg-blue-600 min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-white">
            <h2 className="text-3xl font-semibold mb-6">Get in touch</h2>
            <p className="text-sm mb-6">For general enquiries</p>

            <div className="space-y-4">
              <div>
                <p className="text-sm mb-1">Address</p>
                <p className="text-sm">
                  110, 16th Road, Chembur, Mumbai - 400071
                </p>
              </div>

              <div>
                <p className="text-sm mb-1">Phone:</p>
                <p className="text-sm">+91 22 25208822</p>
              </div>

              <div>
                <p className="text-sm mb-1">Email:</p>
                <p className="text-sm">info@superenergygroup.co.in</p>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full p-2 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-2 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-2 bg-transparent border-b border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
