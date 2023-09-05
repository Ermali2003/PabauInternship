import { Company, Intern, Junior, Domain } from './types'; 

// Define sample interns
const interns: Intern[] = [
  { name: 'Ermal', age: 19, skills: ['React', 'HTML', 'JS'] },
  { name: 'Lindi', age: 23, skills: ['HTML', 'CSS', 'JavaScript'] },
];

// Define sample juniors
const juniors: Junior[] = [
  {
    name: 'Olti',
    age: 24,
    skills: ['React', 'Node.js', 'TypeScript'],
    date_of_promotion: new Date('2022-01-15'),
    domain: Domain.Web, 
  },
  {
    name: 'Uranik',
    age: 25,
    skills: ['Java', 'Python', 'SQL'],
    date_of_promotion: new Date('2022-02-20'),
    domain: Domain.Backend, 
  },
];

// Define a sample company
const myCompany: Company = {
  Interns: interns,
  Juniors: juniors,
  Country: 'Kosova',
};
