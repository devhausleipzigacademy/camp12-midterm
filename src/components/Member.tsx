type Props = {
  image: string;
  name: string;
  role: string;
};

const Member = ({ image, name, role }: Props) => {
  return (
    <>
      <div className="flex flex-row h-16 gap-6 justify-center items-center">
        <img
          src={image}
          alt={name}
          className="h-16 aspect-square object-cover"
        />
        <div>
          <h2 className="text-white font-bold text-sm">{name}</h2>
          <p className="text-white-dimmed text-xs">{role}</p>
        </div>
      </div>
    </>
  );
};

export default Member;
