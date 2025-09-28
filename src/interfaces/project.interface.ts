export interface Project {
    coverImagePath: string,
    title: string,
    techStack: string[],
    description: string,
    githubLink?: string,
}

export interface ProjectSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Project[];
}
