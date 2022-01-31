import { User } from '../interfaces/user.interface';
import { EventEmitter } from "@angular/core";

export class Emitters  {
  static authEmitter = new EventEmitter<User | null>()
}
