'use client'

import React from "react"
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js"


//Registro dè componentes necesarios

ChartJS.register(ArcElement, Tooltip, Legend)

const ProjectStatusChart = ({ projects }) => {
    //Datos para la grafica
    const statusCounts = projects.reduce((acc, project) => {
        acc[project.status] = (acc[project.status] || 0) + 1;
        return acc;
    }, {})

    const data = {
        labels: Object.keys(statusCounts),
        datasets: [
            {
                data: Object.values(statusCounts), // ¡CORRECCIÓN CLAVE AQUÍ!
                backgroundColor: [
                    'rgba(255, 205, 86, 0.8)', // Color amarillo (En progreso) - SIN ESPACIOS
                    'rgba(75, 192, 192, 0.8)', // Color verde (Completado) - SIN ESPACIOS
                    'rgba(54, 162, 235, 0.8)', // Color azul (Pendiente) - SIN ESPACIOS
                    'rgba(201, 203, 207, 0.8)', // Gris (Otros) - SIN ESPACIOS
                ],
                borderColor: [
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(201, 203, 207, 1)'
                ],
                borderWidth: 1, // ¡CORRECCIÓN TIPOGRÁFICA AQUÍ!
            },
        ],
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom', //Leyenda inferior
                labels: {
                    font: {
                        size: 14 //Fuente leyenda tamaño
                    }
                }
            },
            tooltip: {
                callbacks: { // ¡CORRECCIÓN AQUÍ! Debe ser 'callbacks' en plural
                    label: function (context) {
                        let label = context.label || ''
                        if (label) label += ': '
                        if (context.parsed !== null) {
                            label += context.parsed;
                        }
                        return label + ' proyectos'
                    }
                }
            }
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center" >
            <h3 className="text-xl font-semibold text-gray-800 mb-4"> {/* ¡CORRECCIÓN AQUÍ! Coma eliminada */}
                Estado de Proyectos
            </h3>
            <div className="w-full max-w-sm">
                <Pie data={data} options={options} />
            </div>
        </div>
    )
}

export default ProjectStatusChart;