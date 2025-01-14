


interface portProjets {
  company: string;
  year: string;
  title: string;
  results: { title: string }[];
  link: string;
  image: string;
}

interface ProjectsSectionProps {
  portfolioProjects: portProjets[]; // Specify the type for portfolioProjects
}

export const ProjectsSection = ({
  portfolioProjects,
}: ProjectsSectionProps) => {
  return (
    <>
      <div>
        <h1 className="text-4xl">My Projects</h1>
        {portfolioProjects.map((project, index) => (
          <div key={index}>
            <h2>{project.company}</h2>
            <h3>{project.year}</h3>
            <h3>{project.title}</h3>
            <ul>
              {project.results.map((val, indx) => (
                <li key={indx}>{val.title}</li>
              ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <img src={project.image} alt={`${project.title} image`}/>
          </div>
        ))}
      </div>
    </>
  );
};
