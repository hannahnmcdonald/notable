import { Injectable } from '@nestjs/common';
import { Note } from '../models/note.model'

@Injectable()
export class NoteService {
  private notes: Note[] = [
    // hard code initial notes, will actually have real notes later
    new Note(1, 'Learn NestJS', 'Explore the basics of NestJS', 'Hannah McDonald'),
    new Note(2, 'Develop MVC App', 'Build an application using the MVC pattern', 'Hannah McDonald')
  ];

  findAll(): Note[] {
    return this.notes;
  }
}