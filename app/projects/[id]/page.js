import projectsData from "../../../data/projects.json"; // Importar los datos de proyectos
import { notFound } from "next/navigation";
import Link from "next/link";

//Component server para cargar los proyectos
export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;

  // Buscar el proyecto por ID
  const project = projectsData.find((p) => p.id === id);

  if (!project) notFound();

  const getStatusColor = (status) => {
    switch (status) {
      case "En Progreso":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "Completado":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Pendiente":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 p-9">
      <div className="max-w-4xl mx-auto py-9 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col items-baseline">
        <div className="flex justify-between items-center m-6 border-b pb-4">
          <h1 className="text-4xl font-bold text-gray-900">{project.name}</h1>
          <span
            className={`px-4 py-1.5 rounded-full text-sm font-semibold ${getStatusColor(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>
        <p className=" lg:text-lg text-gray-700 mb-8 break-words">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-base text-gray-800 mb-8">
          <div>
            <p className="font-semibold text-gray-900 mb-1">Prioridad:</p>
            <p> {project.priority}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Presupuesto:</p>
            <p>${project.budget.toLocaleString()}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">
              {" "}
              Fecha de Inicio:
            </p>
            <p>{project.startDate}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Fecha de Fin:</p>
            <p>{project.endDate}</p>
          </div>
        </div>

        <div className="mb-8">
          <p className="font-semibold text-gray-900 mb-3">
            Miembros del equipo:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.teamMembers.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
        {/* Boton para volver */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base  font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            &larr; Volver al Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
