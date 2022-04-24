function ContactForm() {
  return (
    <div className="lg:w-2/5 md:w-1/2 w-full sm:p-0 p-8">
      <form  className="w-full h-full flex flex-col justify-center items-center p-4" name="contact" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div class="flex flex-wrap w-full  md:mb-0 mb-1">
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label class="block uppercase tracking-wide text-[#464461] text-xs font-bold mb-1" for="firstname">
                First Name
              </label>
              <input class="block w-full bg-white text-gray-700 border-2 border-[#C8C7AB] hover:border-[#adac95] focus:border-[#adac95] rounded-lg py-2 px-4 mb-3" id="firstname" name="firstname" type="text" placeholder="First Name" />
            </div>
            <div class="w-full md:w-1/2 px-3 mb-1 md:mb-0">
              <label class="block uppercase tracking-wide text-[#464461] text-xs font-bold mb-1" for="lastname">
                Last Name
              </label>
              <input class="block w-full bg-white text-gray-700 border-2 border-[#C8C7AB] hover:border-[#adac95] focus:border-[#adac95] rounded-lg py-2 px-4 mb-3" id="lastname" name="lastname" type="text" placeholder="Last Name" />
            </div>
        </div>
        <div class="flex flex-wrap w-full md:mb-0 mb-1">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-[#464461] text-xs font-bold mb-1" for="email">
                E-mail Address
              </label>
              <input class="block w-full bg-white text-gray-700 border-2 border-[#C8C7AB] hover:border-[#adac95] focus:border-[#adac95] rounded-lg py-2 px-4 mb-3" id="email" name="email" type="email" placeholder="Email Address"  />
            </div>
        </div>
        <div class="flex flex-wrap w-full">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-[#464461] text-xs font-bold mb-1" for="message">
                Message
              </label>
              <textarea class="no-resize block w-full bg-white text-gray-700 border-2 border-[#C8C7AB] hover:border-[#adac95] focus:border-[#adac95] rounded-lg py-2 px-4 mb-3 h-48 resize-none" id="message" name="message" placeholder="Write your message ..."></textarea>
            </div>
        </div>
        <button  type="submit" className="sm:m-2 my-2 px-6 py-3 bg-[#C8C7AB] hover:bg-[#adac95] font-semibold text-white text-sm rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
