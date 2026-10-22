export interface project {
  id?: string;
  title?: string;
  tags?: string[];
  status?: "active" | "archive";
  links?: {
    visit: string;
    github?: string[];
    apalagi?: string[];
    ini_object?: {
      afosefiaf: string[];
    }
  };
}

export const inibeda: project[] = [
  {
    id: "1",
    links: {visit:"", ['']}
  }
]
