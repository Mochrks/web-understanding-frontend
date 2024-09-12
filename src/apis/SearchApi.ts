export interface SearchItem {
  id: number;
  name: string;
  description: string;
}

const dummyData: SearchItem[] = [
  { id: 1, name: "React", description: "A JavaScript library for building user interfaces" },
  { id: 2, name: "TypeScript", description: "A typed superset of JavaScript" },
  { id: 3, name: "Vite", description: "Next Generation Frontend Tooling" },
  { id: 4, name: "shadcn/ui", description: "Beautifully designed components built with Radix UI and Tailwind CSS" },
  { id: 5, name: "Tailwind CSS", description: "A utility-first CSS framework" },
  { id: 6, name: "Next.js", description: "The React Framework for Production" },
  { id: 7, name: "GraphQL", description: "A query language for APIs" },
  { id: 8, name: "Node.js", description: "JavaScript runtime built on Chrome's V8 JavaScript engine" },
  { id: 9, name: "Express", description: "Fast, unopinionated, minimalist web framework for Node.js" },
  { id: 10, name: "MongoDB", description: "The application data platform" },
  { id: 11, name: "PostgreSQL", description: "The world's most advanced open source database" },
  { id: 12, name: "Docker", description: "Empowering App Development for Developers" },
  { id: 13, name: "Kubernetes", description: "Production-Grade Container Orchestration" },
  { id: 14, name: "AWS", description: "Amazon Web Services, on-demand cloud computing platforms" },
  { id: 15, name: "Azure", description: "Microsoft's cloud computing platform" },
  { id: 16, name: "Google Cloud", description: "Suite of cloud computing services" },
  { id: 17, name: "Redux", description: "A Predictable State Container for JS Apps" },
  { id: 18, name: "Vue.js", description: "The Progressive JavaScript Framework" },
  { id: 19, name: "Angular", description: "Platform for building mobile and desktop web applications" },
  { id: 20, name: "Svelte", description: "Cybernetically enhanced web apps" },
];

export const searchApi = {
  search: async (query: string): Promise<SearchItem[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return dummyData.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};