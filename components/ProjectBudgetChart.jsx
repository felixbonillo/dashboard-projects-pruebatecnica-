"use client";

import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

//Componentes necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ProjectBudgetChart = ({ projects }) => {
  // Datos para la grafica
  const budgetByStatus = projects.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + project.budget;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(budgetByStatus),
    datasets: [
      {
        label: "Presupuesto Total",
        data: Object.values(budgetByStatus),
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderWith: 1,
      },
    ],
  };

  const option = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: false,
        text: "Presupuesto por Estado de Proyecto",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";
            if (label) label += ": ";
            if (context.parsed !== null) {
              label += `$${context.parsed.toLocaleString()}`;
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        begindAtZero: true,
        text: "Presupuesto ($)",
        font: {
          size: 14,
        },
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`; //Formato de moneda
          },
        },
      },

      x: {
        title: {
          display: true,
          text: "Estado del Proyecto",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Presupuesto por Estado de Proyecto
      </h3>
      <div className="w-full max-w-md">
        <Bar data={data} options={option} />
      </div>
    </div>
  );
};

export default ProjectBudgetChart;
