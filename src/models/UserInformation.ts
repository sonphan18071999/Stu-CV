export default interface UserInformation {
  avatar: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  website?: string;
  location?: string;

  // Additional fields needed for templates
  fullName?: string;
  position?: string;
  address?: string;
  summary?: string;
}
