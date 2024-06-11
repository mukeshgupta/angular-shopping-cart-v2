import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchTermSubject = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTermSubject.asObservable().pipe(
    debounceTime(300), // Wait 300ms after each keystroke before emitting
    distinctUntilChanged() // Only emit if the search term actually changes
  );

  setSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}
