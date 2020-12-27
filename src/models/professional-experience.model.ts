import { AnchorLink } from './anchor-link.model';

export interface ProfessionalExperience extends AnchorLink {
  position: string;
  period?: string;
  description: string;
}
