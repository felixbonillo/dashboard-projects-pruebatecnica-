'use client'

import React from "react"
import { pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

//Registro dè componentes necesarios

ChartJS.register(ArcElement, Tooltip, Legend)

const ProjectStatusChart = ({ projects }) => {
    //Datos para la grafica
    const statusCounts = projects.reduce((acc, project) => {
        acc[project.status] = (acc[project.status] || 0)
    })
}