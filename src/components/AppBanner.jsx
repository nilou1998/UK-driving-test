const AppBanner = () => {
  return (
    <div className="text-center">
      <div
        className="
          mt-8
          inline-flex
          items-center
          gap-2
          rounded-full
          border border-indigo-200
          bg-white/70
          px-4
          py-2
          backdrop-blur-md
          shadow-sm
        "
      >
        <span>🚗</span>
        <span className="text-sm font-medium text-indigo-700">
          Driving Theory Test
        </span>
      </div>

      <h1
        className="
          mt-5
          bg-linear-to-r
          from-indigo-700
          via-violet-600
          to-purple-700
          bg-clip-text
          text-4xl
          font-extrabold
          text-transparent
          md:text-6xl
        "
      >
        Practice Like The Real Exam
      </h1>

      <p
        className="
          mx-auto
          mt-4
          max-w-2xl
          text-base
          leading-relaxed
          text-slate-600
          md:text-lg
        "
      >
        Improve your road sign knowledge, traffic rules, and exam readiness with
        realistic practice questions.
      </p>
    </div>
  );
};

export default AppBanner;
