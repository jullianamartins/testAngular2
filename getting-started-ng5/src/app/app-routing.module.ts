import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';

const routes: Routes = [ 
		{ path: 'card', component: CardComponent },
		{ path: 'card-list', component: CardListComponent }
	];
	
@NgModule({

	imports: [ RouterModule.forRoot(routes) ],

	exports: [ RouterModule ],

})

export class AppRoutingModule { }
