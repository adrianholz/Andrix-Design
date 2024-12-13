declare global {
  type Service = {
    name: string;
    file: string;
    description: string;
    process: string;
    position: string;
  };
  type Tags = {
    search: string;
    scale: string[];
    category: string[];
    technology: string[];
  };
}

export {};
