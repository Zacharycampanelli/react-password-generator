import CheckboxItem from "../CheckboxItem/CheckboxItem";

const Checklist = () => {
  return (
    <div>
      <CheckboxItem
        description="Include Uppercase Letters"
        option="uppercase"
      />
      <CheckboxItem
        description="Include Lowercase Letters"
        option="lowercase"
      />
      <CheckboxItem description="Include Numbers" option="numbers" />
      <CheckboxItem description="Include Symbols" option="symbols" />
    </div>
  );
};

export default Checklist;
