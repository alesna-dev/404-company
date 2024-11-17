const Label = ({ label }: { label: string }) => {
  return (
    <span className="text-md md:text-lg uppercase text-primary border-l border-primary pl-4">
      {label}
    </span>
  );
};

export default Label;
