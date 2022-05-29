export let config = {user:"" };
// 📁 another.js
import {sayHi} from './config';

 export  function tttest ()
    {
        config.user = "ppp";
        config.user = "ppp111";
            
        sayHi();
    }
