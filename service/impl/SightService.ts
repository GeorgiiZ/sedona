import sightPics from '@/api/sightPics';
import { ISightPic } from "../Sight"; 

class SightService {

    getSightPics(){
        return sightPics as ISightPic [];
    }
}
// Export a singleton instance in the global namespace
export const sightService = new SightService();