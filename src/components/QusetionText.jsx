const QusetionText = ({ text, as = "p" }) => {
  const Tag = as;
  return (
    <div>
      <Tag className="mb-8 text-2xl font-bold text-slate-800">{text}</Tag>
    </div>
  );
};
export default QusetionText;
