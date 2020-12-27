import { ExperienceInformation } from './experience-information.interface';
import { PersonalInformation } from './personal-information.model';

export interface CVMetadata {
  personal: PersonalInformation;
  experience: ExperienceInformation;
}
