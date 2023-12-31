import { environment } from 'src/environments/environment.development';

const base_url = environment.base_url;
export class User {
  constructor(
    public name: string,
    public email: string,
    public password?: string,
    public img?: string,
    public google?: boolean,
    public role?: 'USER_ROLE' | 'ADMIN_ROLE',
    public uid?: string
  ) {}

  get imageURL() {
    if (!this.img) {
      return `${base_url}/upload/users/no-img.jpg`;
    } else if (this.img?.includes('https')) {
      return this.img;
    } else if (this.img) {
      return `${base_url}/upload/users/${this.img}`;
    } else {
      return `${base_url}/upload/users/no-img.jpg`;
    }
  }
}
