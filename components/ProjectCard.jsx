"use client"; //Significa que es un componente del lado del navegador

import React from "react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  //Funcion para determinar el color de la etiqueta de estado
  const getStatusColor = (status) => {
    switch (status) {
      case "En Progreso":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "Completado":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Pendiente":
        return "bg-blue-100 text-blue-800 border border-gray-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col justify-between border border-gray-200 min-h-[220px]">
      <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
        {project.name}
      </h2>
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getStatusColor(project.status)}`}
        >
          {project.status === 'En Progreso' && '⏳ '}
          {project.status === 'Completado' && '✅ '}
          {project.status === 'Pendiente' && '📝 '}
          {project.status}
        </span>
        {/* Emojis */}
        <span className="text-xs text-gray-500 bg-gray-50 px-2.5 py-0.5 rounded-full border border-gray-200">
          {project.priority === 'Alta' && '🔥 '}
          {project.priority === 'Media' && '⚠️ '}
          {project.priority === 'Baja' && '⬇️ '}
          Prioridad: {project.priority}
        </span>
      </div>

      <div className="text-xs text-gray-700 space-y-1">
        <p>📅 Inicio: <span className="font-medium">{project.startDate}</span></p>
        <p>🏁 Fin: <span className="font-medium">{project.endDate}</span></p>
      </div>
      <Link href={`/projects/${project.id}`} className="mt-6 block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out text-sm">
        Ver Detalles
      </Link>
    </div>
  );
};

export default ProjectCard;
