import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

private groups = [
  {
    title: 'Metal Heads',
    isPrivate: '',
    users: [],
    songs: []
  },
  {
    title: 'Rockalicious',
    isPrivate: '',
    users: [],
    songs: []
  },
  {
    title: 'Work Buddies',
    isPrivate: '',
    users: [],
    songs: []
  }
]

  constructor() { }

  getGroups() {
    return this.groups.slice();
  }

  getGroup(index: number) {
    return this.groups[index];
  }
}
