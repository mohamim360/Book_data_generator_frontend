import React, { useState } from 'react';

const App = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [params, setParams] = useState({
    language: 'English (US)',
    seed: '58933423',
    likes: 0,
    reviews: 4.7,
  });

  const books = [
    {
      id: 48,
      isbn: '978-3-16-148410-0',
      title: 'in Rainbows',
      author: 'Alex Ciare',
      publisher: 'Oisansoft LLC, 2023',
      reviews: [
        { text: 'We need to navigate the redundant ASCII alarm!', author: 'Jack Smith, Hyatt Inc' },
        { text: 'You can’t navigate the port without parsing the virtual AI card!', author: 'Mary J. Lapidus, Hyatt Inc' }
      ]
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">Bookstore Dashboard</h1>
      </header>
      
      {/* Filters Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <select
          className="rounded border p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={params.language}
          onChange={e => setParams(p => ({ ...p, language: e.target.value }))}
        >
          <option>English (US)</option>
          <option>German (Germany)</option>
          <option>French (France)</option>
        </select>

        <div className="flex gap-2">
          <input
            type="number"
            className="rounded border p-2 w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={params.seed}
            onChange={e => setParams(p => ({ ...p, seed: e.target.value }))}
          />
          <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 transition">
            🔀
          </button>
        </div>

        <input
          type="range"
          className="w-full"
          min="0"
          max="10"
          step="0.1"
          value={params.likes}
          onChange={e => setParams(p => ({ ...p, likes: e.target.value }))}
        />

        <input
          type="number"
          className="rounded border p-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          step="0.1"
          value={params.reviews}
          onChange={e => setParams(p => ({ ...p, reviews: e.target.value }))}
        />
      </div>

      {/* Table Section */}
      <div className="border rounded-lg overflow-hidden shadow-md bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left w-12">#</th>
              <th className="p-3 text-left">ISBN</th>
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Author(s)</th>
              <th className="p-3 text-left">Publisher</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <React.Fragment key={book.id}>
                <tr 
                  className="border-t hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                >
                  <td className="p-3 font-medium">{book.id}</td>
                  <td className="p-3 font-mono text-blue-600">{book.isbn}</td>
                  <td className="p-3 font-semibold">{book.title}</td>
                  <td className="p-3">{book.author}</td>
                  <td className="p-3 text-gray-600">{book.publisher}</td>
                </tr>
                
                {expandedRow === index && (
                  <tr className="bg-gray-50">
                    <td colSpan={5} className="p-6 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                          {book.reviews.map((review, i) => (
                            <div key={i} className="border-l-4 border-blue-200 pl-4">
                              <p className="text-gray-600 italic">"{review.text}"</p>
                              <p className="text-sm text-gray-500 mt-1">— {review.author}</p>
                            </div>
                          ))}
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-center">
                          <div className="w-full aspect-[3/4] bg-gray-300 rounded mb-4"></div>
                          <p className="text-sm text-gray-600 mb-1">Hardcover version available</p>
                          <p className="text-sm text-gray-600">Publisher: {book.publisher}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
