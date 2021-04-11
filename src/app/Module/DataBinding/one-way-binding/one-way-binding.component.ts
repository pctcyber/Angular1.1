import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  public name:string = 'Henry MasterYi'
  public hocVien:any = {hoTen:'Nguyễn Văn A', gioiTinh:'Nam'}
  constructor() { }

  ngOnInit(): void {
  }

}
