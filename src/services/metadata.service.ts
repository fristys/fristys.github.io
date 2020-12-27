import { CVMetadata } from '@/models/metadata.model';
import { ExperienceInformation } from '@/models/experience-information.interface';
import { PersonalInformation } from '@/models/personal-information.model';

import metadata from '@/metadata.json';

class MetadataService {
  private data: CVMetadata = metadata;

  get personal(): PersonalInformation {
    return this.data.personal;
  }

  get experience(): ExperienceInformation {
    return this.data.experience;
  }
}

export const metadataService = new MetadataService();
