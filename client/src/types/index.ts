export interface StatItem {
  value: number;
  label: string;
  sublabel: string;
  suffix?: string;
  prefix?: string;
  color: string;
}

export interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
}

// Base interfaces for GraphQL types
export interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IProject {
  id: string;
  name: string;
  description?: string;
  status: ProjectStatus;
  client?: IClient;
  clientId?: string;
}

// Enum for project status
export enum ProjectStatus {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Completed = 'Completed'
}

// Input types for mutations
export interface IClientInput {
  name: string;
  email: string;
  phone: string;
}

export interface IProjectInput {
  name: string;
  description?: string;
  status: ProjectStatus;
  clientId: string;
}

// Query response types
export interface IClientsQueryResponse {
  clients: IClient[];
}

export interface IClientQueryResponse {
  client: IClient;
}

export interface IProjectsQueryResponse {
  projects: IProject[];
}

export interface IProjectQueryResponse {
  project: IProject;
}

// Mutation response types
export interface IAddClientMutationResponse {
  addClient: IClient;
}

export interface IUpdateClientMutationResponse {
  updateClient: IClient;
}

export interface IDeleteClientMutationResponse {
  deleteClient: IClient;
}

export interface IAddProjectMutationResponse {
  addProject: IProject;
}

export interface IUpdateProjectMutationResponse {
  updateProject: IProject;
}

export interface IDeleteProjectMutationResponse {
  deleteProject: IProject;
}