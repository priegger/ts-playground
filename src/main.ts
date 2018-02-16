import * as _ from "lodash"

interface IStartup {
    main(): number
}

class Startup implements IStartup {
    public main(): number {
        // tslint:disable-next-line:no-console
        console.log(_.padStart("Hello World", 20, " "))
        return 0
    }
}

new Startup().main()
