"use client";;
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/utils/constant";
import Header from "@/components/Header";
import Main from "./main";

const ProjectView = ({
  params
}) => {
  const { projectId } = params;
  const [project, setProject] = useState();
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("freelancingPlatformAuthToken");

    if (projectId) {
      axios
        .get(`${apiUrl}/api/projects/getProjectById`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { projectId },
        })
        .then((res) => {
          setProject(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      axios
        .get(`${apiUrl}/api/projects/proposals`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: { projectId },
        })
        .then((res) => {
          setProposals(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [projectId]);

  return (
    <main className="m-auto min-h-screen bg-gray100 overflow-hidden">
      <Header />
      <div className="flex flex-col py-4 px-10">
        <Main project={project} proposals={proposals} />
      </div>
    </main>
  );
};

export default ProjectView;
