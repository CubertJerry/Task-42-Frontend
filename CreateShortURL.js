import React, { useState } from 'react';
import axios from 'axios';

function CreateShortURL() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/url/shorten', { originalUrl });
      setShortUrl(res.data.shortUrl);
      alert('URL shortened successfully');
    } catch (err) {
      alert('Failed to shorten URL');
    }
  };

  return (
    <div className="container">
      <h3>Create Short URL</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Original URL</label>
          <input type="text" className="form-control" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Shorten URL</button>
      </form>
      {shortUrl && (
        <div className="mt-3">
          <h4>Short URL</h4>
          <a href={`http://localhost:5000/${shortUrl}`} target="_blank" rel="noopener noreferrer">
            http://localhost:5000/{shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default CreateShortURL;