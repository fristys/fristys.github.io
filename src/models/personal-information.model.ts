import { AnchorLink } from './anchor-link.model';
import { EducationalInformation } from './educational-information.model';

export interface PersonalInformation {
  name: string;
  occupation: string;
  address: string;
  birthday: string;
  nationality: string;
  languages: string[];
  education: EducationalInformation[];
  email: string;
  website: AnchorLink;
  phone: string;
  linkedIn: string;
  interests: string[];
  achievements: string[];
}
