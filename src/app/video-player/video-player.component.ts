import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgStreamingModule } from '@videogular/ngx-videogular/streaming';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss'],
  standalone: true,
  imports: [ VgCoreModule, VgControlsModule, VgOverlayPlayModule, VgBufferingModule, VgStreamingModule ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class VideoPlayerComponent {
  
}
