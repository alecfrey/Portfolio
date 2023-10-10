import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { VideoPlayerComponent } from '../video-player/video-player.component';

interface Project {
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  skills?: string[];
  pictureURL?: string[];
  videoURL?: string;
  isExpanded: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [ MatCardModule, MatIconModule, MatButtonModule, NgIf, NgFor, VideoPlayerComponent ]
})

export class ProjectsComponent {

  /**
   * Expand project given the index.
   * Also closes any other expanded project.
   * 
   * @param index index of project to expand in array
   */
  public expandProject(index: number) {
    this.projects.forEach(project => {
      if (project != this.projects[index]) {
        project.isExpanded = false;
      }
    });
    this.projects[index].isExpanded = !this.projects[index].isExpanded;
  }

  /**
   * Checks whether project has extra information in expansion panel.
   * 
   * @param index index of project in array
   * @returns true if project can expand
   */
  public doesProjectExpand(index: number) {
    if (this.projects[index].details || this.projects[index].skills || this.projects[index].pictureURL || this.projects[index].videoURL) {
      return true;
    }
    return false;
  }

  /**
   * Array of all past projects.
   */
  projects: Project[] = [
    {
      title: 'Today Aim',
      subtitle: ' - Accomplish Something Today',
      description: 'Today Aim is an iOS app that was created to help highlight all the tasks people accomplish in their daily lives. This application was created as a solo project. Today Aim was available to download on the App Store previously, but it is no longer supported.',
      details: [
        'Set one aim to accomplish at the start of each day',
        'Record when the aim was accomplished',
        "Sort collection by aims that you've accomplished or favorited",
        'Calendar view allows for a bigger picture on the amount of aims created and accomplished'
      ],
      skills: [
        'SwiftUI',
        'Core Data Storage',
        'Gained experience of whole development cycle from the idea to the deployment'
      ],
      isExpanded: false,
      pictureURL: ['http://alecfrey.me/resume']
    },
    {
      title: 'Financio',
      subtitle: ' - Personal Finance Application',
      description: 'Financio is a personal finance application for android that I developed with two others, Jeffery Kasper & Parker Schmitz, during my sophomore year at Iowa State. Financio allows for a user to set a monthly budget and see how their expenses add up in comparison to their allotted budget.',
      details: [
        'Input all expenses to help recognize spending habits with visuals',
        'Targeted toward college students to help decrease spending',
        'User login with database',
        'Add and message friends in app'
      ],
      skills: [
        'Java in Android Studio',
        'Android Volley, Spring Boot, MySQL, Web Sockets, GitLab',
        'Gained experience working with a team while using version control'
      ],
      isExpanded: false
    },
    {
      title: 'Shifty',
      subtitle: ' - Java Game',
      description: 'Shifty is a short project I developed with two others, Tyler Atkinson & Nathan Cook, during our freshmen year at Iowa State. It is a simple java platformer game built using the libGDX game engine.',
      isExpanded: false
    },
    {
      title: 'Founded Esports Program',
      subtitle: ' - Newman Catholic High School',
      description: 'Student leader that created and organized the Esports program at Newman Catholic High. Acquired necessary components and assembled six computers to be used. Set up and ran the Twitter account and streamed matches to Twitch.',
      isExpanded: false
    }
  ]
}
