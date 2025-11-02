import DirectoryProfileCard from "./DirectoryProfileCard";
import { Link } from "react-router-dom";

export default function DirectoryProfileCardList({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center gap-[6px] pb-5">
      {providers.map((provider) => (
        <Link
          key={provider.id}
          to={`/directory/${provider.id}`}
          className="w-full flex justify-center"
        >
          <DirectoryProfileCard provider={provider} />
        </Link>
      ))}
    </div>
  );
}
