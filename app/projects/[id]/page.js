import projectsData from "../data/projects.json";
import { notFound } from "next/navigation";
import Link from "next/link";

//Component server para cargar los proyectos
export default function ProjectDetailsPage  ({ params }) {
    const { id } = params; 
    
    // Buscar el proyecto por ID
    const project = projectsData.find(p => p.id === parseInt(id))

    if (!project) {
        notFound();
    }

    const getStatusColor = status => {
        switch ( status ) {
            case 'En Progreso':
                return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
            case 'Completado':
                return 'bg-green-100 text-green-800 border border-green-200';
            case 'Pendiente':
                return 'bg-blue-100 text-blue-800 border border-blue-200';
            default:
                return 'bg-gray-100 text-gray-800 border border-gray-200';
        }
    }

    return (
        <main className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto py-8 bg-white rounded-lg shadow-sm border border-gray-200"></div
            
        </main>
    )
}