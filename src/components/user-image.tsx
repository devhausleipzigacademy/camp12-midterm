type UserImageProps = {
  userName: string;
  userImage: string;
};

export function UserImage({ userName, userImage }: UserImageProps) {
  return (
    <div className="flex bg-dark text-white justify-between items-center">
      <div className="flex flex-col font-bold gap-3">
        <div className="text-white-dimmed text-xs"></div>
      </div>
      <div className="bg-white w-10 h-10 rounded-full">
        <img
          src={userImage}
          alt={`${userName}'s avatar`}
          className="w-full h-full rounded-full"
        />
      </div>
    </div>
  );
}
