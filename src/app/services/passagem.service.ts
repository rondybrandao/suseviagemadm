import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
//import * as firebase from 'firebase';
import * as moment from 'moment'

@Injectable({
  providedIn: 'root'
})
export class PassagemService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  addPassagem(){
    this.db.database.ref('passagens/silva_lopes/10/31').push({
      nome:"Jonh Snow",
      id:'12345678-9',
      valor_pago: 200.00,
      poltronas: [{
        nome:'Arya Stark',
        poltrona:'1a',
        id:'123456987-10',
        idade: '20 anos'
      },
      {
        nome: 'Sansa Stark',
        poltrona:'1b',
        id: '987456321-2',
        idade:'23 anos'
      }]

    })
  }

  getAllPassagens(){
    var listPassagens
    return new Promise((resolve)=>{
      this.db.list('passagens/silva_lopes/11/15').snapshotChanges()
        .subscribe(list => {
          listPassagens = list.map(item => {
            return {
              key: item.key, ...item.payload.val()
            }
          })
          console.log(listPassagens)
          resolve(listPassagens)
        })
    })
  }

  checkIn(key, index){
    console.log(key, index)
    const check = {
      createdAt: moment().format('lll')
    }
    console.log(check)
    return new Promise((resolve) => {
      try {
        this.db.database.ref('passagens/silva_lopes/04/11/' + key + '/passageiros').child(index).update({
          checkIn:check
        })
      } catch (error) {
        console.log(error)
      }
    })
  }

  checkOut(key, index){
    return new Promise((resolve) => {
      this.db.database.ref('passagens/silva_lopes/04/11/' + key + '/passageiros').child(index).update({
        checkIn:false
      })
    })
  }

  getDiasDeViagem(){
    return new Promise((resolve)=>{
      this.db.database.ref('passagens/silva_lopes/diasDeViagens').once('value').then(res=>{
        console.log(res)
        console.log(res.val())
        let r = res.val()
        resolve(r)
      })
    })
  }

  getDiasDeViagem_(){
    var key
    return new Promise((resolve)=>{
      this.db.database.ref('passagens/silva_lopes/11').once('value', res => {
        console.log(res.val())
        res.forEach(re => {
          key = re.key
        })
        console.log(key)
      })
    })
  }

}
