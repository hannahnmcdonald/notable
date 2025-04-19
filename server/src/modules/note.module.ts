import { Module } from '@nestjs/common';
import { NoteController } from '../controllers/note.controller'
import { NoteService } from '../services/note.service'

// Module acts as a container for the controller and service
@Module({
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}