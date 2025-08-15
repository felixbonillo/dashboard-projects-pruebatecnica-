import ProjectCard from "@/components/ProjectCard";
import ProjectsData from "../data/projects.json"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto py-8">
        {/* Centrado */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-10 text-center">
          Dashboard de Proyectos
        </h1>
        {/* Aqui filtro y busqueda */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </div>
    </main>
  );
}
