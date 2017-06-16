import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  data: any;
  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.data = {
      'to': 'mahdi.kahia@esprit.tn',
      'target': 'app',
      'username': 'kahia'
    }
    this.http.get('https://redcarpet-thegate.herokuapp.com/emails').subscribe();
  }

  send() {
    this.http.post("https://redcarpet-thegate.herokuapp.com/emails", this.data).subscribe(data => {
      alert('Email Sent, Thank You');
    }, err => {
      alert('an error has occured please try again');
    });
  }

}
