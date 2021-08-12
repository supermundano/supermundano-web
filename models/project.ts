class Project {

  description: string;
  title: string;
  list_image: string;
  slug: string;

  constructor(title : string, description : string, list_image : string, slug: string){
    this.title = title;
    this.description = description;
    this.list_image = list_image;
    this.slug = slug;
  }

}

export default Project