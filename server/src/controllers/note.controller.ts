import { Controller, Get, Render } from '@nestjs/common';
import { NoteService } from '../services/note.service'

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  // http get, fetches notes from note service
  @Get()
  @Render('index')
  findAll() {
    const notes = this.noteService.findAll();
    return { title: 'Notes:', notes };
  }
}