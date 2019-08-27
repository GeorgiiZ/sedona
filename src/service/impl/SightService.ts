import sightPics from '@/api/sightPics';
import { Sight } from "../models/Sight"; 

class SightService {

    getSightPics(){
        return sightPics as Sight [];
    }
}
// Export a singleton instance in the global namespace
export const sightService = new SightService();