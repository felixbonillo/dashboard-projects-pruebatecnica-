'use client'

import React from "react";
import ProjectStatusChart from "./ProjectStatusChart";
import ProjectBudgetChart from "./ProjectBudgetChart";
import ProjectPriorityChart from "./ProjectPriorityChart";

const DashboardCharts = ({ projects }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-4">
            <ProjectStatusChart projects={projects} />
            <ProjectBudgetChart projects={projects} />
            <ProjectPriorityChart projects={projects} />
        </div>
    )
}

export default DashboardCharts;