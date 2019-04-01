import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  pageContacts: any;
  motCle: String = "";
  page: number = 0;
  size: number = 5;
  pages: any;
  
  constructor(private http: HttpClient) { }

  getcontacts() {
    return this.http.get("http://localhost:8080/contacts")
  }



  ngOnInit() {
 /*    this.getcontacts().subscribe(c => {
      this.contacts=c
      
    }) */
  }

  search() {
    this.getContacts(this.motCle, this.page, this.size).subscribe(contacts => {
      this.pageContacts = contacts;
      console.log(this.pageContacts)
     // this.pages = new Array(this.pageContacts.totalPages)

    }, error => {
      console.log(error)
    })
  }
  
  
  getContacts(motCle: String, page: number, size: number) {
    return this.http.get("http://localhost:8080/search?mc=" + motCle + "&size=" + size + "&page=" + page);
  }

}
