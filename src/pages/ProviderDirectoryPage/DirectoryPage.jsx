import React from "react";
import DirectoryPageHeader from "components/PageHeader/DirectoryPageHeader";
import DirectoryProfileCardList from "components/DirectoryProfileCard/DirectoryProfileCardList";

export default function DirectoryPage(props) {
  return (
    <>
      <DirectoryPageHeader />
      <div>27 providers in Ontario</div>
      <DirectoryProfileCardList />
    </>
  );
}
