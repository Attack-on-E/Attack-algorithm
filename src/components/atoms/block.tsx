type Props = {
  type: string;
  id: Int16Array;
};

const block = (props: Props) => {
  const type = props.type;

  return (
    <div className="text-center text-3xl text-white w-80 py-5 border-4 border-bule-600 bg-bule-400 bg-opacity-62 font-semibold rounded-lg">
      <p>
        {props.id}. {props.type}
      </p>
    </div>
  );
};
export default block;
