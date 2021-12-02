import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

 
  
  searchedText = ""
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((rsp) => {
      var name = rsp["name"];
      if (name !== undefined) this.searchedText = name;
      else this.searchedText = ""
    })
  }

  setSearch(val: any): void {
    this.searchedText = val
    this.router.navigate([''], {
      relativeTo: this.route,
      queryParams: {
        name: this.searchedText
      },
      replaceUrl:true,
      queryParamsHandling: 'merge'
    })
  }
}
