export class UsersMovie { // This model MUST look like the model class in eclipse

    // naming MUST be the EXACT same as Eclipse Model class.
    id: number
    progress: string
    movie_id: number
    user_id: string
  
  
    // No setters/getters or default constructor needed
    constructor(id: number, progress: string, movie_id: number, user_id: string) {
      this.id = id;
      this.progress = progress;
      this.movie_id = movie_id;
      this.user_id = user_id;
    }
  
  }
  