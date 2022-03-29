const {exec} = require('child_process');


exec("whoami", (error, stdout, stderr) => {
    if (error){
        console.log('error: ', error)
        return;
    }
    if (stderr){
        console.log('stderr: ', error)
        return;
    }
    console.log('stdout: ', stdout)
})