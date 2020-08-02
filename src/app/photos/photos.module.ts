import { NgModule } from "@angular/core";
import { PhotoModule } from "./photo/photo.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { CardModule } from "../shared/card/card.module";



@NgModule({
    declarations: [

    ],
    imports: [
        PhotoModule,
        PhotoListModule,
        PhotoFormModule,
        CardModule
    ]
})

export class PhotosModule {}