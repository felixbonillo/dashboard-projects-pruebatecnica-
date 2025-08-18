"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import FilterSearch from "@/components/FilterSearch";
import useProjectFiltering from "@/hooks/useProjectFiltering";
import DashboardCharts from "@/components/DashboardCharts";

export default function Home() {
  //Hook para filtrado de proyectos
  const {
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    filteredProjects,
  } = useProjectFiltering();

  //Estado para manejar la pestana activa
  const [activeTab, setActiveTab] = React.useState("General");

  //Funcion para manejar el cambio en la barra de busqueda
  const handleSearchChange = (value) => setSearchTerm(value);

  //Funcion para manejar el cambio del filtro de estado
  const handleStatusFilterChanged = (value) => setStatusFilter(value);

  const getActiveTabClass = (tabName) => {
    return activeTab === tabName
      ? "bg-gray-200 text-gray-900 font-semibold"
      : "text-gray-600 hover:bg-gray-100";
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto py-6">
        {/* Centrado */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">
          Dashboard de Proyectos <br />{" "}
          <h3 className="text-2xl">(Prueba Técnica)</h3>
        </h1>

        {/* Navgeacion */}

        <nav className="mb-8">
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm bg-white border border-gray-200">
            <li className="flex-1">
              <button
                onClick={() => setActiveTab("General")}
                className={`w-full inline-block p-4 rounded-s-lg focus:outline-none transition-colors duration-200 ${getActiveTabClass(
                  "General"
                )}`}
              >
                General
              </button>
            </li>
            <li className="flex-1">
              <button
                onClick={() => setActiveTab("Proyectos")}
                className={`w-full inline-block p-4 rounded-none focus:outline-none transition-colors duration-200 ${getActiveTabClass(
                  "Proyectos"
                )}`}
              >
                Proyectos
              </button>
            </li>
            <li className="flex-1">
              <button
                onClick={() => setActiveTab("Análisis")}
                className={`w-full inline-block p-4 rounded-e-lg focus:outline-none transition-colors duration-200 ${getActiveTabClass(
                  "Análisis"
                )}`}
              >
                Análisis
              </button>
            </li>
          </ul>
        </nav>

        {activeTab === "General" && (
          <div className="space-y-8 transition-opacity duration-500 ease-in-out">
            <FilterSearch
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              statusFilter={statusFilter}
              onStatusFilterChange={handleStatusFilterChanged}
            />
            <DashboardCharts projects={filteredProjects} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p className="text-center text-gray-600 col-span-full">
                  No se encontraron proyectos que coincidan con tu búsqueda.
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === "Proyectos" && (
          <div className="space-y-8 transition-opacity duration-500 ease-in-out">
            <FilterSearch
              searchTerm={searchTerm}
              onSearchChange={handleSearchChange}
              statusFilter={statusFilter}
              onStatusFilterChange={handleStatusFilterChanged}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              ) : (
                <p className="text-center text-gray-600 col-span-full">
                  No se encontraron proyectos que coincidan con tu búsqueda.
                </p>
              )}
            </div>
          </div>
        )}

        {activeTab === "Análisis" && (
          <div className="space-y-8 transition-opacity duration-500 ease-in-out">
            <DashboardCharts projects={filteredProjects} />
          </div>
        )}
      </div>
    </main>
  );
}
