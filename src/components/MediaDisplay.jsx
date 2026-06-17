const MediaDisplay = ({ image }) => {
  return (
    <div className="my-8">
      <div
        className="
          overflow-hidden
          rounded-3xl
          border border-white/30
          bg-white/60
          p-3
          backdrop-blur-md
          shadow-xl
          shadow-indigo-100/50
        "
      >
        <img
          src={image}
          alt="Question"
          className="h-auto max-h-105 mx-auto rounded-2xl object-containtr ansition-all duration-500hover:scale-[1.02]"
        />
      </div>
    </div>
  );
};

export default MediaDisplay;
