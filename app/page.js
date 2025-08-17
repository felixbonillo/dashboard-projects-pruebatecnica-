'use client'

import React, {useState,useMemo} from "react";
import ProjectCard from "@/components/ProjectCard";
import FilterSearch from "@/components/FilterSearch";
import ProjectsData from "../data/projects.json"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  //Logica de filtrado
  const filteredProjects = useMemo(() => {
    return ProjectsData.filter((project) => {
      const matchesSearchTerm = 
        project.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        project.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())

        const matchesStatus = statusFilter === '' || project.status ===statusFilter
        return matchesSearchTerm && matchesStatus
    })
  }, [searchTerm, statusFilter]) // Dependencias para recalcular)

  //Funcion para manejar el cambio en la barra de busqueda
  const handleSearchChange = value => setSearchTerm(value)

  //Funcion para manejar el cambio del filtro de estado
  const handleStatusFilterChanged = value => setStatusFilter(value)



  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Centrado */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">
          Dashboard de Proyectos
        </h1>
        {/* Aqui filtro y busqueda */}
        <FilterSearch
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          statusFilter={statusFilter}
          onStatusFilterChange={handleStatusFilterChanged}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard
                key={project.id} project={project}
              />
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No se encontraron proyectos que coincidan con tu busqueda
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
