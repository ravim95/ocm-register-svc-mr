
import { IRegister } from './model';
import registration from './schema';

export default class RegisterService {
    
    public createRegister(register_params: IRegister, callback: any) {
        const _session = new registration(register_params);
        _session.save(callback);
    }
}