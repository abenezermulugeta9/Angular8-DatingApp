import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ListsComponent } from "./lists/lists.component";
import { MemberListComponent } from "./member-list/member-list.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},

  // This is used to guard multiple routes in one path
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'lists', component: ListsComponent},
    ]
  },

  // This is how to guard single route
  //{path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},

  // This wildcard redirects user to the home page which is identified by ''.
  {path: '**', redirectTo: '', pathMatch: 'full'},
];