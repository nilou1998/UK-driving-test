const ExplanationText = ({ text }) => {
  return (
    <div
      className="
        mt-6
        rounded-2xl
        border border-indigo-100
        bg-indigo-50/70
        p-5
      "
    >
      <h4 className="mb-2 font-semibold text-indigo-700">💡 Explanation</h4>

      <p className="leading-relaxed text-slate-700">{text}</p>
    </div>
  );
};

export default ExplanationText;
