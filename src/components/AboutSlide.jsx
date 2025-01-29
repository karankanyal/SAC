function AboutSlide({ heading, abouttext }) {
  return (
    <div className="flex flex-none rounded-xl w-full h-full flex-col justify-center items-center hover:scale-110 border border-gray-300 p-8 text-center transition-all ease-in duration-300">
      <h2 className="text-xl font-bold">{heading}</h2>
      <p>{abouttext}</p>
      <a href="#read-more" className="text-blue-500">
        See more...
      </a>
    </div>
  );
}

export default AboutSlide;
