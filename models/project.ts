class Project {
  static map(arg0: (project: any) => JSX.Element): import("react").ReactNode {
    throw new Error('Method not implemented.');
  }

  description: string;
  title: string;
  list_image: string;

  constructor(title : string, description : string, list_image : string){
    this.title = title;
    this.description = description;
    this.list_image = list_image;
  }

}

export default Project