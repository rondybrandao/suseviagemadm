import { PassagemService } from './../services/passagem.service';
import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  passageiros 
  diasDeViagem = []
  constructor(
    private service: PassagemService 
  ) {
    this.getDiasDeViagem()
    this.getListPassagens()
  }
  addPassagem(){
    this.service.addPassagem()
  }
  getListPassagens(){
    
    this.service.getAllPassagens().then((list) => {
      console.log('list_passagens:',list)
      this.passageiros = list
    })
  }

  checkIn(key, index){
    console.log('checkIn', key, index)
    this.service.checkIn(key, index)
  }
  checkOut(key, index){
    console.log(key, index)
  }

  getDiasDeViagem() {
    var dias 
    this.service.getDiasDeViagem().then((res)=>{
      console.log(res)
      this.diasDeViagem.push(res)
      dias = this.diasDeViagem.toString().split(" ")
      console.log(this.diasDeViagem.toString().split(" "))
      
    })
  }
}
