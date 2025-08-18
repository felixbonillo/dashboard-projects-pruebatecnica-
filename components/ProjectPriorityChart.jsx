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

    const data = {
        labels: Object.keys(priorityCounts),
        datasets: [
            {
                label: 'Numero de Proyectos',
                data: Object.values(priorityCounts),
                backgroundColor: [
                    'rgba(255 , 99, 132, 0.6)', //Rojo (Alta)
                    'rgba(255, 159, 64, 0.6)', //Naranja (Media)
                    'rgba(153, 102, 255, 0.6)', //Morado (Baja)
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14
                    }
                }
            },
            title: {
                display: false,
                text: 'Proyectos por Prioridad'
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (label) label += ': ';
                        if (context.parsed !== null) {
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