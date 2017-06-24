import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';

// Imports service
import { PeopleService } from './../services/people.service';
import { TmdbImgService } from './../services/tmdb-img.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people = [];
  person = [];
  public show = false;
  title = "Full Cast & Crew";
  // Initializes
  constructor(private peopleService: PeopleService, private router:Router, private tmdbImgService:TmdbImgService ) { }
  
  
  ngOnInit() {
    this.peopleService.getPopularPeople().subscribe(response => {
			this.people = response;
			this.show = true;
		});
  }
  
  onSelect(person: Object[]){
    this.show = false;
    console.log(person);
    this.person = person;
  }
  /**
	* This method return the image's url of TMDB's images service
	* @param {src} Value to cast a tmdb url
	* @return String with url set to tmdb format
	**/
	getImgUrl(src: string): string {
		return this.tmdbImgService.getImgUrl(src);
	}
	
	

// 	/**
// 	* Get movies names by movies object list 
// 	* @param {movies} movies object list
// 	* @return list of strings with movie names
// 	**/
// 	getMoviesNames(movies: Object[]): string{
// 		let moviesList = this.movieHelper.getMoviesNames(movies).join().slice(0,31);
// 		return `${moviesList}...`;
// 	}

// 	/**
// 	* Using a double number, cast to 2 digits percent
// 	* @param {value} double to be cast 
// 	* @return two digits percent
// 	**/
// 	castFloatPercent(value: number): string{
// 		return this.peopleHelper.castFloatPercet(value);
// 	}

}