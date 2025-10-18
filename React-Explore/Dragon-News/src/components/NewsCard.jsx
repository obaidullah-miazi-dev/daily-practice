import React, { useState } from 'react';
import { FaStar, FaEye, FaShareAlt } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100;

    return (
        <div className="card w-full bg-base-100 shadow-xl border border-gray-200 rounded-lg mb-8">
            <div className="card-body p-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                        <img
                            src={news.author.img}
                            alt={news.author.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-semibold">{news.author.name}</p>
                            <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                        </div>
                    </div>
                    <button className="btn btn-ghost btn-xs"><FaShareAlt /></button>
                </div>
                <h2 className="card-title text-xl font-bold mb-2">{news.title}</h2>
                <figure className="mb-2">
                    <img src={news.thumbnail_url} alt={news.title} className="w-full h-full object-cover rounded-lg" />
                </figure>
                <p className="text-sm text-gray-600 mb-2">
                    {isExpanded ? news.details : `${news.details.substring(0, maxLength)}...`}
                    {!isExpanded && news.details.length > maxLength && (
                        <span
                            className="text-blue-500 cursor-pointer ml-1"
                            onClick={() => setIsExpanded(true)}
                        >
                            Read More
                        </span>
                    )}
                    {isExpanded && (
                        <span
                            className="text-blue-500 cursor-pointer ml-1"
                            onClick={() => setIsExpanded(false)}
                        >
                            Read Less
                        </span>
                    )}
                </p>
                <div className="flex flex-wrap gap-1">
                    {news.tags.map((tag, index) => (
                        <span key={index} className="badge badge-primary badge-sm">{tag}</span>
                    ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <div className="flex items-center space-x-1">
                        <FaStar className="text-yellow-400" />
                        <span>{news.rating.number}</span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{news.rating.badge}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaEye />
                        <span>{news.total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;