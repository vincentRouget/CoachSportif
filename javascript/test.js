function htmlTest(path) {
    (async () => {
        const validator = require('html-validator')
        const { readFileSync } = require('fs')
        const options = {
            format: 'text',
            data: (path, 'utf8'),
        }

        try {
            const result = await validator(options);
            console.log("RESULT FOR : " + path + " :");
            console.log(result);
        } catch (error) {
            console.error(error)
        }
        console.log("_________________________________________________________________");

    })()
}
htmlTest("./html/formulaire.html");
htmlTest("./html/accueil.html");
htmlTest("./html/disciplines.html");
htmlTest("./html/index.html");