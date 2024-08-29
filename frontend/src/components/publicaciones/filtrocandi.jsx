import React from 'react';

const PostFilter = ({ onFilterChange }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-2 mb-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-2 lg:flex lg:space-x-2">
            <button 
                className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gradient-to-r from-[#e7148c] to-[#6e1d5c]"
                onClick={() => onFilterChange('All')}
            >
                Todos
            </button>
            <button 
                className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gradient-to-r from-[#e7148c] to-[#6e1d5c]"
                onClick={() => onFilterChange('Candidato 1')}
            >
                Candidato 1
            </button>
            <button 
                className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gradient-to-r from-[#e7148c] to-[#6e1d5c]"
                onClick={() => onFilterChange('Candidato 2')}
            >
                Candidato 2
            </button>
            <button 
                className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg hover:bg-gradient-to-r from-[#e7148c] to-[#6e1d5c]"
                onClick={() => onFilterChange('Candidato 3')}
            >
                Candidato 3
            </button>
        </div>
    </div>

    );
};

export default PostFilter;
