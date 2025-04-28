export default interface Education {
  name: string;
  role: string;
  startDate: string;
  endDate: string;

  // Fields used in templates
  degree?: string;
  school?: string;
  description?: string;
}
