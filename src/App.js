import { Routes, Route } from 'react-router-dom';
import DirectoryPage from 'pages/ProviderDirectoryPage/DirectoryPage';
import ProfilePage from 'pages/ProviderProfilePage/ProfilePage'; 

const App = () => {
  return (
    <div className="bg-neutral-2 min-h-screen ">
      <Routes>
        <Route path="/" element={<DirectoryPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/directory/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
