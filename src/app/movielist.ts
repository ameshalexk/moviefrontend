export class movielist { // This model MUST look like the model class in eclipse

  // naming MUST be the EXACT same as Eclipse Model class.
  id: number;
  description: string;
  genre: string
  name: string
  publishedYear: string


  // No setters/getters or default constructor needed
  constructor(id: number, description: string, genre: string, name: string, publishedYear: string) {
    this.id = id;
    this.description = description;
    this.genre = genre;
    this.name = name;
    this.publishedYear = publishedYear;
  }

}
