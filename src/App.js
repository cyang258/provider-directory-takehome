import './App.css';
import {fetchProviders, fetchProvider} from "./api";
import { Routes, Route } from 'react-router-dom';
import DirectoryPage from 'pages/ProviderDirectoryPage/DirectoryPage';
import ProfilePage from 'pages/ProviderProfilePage/ProfilePage'; 

const App = () => {
  fetchProviders().then(console.log)
  fetchProvider("1").then(console.log)
  return (
    <div className="bg-gray-50">
      <Routes>
        <Route path="/" element={<DirectoryPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
        <Route path="/directory/:id" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
