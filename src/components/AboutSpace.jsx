const AboutSpace = () => {
  return (
    <>
      <div className="about-info flex md:flex-nowrap flex-wrap gap-6 bg-white rounded-3xl p-5 mt-5">
        <div
          className="md:w-1/2 w-full
        "
        >
          <img
            src="/assets/property-img/Phse-4.jpg"
            alt="space-img"
            loading="lazy"
            className="h-full rounded-3xl md:rounded-none md:rounded-tr-[150px] object-cover object-center"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-secondary-500 font-blinker font-bold mb-4 text-2xl">
            About this space
          </h3>
          <p className="text-sm xl:text-base text-black font-light font-blinker xl:leading-[normal] leading-[normal]">
            Escape to the unparalleled beauty of Malta with our exclusive
            3-bedroom, 2-bathroom Penthouse in the charming area of Ta Xbiex.
            Indulge in a mesmerizing panorama of the sea, embracing the majestic
            silhouette of Valletta, right from your windows.
            <br /> <br />
            Step into a realm of luxury and comfort where every detail is
            crafted for your utmost satisfaction. Our spacious retreat boasts a
            fully-equipped kitchen, beckoning culinary enthusiasts to unleash
            their creativity.
            <br /> <br />
            TElevating your experience is our expansive terrace, adorned with a
            BBQ, offering the perfect setting for memorable al fresco dining
            moments amidst awe-inspiring vistas.
            <br /> <br />
            Yet, the pièce de résistance lies just beyond – your very own
            private pool, a sanctuary of serenity and indulgence, inviting you
            to immerse yourself in its refreshing waters or bask in the warm
            embrace of the Mediterranean sun.
            <br />
            <br />
            Embark on an unforgettable journey and make memories that linger
            long after you depart. Your dream escape awaits.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutSpace;
