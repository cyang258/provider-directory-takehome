import { useRef, useState, useEffect } from "react";

const ProviderIntroductionCard = ({ name, title, specialization, bio }) => {
  const [expanded, setExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const hasOverflow =
        textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsOverflowing(hasOverflow);
    }
  }, [bio, expanded]);
  return (
    <div className="w-full max-w-[598px] h-auto bg-white shadow-sm px-[32px] py-[14px] flex flex-col space-y-[12px] rounded-md">
      <div className="flex flex-col min-w-0 space-y-[6px] pt-[10px]">
        <div className="subheading-1 text-neutral-9 truncate">
          {name}
          {title && title !== "" ? `, ${title}` : null}
        </div>
        <div className="label-3 text-neutral-7">{specialization}</div>
      </div>

      <p
        ref={textRef}
        className={`body-3 text-neutral-7 transition-all duration-300 ease-in-out ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        {bio}
      </p>

      {(isOverflowing || expanded) && (
        <button
          className="flex items-center gap-1.5 text-secondary-5 label-4 w-fit pb-[10px]"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
          {expanded ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={4}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default ProviderIntroductionCard;
