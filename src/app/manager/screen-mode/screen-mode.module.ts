import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScreenModeComponent } from './screen-mode.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

export const screenRoutes: Routes = [
  {
    path: '',
    component: ScreenModeComponent,
  },
];

export const screenModuleDeclarations = [
  ScreenModeComponent,
  WordCloudComponent,
  StatisticsComponent,
  ChatRoomComponent,
];

@NgModule({
  declarations: screenModuleDeclarations,
  imports: [CommonModule, RouterModule.forChild(screenRoutes)],
})
export class ScreenModeModule {}
