import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(contacts: any[], searchText: string): any[] {
    if (!contacts) return [];
    if (!searchText) return contacts;
    searchText = searchText.toLowerCase();
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().startsWith(searchText);
    });
  }
}
