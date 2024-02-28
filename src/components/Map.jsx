const Map = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-3xl w-full">
        <h1 className="text-primary-600 font-bold text-3xl">We are here</h1>
        <div className="rounded-3xl h-96 mt-3 rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.9529854538546!2d14.489707610805429!3d35.89916711785774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130e45a49ce5ad83%3A0x5eac66d2130058ee!2sPenthouse%20Holidays%20in%20Malta!5e0!3m2!1sen!2smt!4v1708685630455!5m2!1sen!2smt"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
