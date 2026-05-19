import { clinicians } from '../data/clinicians';
import type { MatchResult } from '../types';
import { getRandomDistance } from '../utils/distance';


export const findOptimalClinician = (
  _patientAddress: string,
  includeLab: boolean,
): MatchResult => {
  let bestClinician = '';
  let shortestDistance = Infinity;

  clinicians.forEach((clinician) => {
    let totalDistance: number;

    if (includeLab) {
      const homeToPatient = getRandomDistance();
      const patientToLab = getRandomDistance();
      const labToHome = getRandomDistance();
      totalDistance = homeToPatient + patientToLab + labToHome;
    } else {
      const homeToPatient = getRandomDistance();
      const patientToHome = getRandomDistance();
      totalDistance = homeToPatient + patientToHome;
    }

    if (totalDistance < shortestDistance) {
      shortestDistance = totalDistance;
      bestClinician = clinician.name;
    }
  });

  return {
    clinicianName: bestClinician,
    totalDistance: shortestDistance,
    routeType: includeLab ? 'Lab Visit' : 'Standard Visit',
  };
};