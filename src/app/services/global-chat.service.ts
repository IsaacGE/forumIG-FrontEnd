import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalChatService {
  apiUrl:String = environment.apiUrl
  comments:any[]

  message:String
  idUser:any[]
  idUserOnline:String
  nameUser:String
  dateMsg:Date

  constructor(private http:HttpClient) { 
    this.comments = []
    this.getComments()
    this.idUserOnline = "625e25381bff0d62ed5c1a96"
    this.nameUser = "Isaac Gallegos"
  }

  getComments() {
    this.http.get(`${this.apiUrl}/comments/getComments`).subscribe(
      (res:any) => {
        this.comments = res.comments
        console.log(this.comments)
      },
      (err) => {
        console.log("Error on getComments")
        throw err
      }
    )
  }

  createComment() {
    let newComment = {
      idUser: this.idUserOnline,
      message: this.message,
      nameUser:  this.nameUser
    }
    this.http.post(`${this.apiUrl}/comments/createComment`, newComment).subscribe(
      (res:any) => {
        console.log(res)
        this.getComments()
        this.message = ""
      },
      (err) => {
        console.log("Error on register new comment")
        throw err
      }
    )
  }

}
