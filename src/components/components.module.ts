import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { ElementsHorarioComponent } from './elements-horario/elements-horario';
@NgModule({
	declarations: [MenuComponent,
    ElementsHorarioComponent],
	imports: [],
	exports: [MenuComponent,
    ElementsHorarioComponent]
})
export class ComponentsModule {}
