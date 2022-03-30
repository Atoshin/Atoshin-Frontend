const {exec} = require('child_process');


exec("whoami", (error, stdout, stderr) => {
    if (error){
        console.log('error: ', error)
        return error
    }
    if (stderr){
        console.log('stderr: ', stderr)
        return stderr
    }
    console.log('stdout: ', stdout)
    return stdout;
})