/**
 * Created by ramtinkermani on 8/3/16.
 */

import {Component} from "@angular/core";

@Component({
    // moduleId: module.id,
    selector: "app-component",
    templateUrl: "./app/components/app.component.html",
    styleUrls: ["./app/components/app.component.css"]
})
export class AppComponent{
    private movieList: string[] = [
        "Pulp Fiction",
        "Wolf of Wall Street",
        "Crash",
        "Social Network",
        "Die Hard"
    ]
}