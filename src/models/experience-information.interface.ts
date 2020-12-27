import { ProfessionalExperience } from './professional-experience.model';
import { Skills } from './skill.model';

export interface ExperienceInformation {
  skills: Skills;
  professional: ProfessionalExperience[];
  freelance: ProfessionalExperience[];
}
