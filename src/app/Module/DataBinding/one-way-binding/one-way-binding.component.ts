import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.scss']
})
export class OneWayBindingComponent implements OnInit {

  public name: string = 'Henry MasterYi'
  public hocVien: any = { hoTen: 'Nguyễn Văn A', gioiTinh: 'Nam' }
  changName(obInput: any) {

    // lấy thuộc tính
    console.log(obInput.value);
    console.log(obInput.name);

    // lấy attribute thì pải dùng getAttribute mới lấy được
    console.log(obInput.getAttribute('inputName'))

    // thay đổi thuộc tính của đối tượng hocVien
    this.hocVien.hoTen = obInput.value

  }
  constructor() { }

  ngOnInit(): void {
  }

}
