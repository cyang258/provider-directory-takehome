import React, { useEffect, useState } from "react";
import DirectoryPageHeader from "components/PageHeader/DirectoryPageHeader";
import DirectoryProfileCardList from "components/DirectoryProfileCard/DirectoryProfileCardList";

import { fetchProviders } from "api";

export default function DirectoryPage(props) {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProviders()
      .then((data) => setProviders(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <DirectoryPageHeader />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[630px] text-neutral-8 input-text-1 px-5 py-4">
          <span className="text-neutral-9 text-label-2">
            {providers.length}
          </span>{" "}
          providers in Ontario
        </div>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <DirectoryProfileCardList providers={providers} />
      )}
    </>
  );
}
