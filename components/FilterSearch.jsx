'use client'

import React from "react"

const FilterSearch = ({ searchTerm, onSearchChange, statusFilter, onStatusFilterChange }) => {
    //Debugg (Error en el value)
    //  console.log( statusFilter, 'Tipo:', typeof statusFilter);
    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm border border-gray-300 text-gray-400">
            {/* Barra de busqueda */}
            <input 
            type="text"
            placeholder="Buscar proyectos..."
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            />

            {/* Filtro por estado */}
            <select className="p-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-gray-800"
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            >
                <option value="">Todos los Estados</option>
                <option value="En Progreso">En Progreso</option>
                <option value="Completado">Completado</option>
                <option value="Pendiente">Pendiente</option>
            </select>
        </div>
    )
}

export default FilterSearch;