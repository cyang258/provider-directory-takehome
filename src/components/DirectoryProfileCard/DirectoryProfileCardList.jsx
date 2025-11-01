import DirectoryProfileCard from "./DirectoryProfileCard";

export default function DirectoryProfileCardList({ providers }) {
  console.log("provider is");
  console.log(providers);
  return (
    <div className="flex flex-col items-center justify-center gap-[6px] pb-5">
      {providers.map((provider) => (
        <DirectoryProfileCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
}
