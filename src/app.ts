// tslint:disable-next-line: file-header
import { hello } from "./hello";

// tslint:disable-next-line: no-unnecessary-class
class App {
    /** Entry point of our app */
    public static start() {
        // tslint:disable-next-line: no-console
        console.log(hello("world"));
    }
}

App.start();
