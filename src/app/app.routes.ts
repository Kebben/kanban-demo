import { HomeComponent } from "./home/home.component";
import { BoardComponent } from "./board/board.component";

export const ROUTES = [
    {path: '', component: HomeComponent },
    {path: 'board', component: BoardComponent }
];