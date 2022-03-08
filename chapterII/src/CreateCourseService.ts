interface ICourse {
  name: string;
  duration?: number;
  educator: string;
}

class CreatecourseService {
  execute({ name, duration = 10, educator }: ICourse) {
    console.log(name, duration, educator);
  }
}

export default new CreatecourseService();
