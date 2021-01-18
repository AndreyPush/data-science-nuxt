import {sign as jwtSigner} from 'jsonwebtoken';

export default{
    debounce(f, ms){
        let isCooldown = false;

        return function() {
            if (isCooldown) return;

            f.apply(this, arguments);

            isCooldown = true;

            setTimeout(() => isCooldown = false, ms);
        };
    },
    parseTimeFromSeconds(time){
        let sec, min, hours;

        if(time>=0&&time<60){
            time<10
                ? sec = `0${time}`
                : sec = time;
            min = '00'
        }
        else if(time<3600&&time>=60){

            let haveMins = parseInt(time/60);
            let haveSecs = time - (haveMins*60);

            min = haveMins<10?`0${haveMins}`:haveMins;
            sec = haveSecs<10?`0${haveSecs}`:haveSecs;

        }
        else{

            let haveHours = parseInt(time/3600);
            let haveMins = parseInt(time - (haveHours*3600) );
            let haveSecs = time - (haveHours*3600) - (haveMins*60);

            hours = haveHours<10?`0${haveHours}`:haveHours;
            min = haveMins<10?`0${haveMins}`:haveMins;
            sec = haveSecs<10?`0${haveSecs}`:haveSecs;

        }

        return !!hours
            ?`${hours}:${min}:${sec}`
            :`${min}:${sec}`;

    },
    getRandomFromTo(min, max){
        return Math.min( max, Math.floor(Math.random() * (max - min + 1) + min) );
    },
    jwtSign: ({payload, key}) => jwtSigner(payload, key, { algorithm: 'HS256'}),
}
