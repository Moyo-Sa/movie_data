import React from "react";

const Trial = () => {
  const data = [
    { decade: "1980s", top: "Drama", second: "Comedy", bottom: "Western" },
    { decade: "1990s", top: "Drama", second: "Comedy", bottom: "Western" },
    { decade: "2000s", top: "Drama", second: "Comedy", bottom: "Western" },
    { decade: "2010s", top: "Drama", second: "Action", bottom: "Western" },
    { decade: "2010s", top: "Drama", second: "Thriller", bottom: "Western" },
  ];

  return (
    <div className="overflow-x-auto py-8">
      <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left">Decade</th>
            <th className="px-6 py-3 text-left">Top Genre</th>
            <th className="px-6 py-3 text-left">Second Top Genre</th>
            <th className="px-6 py-3 text-left">Bottom Genre</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-t">{movie.decade}</td>
              <td className="px-6 py-4 border-t">{movie.top}</td>
              <td className="px-6 py-4 border-t">{movie.second}</td>
              <td className="px-6 py-4 border-t">{movie.bottom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Trial;
