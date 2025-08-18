'use client'

import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProjectPriorityChart = ({ projects }) => {
    // Datos para la grafica
    const priorityCounts = projects.reduce((acc, project) => {
        acc[project.priority] = (acc[project.priority] || 0) + 1;
        return acc;
    }, {});

    //Colores grafica
    const priorityColors = {
        'Alta': 'rgba(255, 99, 132, 0.6)',   // Rojo
        'Media': 'rgba(255, 159, 64, 0.6)', // Naranja
        'Baja': 'rgba(153, 102, 255, 0.6)', // Morado
    }

    // Generar los colores de fondo basados en las prioridades detectadas
    const backgroundColors = Object.keys(priorityCounts).map(priority => {
        return priorityColors[priority] || 'rgba(128, 128, 128, 0.6)'; // Color por defecto si la prioridad no está mapeada
    });

    const data = {
        labels: Object.keys(priorityCounts),
        datasets: [
            {
                label: 'Prioridad de Proyectos',
                data: Object.values(priorityCounts),
                backgroundColor: backgroundColors, // <-- Usa los colores generados dinámicamente
                borderColor: backgroundColors.map(color => color.replace('0.6', '1')),
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: false,
                text: 'Proyectos por Prioridad'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) label += ': ';
                        if (context.parsed && typeof context.parsed.y === 'number') { // Verifica que existe y es un número
                            label += context.parsed.y; // ✅ Accede a la propiedad 'y'
                        } else if (context.parsed !== null) {

                            label += context.parsed;
                        }
                        return label + ' proyectos';
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Numero de Proyectos',
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Prioridad',
                    font: {
                        size: 14
                    }
                }
            }
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col items-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 ">Proyectos por Prioridad</h3>
            <div className="w-full max-w-lg">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default ProjectPriorityChart;