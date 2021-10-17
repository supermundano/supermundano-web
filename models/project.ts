class Project {

  description: string;
  title: string;
  list_image: string;
  list_image_alt: string;
  slug: string;

  constructor(title : string, description : string, list_image : string, list_image_alt : string, slug: string){
    this.title = title;
    this.description = description;
    this.list_image = list_image;
    this.list_image_alt = list_image_alt;
    this.slug = slug;
  }

}

export default Project
