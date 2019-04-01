import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/model/model.contact';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact = new Contact();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSave() {

    this.onSaveService(this.contact).subscribe(c => {
      console.log(c);
    })

  }

  onSaveService(contact: Contact) {
    return this.http.post("http://localhost:8080/contacts", contact);
  }

}
