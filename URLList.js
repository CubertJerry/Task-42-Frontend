import React, { useEffect, useState } from 'react';
import axios from 'axios';

function URLList() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const res = await axios.get('/api/url/all');
        setUrls(res.data);
      } catch (err) {
        alert('Failed to fetch URLs');
      }
    };
    fetchUrls();
  }, []);

  return (
    <div className="container mt-5">
      <h3>All URLs</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map(url => (
            <tr key={url._id}>
              <td>{url.originalUrl}</td>
              <td>
                <a href={`http://localhost:5000/${url.shortUrl}`} target="_blank" rel="noopener noreferrer">
                  {url.shortUrl}
                </a>
              </td>
              <td>{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default URLList;