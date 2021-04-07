import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  arrowsrc: any='./assets/arrow_back_ios_black_24dp.svg';
  
  
  columnDefs = [
      {headerName: 'Description', field: 'description' },
      {headerName: 'Instruction Type', field: 'instruction'},
      {headerName: 'Record Info.',field: 'record'},
      {headerName: 'Final Source $', field: 'final'},
      {headerName: 'Final Source Base MV',field: 'base'},
      {headerName: 'Comments', field: 'comments'}

  ];

  rowData = [
      { description: 'MOMENTUM CAPITAL', instruction: 'Equity', record:'1', final: '31,600.47', base: '1,704.91', comments: 'Dolores ispum' },
      { description: 'MOMENTUM CAPITAL', instruction: 'IR_FUTURE', record: '1', final: '31,600.47', base: '1,704.91', comments: 'Dolores ispum' },
      { description: 'MOMENTUM CAPITAL', instruction: 'Equity', record: '1', final: '31,600.47', base: '1,704.91', comments: 'Dolores ispum' }
  ];
  
  constructor() { }

  ngOnInit() {
  }

  getsrc(){
   if(this.isExpanded == false){
     this.arrowsrc = './assets/arrow_forward_ios_black_24dp.svg';
   } 
   else{
    this.arrowsrc = './assets/arrow_back_ios_black_24dp.svg';
   } 
  }

}
