import React, { useState } from 'react';

function AdminPanel() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a video file to upload.");
      return;
    }


    console.log("Uploading file:", file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-gray-700">Upload Video</h1>
        
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <label htmlFor="video" className="block text-sm font-medium text-gray-700 mb-2">
              Select Video
            </label>
            <input 
              type="file" 
              id="video" 
              accept="video/*" 
              onChange={handleFileChange} 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Upload Video
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminPanel;
