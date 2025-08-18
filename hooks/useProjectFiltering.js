"use client";
import { useState, useMemo } from "react";
import projectData from "../data/projects.json";

const useProjectFiltering = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("");

  //Logica de filtrado
    const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
        const matchesSearchTerm =
        project.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        project.description
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());

        const matchesStatus =
        statusFilter === "" || project.status === statusFilter;
        return matchesSearchTerm && matchesStatus;
    });
  }, [searchTerm, statusFilter]); // Dependencias para recalcular)

    return {
        searchTerm,
        setSearchTerm,
        statusFilter,
        setStatusFilter,
        filteredProjects
    }
};

export default useProjectFiltering;
